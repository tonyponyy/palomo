const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('palomo_electron', {
  peticion: (datos) => ipcRenderer.invoke('peticion', datos),
  al_pulsar_menu: (funcion) => ipcRenderer.on('menu', (evento, nombre) => funcion(nombre)),
  cambia_idioma: (idioma) => ipcRenderer.send('idioma', idioma),
})
