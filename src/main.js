const { app, BrowserWindow, Menu, ipcMain, net, session, shell } = require('electron')
const path = require('path')
const idiomas = {}
for (const codigo of ['es', 'zh', 'en', 'ca', 'ru', 'de', 'ja']) {
  Object.assign(idiomas, require('./js/idiomas/language_' + codigo + '.js'))
}
let idioma_actual = 'es'
let textos = idiomas.es

function crear_ventana(nueva = false) {
  const ventana = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'img/palomok.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  })
  ventana.loadFile(path.join(__dirname, 'palomo.html'), nueva ? { query: { nueva: '1' } } : {})

  ventana.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//.test(url)) shell.openExternal(url)
    return { action: 'deny' }
  })

  ventana.webContents.on('will-navigate', (evento) => evento.preventDefault())

  ventana.webContents.on('context-menu', (evento, datos) => {
    let plantilla = []
    if (datos.isEditable) {
      const puede = datos.editFlags
      plantilla = [
        { label: textos.deshacer, role: 'undo', enabled: puede.canUndo },
        { label: textos.rehacer, role: 'redo', enabled: puede.canRedo },
        { type: 'separator' },
        { label: textos.cortar, role: 'cut', enabled: puede.canCut },
        { label: textos.copiar, role: 'copy', enabled: puede.canCopy },
        { label: textos.pegar, role: 'paste', enabled: puede.canPaste },
        { type: 'separator' },
        { label: textos.seleccionar_todo, role: 'selectAll' },
      ]
    } else if (datos.selectionText.trim() !== '') {
      plantilla = [{ label: textos.copiar, role: 'copy' }]
    }
    if (plantilla.length > 0) Menu.buildFromTemplate(plantilla).popup({ window: ventana })
  })
}

function crear_menu() {
  const accion = (nombre) => (item, ventana) => {
    if (ventana) ventana.webContents.send('menu', nombre)
  }
  const plantilla = [
    {
      label: textos.menu_archivo,
      submenu: [
        { id: 'nueva_ventana', label: textos.menu_nueva_ventana, accelerator: 'CmdOrCtrl+N', click: () => crear_ventana(true) },
        { id: 'cerrar_pestana', label: textos.cerrar_pestana, accelerator: 'CmdOrCtrl+W', click: accion('cerrar_pestana') },
        { type: 'separator' },
        { label: textos.menu_salir, role: 'quit' },
      ],
    },
    {
      label: textos.menu_peticion,
      submenu: [
        { id: 'enviar', label: textos.menu_enviar, accelerator: 'CmdOrCtrl+Enter', click: accion('enviar') },
        { id: 'guardar', label: textos.guardar_peticion, accelerator: 'CmdOrCtrl+S', click: accion('guardar') },
      ],
    },
    {
      label: textos.peticiones_guardadas,
      submenu: [
        { id: 'guardadas', label: textos.menu_ver_guardadas, accelerator: 'CmdOrCtrl+O', click: accion('guardadas') },
      ],
    },
    {
      label: textos.entorno,
      submenu: [
        { id: 'entorno', label: textos.menu_editar_entorno, accelerator: 'CmdOrCtrl+E', click: accion('entorno') },
      ],
    },
    {
      label: textos.configuracion,
      submenu: [
        { id: 'configuracion', label: textos.configuracion, accelerator: 'CmdOrCtrl+,', click: accion('configuracion') },
      ],
    },
    {
      label: textos.ayuda,
      submenu: [
        { id: 'ayuda', label: textos.menu_como_funciona, accelerator: 'F1', click: accion('ayuda') },
      ],
    },
  ]
  Menu.setApplicationMenu(Menu.buildFromTemplate(plantilla))
}

function permitir_iframes() {
  session.defaultSession.webRequest.onHeadersReceived((detalles, callback) => {
    if (detalles.resourceType !== 'subFrame') return callback({})
    const cabeceras = { ...detalles.responseHeaders }
    for (const nombre of Object.keys(cabeceras)) {
      const n = nombre.toLowerCase()
      if (n === 'x-frame-options' || n === 'content-security-policy') delete cabeceras[nombre]
    }
    callback({ responseHeaders: cabeceras })
  })
}

ipcMain.handle('peticion', async (evento, datos) => {
  if (!/^https?:\/\//.test(datos.url)) {
    return { status: 0, statusText: textos.error_direccion_http, tipo: '', texto: '', cabeceras: [] }
  }
  const opciones = { method: datos.metodo, headers: {}, cache: 'no-store' }
  if (datos.cuerpo != null && datos.metodo !== 'GET') {
    opciones.body = datos.cuerpo
    opciones.headers['Content-type'] = 'application/json'
  }
  for (const [nombre, valor] of datos.cabeceras || []) {
    if (nombre.toLowerCase() === 'content-type') delete opciones.headers['Content-type']
    opciones.headers[nombre] = valor
  }
  try {
    const respuesta = await net.fetch(datos.url, opciones)
    return {
      cabeceras: [...respuesta.headers],
      status: respuesta.status,
      statusText: respuesta.statusText,
      tipo: respuesta.headers.get('content-type') || '',
      texto: await respuesta.text(),
    }
  } catch (e) {
    return { status: 0, statusText: e.message, tipo: '', texto: '', cabeceras: [] }
  }
})

ipcMain.on('idioma', (evento, codigo) => {
  if (idiomas[codigo] == undefined || codigo === idioma_actual) return
  idioma_actual = codigo
  textos = { ...idiomas.es, ...idiomas[codigo] }
  crear_menu()
})

app.whenReady().then(() => {
  permitir_iframes()
  crear_menu()
  crear_ventana()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) crear_ventana()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
