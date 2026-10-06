var language = typeof language == "undefined"? {}: language

language.es = {
  locale: "es-ES",

  entorno: "Entorno",
  guardadas: "Guardadas",
  ayuda: "Ayuda",
  configuracion: "Configuracion",
  idioma: "Idioma",
  direccion: "Direccion",
  metodo: "Metodo",
  enviar_como: "Enviar como",
  clave_valor: "Clave valor",
  multiple: "Multiple",
  enviar: "Enviar",
  parar: "Parar",
  parando: "Parando...",
  cuerpo: "Cuerpo",
  cabeceras: "Cabeceras",
  guardar_en_entorno: "Guardar en entorno",
  anadir_atributo: "Añadir atributo",
  json_placeholder: '{"clave": "valor"}',
  formatear: "Formatear",
  formatear_titulo: "Ordena el JSON con sangria, aunque tenga variables",
  anadir_cabecera: "Añadir cabecera",
  ayuda_cabeceras: "Se pueden usar variables del entorno, por ejemplo Authorization = Bearer {{token}}",
  anadir_valor: "Añadir valor a guardar",
  ayuda_extraer: "Cuando la respuesta es correcta (2xx) el valor se guarda en esa clave del entorno (si no existe se crea). "
    +"La ruta del cuerpo es como en javascript: token, data.access_token, items[0].id. Vacia guarda el cuerpo entero. "
    +"En la cabecera se pone su nombre: X-Auth-Token, Location...",

  nueva_pestana: "Nueva pestaña",
  cerrar_pestana: "Cerrar pestaña",

  clave: "Clave",
  valor: "Valor",
  deshabilitar: "Deshabilitar",
  habilitar: "Habilitar",
  borrar: "Borrar",
  del_cuerpo: "Del cuerpo",
  de_la_cabecera: "De la cabecera",
  guardar_en: "guardar en",

  json_valido: "JSON valido",
  variables_no_existen: " (hay variables que no existen en el entorno)",

  estado: "Estado : %estado%",
  enviando: "<i>Enviando...</i>",
  json_no_valido: "<b>JSON no valido</b> %error%",
  cerrado_sin_respuesta: "<i>Se cerro Palomo API-geon antes de que llegara la respuesta</i>",
  tiempo: "Tiempo : %tiempo%",
  previsualizar: "Previsualizar",
  guardada_ok: "Guardada",
  guardar_peticion: "Guardar peticion",
  sin_contenido: "(sin contenido)",
  no_hay_cabeceras: "No hay cabeceras",

  aviso_entorno: "Entorno: %avisos%",
  no_guarda_no_correcta: "No se guarda nada en el entorno porque la respuesta no es correcta",
  no_encontrado: "no se ha encontrado %ruta%",
  el_cuerpo: "el cuerpo",

  envio_multiple: "Envio multiple",
  cuantas_veces: "Cuantas veces",
  como_se_envian: "Como se envian",
  modo_paralelo: "A la vez",
  modo_paralelo_ayuda: "todas de golpe, sin esperar a ninguna",
  modo_secuencial: "Una detras de otra",
  modo_secuencial_ayuda: "espera la respuesta de una para enviar la siguiente",
  modo_intervalo: "Cada cierto tiempo",
  modo_intervalo_ayuda: "lanza una cada intervalo, sin esperar la respuesta",
  cada_ms: "Cada (ms)",
  aceptar: "Aceptar",
  resumen_paralelo: "a la vez",
  resumen_secuencial: "una detras de otra",
  resumen_intervalo: "cada %intervalo% ms",
  veces_modo: "%veces% veces, %modo%",
  cambiar_multiple_titulo: "Cambiar las opciones del envio multiple",
  multiple_bien: "%numero% bien",
  multiple_mal: "%numero% mal",
  multiple_parado: "parado",
  multiple_terminado: "terminado",
  multiple_enviando: "enviando...",
  multiple_tiempos: "minimo %minimo% ms · media %media% ms · maximo %maximo% ms",

  cerrar: "Cerrar",
  abrir_pestana_nueva: "Abrir en pestaña nueva",
  anadir_variable: "Añadir variable +",
  entorno_ayuda_1: "Escribe {{clave}} en la direccion, en los atributos o en el JSON y se cambiara por su valor al enviar",
  entorno_ayuda_2: "Con {{$clave}} se envia su valor y despues se le suma 1 (solo si el valor es un numero entero)",
  entorno_ayuda_3: "{{$i}} es el numero de envio: 1, 2, 3... en el envio multiple y 1 en el normal",
  nombre: "Nombre",
  guardar: "Guardar",
  peticiones_guardadas: "Peticiones guardadas",
  no_hay_guardadas: "No hay peticiones guardadas, guarda una con el boton del disquete",
  coleccion: "Coleccion",
  nombre_coleccion: "Nombre de la coleccion",
  crear_coleccion: "Nueva coleccion",
  renombrar_coleccion: "Renombrar",
  borrar_coleccion: "Borrar coleccion",
  importar: "Importar",
  exportar: "Exportar",
  exportar_todo: "Exportar todo",
  coleccion_general: "General",
  coleccion_sin_nombre: "Escribe un nombre para la coleccion",
  coleccion_ya_existe: "Ya hay una coleccion con ese nombre",
  confirmar_borrar_coleccion: "Se va a borrar la coleccion %nombre% con sus %cuantas% peticiones. ¿Seguro?",
  mover_a_coleccion: "Mover a otra coleccion",
  coleccion_vacia: "No hay peticiones en esta coleccion",
  importadas: "Importadas %cuantas% peticiones",
  importar_error: "El archivo no es un JSON de peticiones valido",
  recuperar: "Recuperar",
  detalle_direccion: "Direccion :",
  detalle_cabeceras: "Cabeceras :",
  detalle_json: "JSON :",
  detalle_atributos: "Atributos :",
  ninguno: "ninguno",

  ayuda_titulo: "Ayuda de Palomo API-geon · version",
  ayuda_variables: `
    <h3>Variables del entorno</h3>
    <p>En <b>Entorno</b> se guardan claves con su valor. Se pueden usar en la direccion, en los atributos, en el JSON y en las cabeceras:</p>
    <ul>
      <li><code>{{clave}}</code> se cambia por su valor al enviar. Si la clave no existe se deja tal cual.</li>
      <li><code>{{$clave}}</code> se cambia por su valor y <b>despues se le suma 1 en el entorno</b>. Solo funciona si el valor es un numero entero.
        Si sale varias veces en la misma peticion todas llevan el mismo numero y solo se suma 1. Los ceros de delante se mantienen: <code>007</code> pasa a <code>008</code>.</li>
      <li><code>{{$i}}</code> es el numero de envio: 1, 2, 3... en el envio multiple y 1 en el normal. No cambia el entorno.</li>
    </ul>
    <p>En el JSON cada variable sale de un color: <span class="var_entorno">{{clave}}</span> del entorno,
      <span class="var_contador">{{$clave}}</span> contador, <span class="var_iteracion">{{$i}}</span> numero de envio,
      y <span class="var_desconocida">en rojo</span> las que no existen en el entorno (o los contadores que no son un numero).</p>
    <p>El JSON se comprueba con los valores ya puestos, asi que <code>{"id": {{$i}}}</code> sin comillas es valido.
      Un numero con ceros delante (<code>007</code>) no es JSON valido sin comillas: <code>{"codigo": "{{$clave}}"}</code>.</p>`,
  ayuda_escribir_json: `
    <h3>Escribir el JSON</h3>
    <ul>
      <li><code>{</code>, <code>[</code> y <code>"</code> se cierran solos. Escribiendo <code>{{</code> sale <code>{{}}</code> para poner la variable dentro.</li>
      <li><code>Enter</code> mantiene la sangria, y entre <code>{}</code> o <code>[]</code> abre un bloque nuevo. <code>Tab</code> mete 2 espacios y <code>Shift+Tab</code> los quita.</li>
      <li><b>Formatear</b> ordena el JSON con sangria, aunque tenga variables.</li>
      <li>Debajo sale en todo momento si el JSON es valido y, si no, el error.</li>
    </ul>`,
  ayuda_multiple: `
    <h3>Envio multiple</h3>
    <p>Marcando <b>Multiple</b> la peticion se envia varias veces. Al marcarlo se eligen cuantas y como:</p>
    <ul>
      <li><b>A la vez</b>: todas de golpe, sin esperar a ninguna.</li>
      <li><b>Una detras de otra</b>: espera la respuesta de una para enviar la siguiente.</li>
      <li><b>Cada cierto tiempo</b>: lanza una cada X milisegundos sin esperar la respuesta.</li>
    </ul>
    <p>Pasando el raton por encima de <b>Enviar</b> se ve cuantas veces y como se va a enviar. Para cambiarlo se pulsa la palabra <b>Multiple</b>. Mientras se envia el boton <b>Enviar</b> pasa a <b>Parar</b>
      (las que ya han salido no se pueden cancelar). Cada envio sale en la lista con su codigo, su tiempo y la hora a la que salio, y pulsandolo se ve su respuesta.</p>`,
  ayuda_cabeceras_seccion: `
    <h3>Cabeceras</h3>
    <p>En la seccion <b>Cabeceras</b> se añaden las de la peticion, por ejemplo <code>Authorization</code> = <code>Bearer {{token}}</code>.
      Si hay cuerpo se envia <code>Content-Type: application/json</code>, salvo que pongas tu propio Content-Type.
      Las de la respuesta se ven en la pestaña <b>Cabeceras</b> de abajo.</p>`,
  ayuda_guardar_entorno: `
    <h3>Guardar valores de la respuesta en el entorno</h3>
    <p>En la seccion <b>Guardar en entorno</b> cada fila dice de donde sale el valor y en que clave del entorno se guarda (si no existe se crea):</p>
    <ul>
      <li><b>Del cuerpo</b>: una ruta como en javascript: <code>token</code>, <code>data.access_token</code>, <code>items[0].id</code>. Vacia guarda el cuerpo entero.</li>
      <li><b>De la cabecera</b>: su nombre, da igual mayusculas o minusculas: <code>X-Auth-Token</code>, <code>Location</code>.</li>
    </ul>
    <p>Solo se guarda cuando la respuesta es correcta (2xx), asi un error no pisa un token bueno. Encima de la respuesta sale lo que se ha guardado y lo que no se ha encontrado.</p>
    <p><b>Ejemplo, login y token:</b> en la peticion de login se guarda <code>data.access_token</code> en <code>token</code>,
      y en las demas se pone la cabecera <code>Authorization</code> = <code>Bearer {{token}}</code>.</p>`,
  ayuda_guardadas: `
    <h3>Peticiones guardadas</h3>
    <p>El disquete guarda la peticion de la pestaña con un nombre: direccion, metodo, cuerpo, cabeceras, lo que se guarda en el entorno y las opciones del envio multiple.
      En <b>Peticiones guardadas</b>, pulsando el nombre se ve lo que tiene y <b>Recuperar</b> la abre en una pestaña nueva.</p>
    <p>Las peticiones se organizan en <b>colecciones</b> (las pestañas con la carpeta). Al guardar se elige la coleccion, y desde la lista se pueden mover de una a otra. <b>Exportar</b> descarga la coleccion que se esta viendo en un JSON, <b>Exportar todo</b> todas, e <b>Importar</b> las añade desde un JSON exportado.</p>`,
  ayuda_respuesta: `
    <h3>La respuesta</h3>
    <ul>
      <li>Pasando el raton por el codigo de estado se ve que significa.</li>
      <li>Las direcciones que salen en un JSON se pueden pulsar para verlas (imagenes o paginas).</li>
      <li>Si la respuesta es una pagina html sale el boton <b>Previsualizar</b>.</li>
      <li>El cuerpo se ve aunque sea un error, las apis suelen explicar ahi que ha fallado.</li>
    </ul>`,
  ayuda_sesion: `
    <h3>Al cerrar y volver a abrir</h3>
    <p>Las pestañas se conservan con su peticion y su ultima respuesta. Debajo del tiempo sale cuando se hizo la peticion, para saber si el resultado es de ahora o de antes.
      Si las respuestas son muy grandes y no caben, se conservan las pestañas y los codigos pero no el cuerpo de las respuestas.</p>`,
  ayuda_ventanas: `
    <h3>Varias ventanas</h3>
    <p>Cada ventana tiene sus pestañas, pero el entorno y las peticiones guardadas son los mismos en todas: lo que cambia una lo ven las demas.
      Al volver a abrir Palomo API-geon se recuperan las pestañas de la ventana principal, las de las ventanas abiertas con <b>Nueva ventana</b> no se conservan.</p>`,
  ayuda_atajos: `
    <h3>Atajos de teclado</h3>
    <ul>
      <li><code>Ctrl+Enter</code> enviar, <code>Ctrl+S</code> guardar la peticion</li>
      <li><code>Ctrl+O</code> peticiones guardadas, <code>Ctrl+E</code> entorno</li>
      <li><code>Ctrl+N</code> nueva ventana, <code>Ctrl+W</code> cerrar pestaña, <code>Ctrl+Q</code> salir</li>
      <li><code>Ctrl+,</code> configuracion, <code>F1</code> esta ayuda</li>
    </ul>`,

  codigos_http: {
    0: ["Sin respuesta", "No se ha podido conectar: no hay red, la direccion esta mal escrita o el navegador la ha bloqueado por CORS."],
    100: ["Continue", "El servidor ha recibido las cabeceras y el cliente puede enviar el cuerpo."],
    101: ["Switching Protocols", "El servidor cambia de protocolo como ha pedido el cliente (por ejemplo a WebSocket)."],
    102: ["Processing", "El servidor ha recibido la peticion y la esta procesando, todavia no hay respuesta."],
    103: ["Early Hints", "El servidor adelanta algunas cabeceras antes de la respuesta final."],
    200: ["OK", "La peticion ha ido bien."],
    201: ["Created", "La peticion ha ido bien y se ha creado un recurso nuevo."],
    202: ["Accepted", "La peticion se ha aceptado pero todavia no se ha procesado."],
    203: ["Non-Authoritative Information", "La respuesta viene modificada por un proxy, no directamente del servidor original."],
    204: ["No Content", "La peticion ha ido bien pero no hay contenido que devolver."],
    205: ["Reset Content", "La peticion ha ido bien y el cliente tiene que reiniciar el formulario o la vista."],
    206: ["Partial Content", "El servidor devuelve solo una parte del recurso, como se ha pedido con la cabecera Range."],
    207: ["Multi-Status", "La respuesta trae el estado de varias operaciones a la vez (WebDAV)."],
    208: ["Already Reported", "Estos elementos ya se han incluido antes en la misma respuesta (WebDAV)."],
    226: ["IM Used", "El servidor devuelve el recurso con cambios aplicados sobre la version que tenia el cliente."],
    300: ["Multiple Choices", "Hay varias respuestas posibles y el cliente tiene que elegir una."],
    301: ["Moved Permanently", "El recurso se ha movido para siempre a otra direccion (mira la cabecera Location)."],
    302: ["Found", "El recurso esta temporalmente en otra direccion (mira la cabecera Location)."],
    303: ["See Other", "La respuesta hay que pedirla con GET en otra direccion."],
    304: ["Not Modified", "El recurso no ha cambiado desde la ultima vez, se puede usar la copia guardada en cache."],
    307: ["Temporary Redirect", "El recurso esta temporalmente en otra direccion y hay que repetir la peticion con el mismo metodo."],
    308: ["Permanent Redirect", "El recurso se ha movido para siempre y hay que repetir la peticion con el mismo metodo."],
    400: ["Bad Request", "La peticion esta mal hecha (sintaxis incorrecta, JSON mal formado...)."],
    401: ["Unauthorized", "Hace falta autenticarse para acceder al recurso."],
    402: ["Payment Required", "Reservado para pagos, casi no se usa."],
    403: ["Forbidden", "El servidor ha entendido la peticion pero no te da permiso."],
    404: ["Not Found", "No se ha encontrado el recurso pedido."],
    405: ["Method Not Allowed", "El metodo (GET, POST...) no esta permitido para este recurso."],
    406: ["Not Acceptable", "El servidor no puede devolver el contenido en ningun formato que acepte el cliente."],
    407: ["Proxy Authentication Required", "Hace falta autenticarse en el proxy."],
    408: ["Request Timeout", "El servidor se ha cansado de esperar a que llegue la peticion."],
    409: ["Conflict", "La peticion choca con el estado actual del recurso (por ejemplo, ya existe)."],
    410: ["Gone", "El recurso existia pero se ha borrado para siempre."],
    411: ["Length Required", "El servidor necesita la cabecera Content-Length."],
    412: ["Precondition Failed", "No se cumple alguna condicion de las cabeceras de la peticion."],
    413: ["Content Too Large", "El cuerpo de la peticion es demasiado grande."],
    414: ["URI Too Long", "La direccion es demasiado larga."],
    415: ["Unsupported Media Type", "El servidor no acepta el formato del cuerpo (mira el Content-Type)."],
    416: ["Range Not Satisfiable", "El rango pedido no existe en el recurso."],
    417: ["Expectation Failed", "El servidor no puede cumplir la cabecera Expect."],
    418: ["I'm a teapot", "Soy una tetera. Es una broma del 1 de abril de 1998 (RFC 2324)."],
    421: ["Misdirected Request", "La peticion ha llegado a un servidor que no puede responderla."],
    422: ["Unprocessable Content", "La peticion esta bien escrita pero los datos no son validos."],
    423: ["Locked", "El recurso esta bloqueado (WebDAV)."],
    424: ["Failed Dependency", "La peticion ha fallado porque fallo otra de la que dependia (WebDAV)."],
    425: ["Too Early", "El servidor no quiere procesar una peticion que podria repetirse."],
    426: ["Upgrade Required", "Hay que cambiar a otro protocolo para hacer esta peticion."],
    428: ["Precondition Required", "El servidor exige que la peticion sea condicional."],
    429: ["Too Many Requests", "Has hecho demasiadas peticiones en poco tiempo, espera un poco."],
    431: ["Request Header Fields Too Large", "Las cabeceras de la peticion son demasiado grandes."],
    451: ["Unavailable For Legal Reasons", "El recurso no esta disponible por motivos legales."],
    500: ["Internal Server Error", "El servidor ha tenido un error inesperado."],
    501: ["Not Implemented", "El servidor no sabe hacer lo que se le pide (por ejemplo, no soporta el metodo)."],
    502: ["Bad Gateway", "Un servidor intermedio ha recibido una respuesta no valida del servidor de detras."],
    503: ["Service Unavailable", "El servidor no esta disponible ahora mismo (sobrecargado o en mantenimiento)."],
    504: ["Gateway Timeout", "Un servidor intermedio se ha cansado de esperar al servidor de detras."],
    505: ["HTTP Version Not Supported", "El servidor no soporta la version de HTTP de la peticion."],
    506: ["Variant Also Negotiates", "Error de configuracion del servidor al elegir el formato del contenido."],
    507: ["Insufficient Storage", "El servidor no tiene espacio para completar la peticion (WebDAV)."],
    508: ["Loop Detected", "El servidor ha detectado un bucle infinito (WebDAV)."],
    510: ["Not Extended", "Faltan extensiones necesarias en la peticion."],
    511: ["Network Authentication Required", "Hay que autenticarse para acceder a la red (por ejemplo, el wifi de un hotel)."],
  },
  familias_http: {
    1: ["Informativo", "Respuesta informativa, la peticion sigue en curso."],
    2: ["Correcto", "La peticion ha ido bien."],
    3: ["Redireccion", "El recurso esta en otro sitio."],
    4: ["Error del cliente", "Algo falla en la peticion."],
    5: ["Error del servidor", "El servidor ha fallado al responder."],
  },
  codigo_desconocido: ["Desconocido", "Codigo que no es estandar."],

  menu_archivo: "Archivo",
  menu_nueva_ventana: "Nueva ventana",
  menu_salir: "Salir",
  menu_peticion: "Peticion",
  menu_enviar: "Enviar peticion",
  menu_ver_guardadas: "Ver peticiones guardadas",
  menu_editar_entorno: "Editar entorno",
  menu_como_funciona: "Como funciona",
  deshacer: "Deshacer",
  rehacer: "Rehacer",
  cortar: "Cortar",
  copiar: "Copiar",
  pegar: "Pegar",
  seleccionar_todo: "Seleccionar todo",
  error_direccion_http: "La direccion tiene que empezar por http:// o https://",
}

if (typeof module != "undefined"){ module.exports = language }
