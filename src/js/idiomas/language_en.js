var language = typeof language == "undefined"? {}: language

language.en = {
  locale: "en-GB",

  entorno: "Environment",
  guardadas: "Saved",
  ayuda: "Help",
  configuracion: "Settings",
  idioma: "Language",
  direccion: "URL",
  metodo: "Method",
  enviar_como: "Send as",
  clave_valor: "Key value",
  multiple: "Multiple",
  enviar: "Send",
  parar: "Stop",
  parando: "Stopping...",
  cuerpo: "Body",
  cabeceras: "Headers",
  guardar_en_entorno: "Save to environment",
  anadir_atributo: "Add attribute",
  json_placeholder: '{"key": "value"}',
  formatear: "Format",
  formatear_titulo: "Indents the JSON, even if it has variables",
  anadir_cabecera: "Add header",
  ayuda_cabeceras: "You can use environment variables, for example Authorization = Bearer {{token}}",
  anadir_valor: "Add value to save",
  ayuda_extraer: "When the response is successful (2xx) the value is saved in that environment key (it is created if it does not exist). "
    +"The body path works like in javascript: token, data.access_token, items[0].id. Empty saves the whole body. "
    +"For a header write its name: X-Auth-Token, Location...",

  nueva_pestana: "New tab",
  cerrar_pestana: "Close tab",

  clave: "Key",
  valor: "Value",
  deshabilitar: "Disable",
  habilitar: "Enable",
  borrar: "Delete",
  del_cuerpo: "From the body",
  de_la_cabecera: "From the header",
  guardar_en: "save in",

  json_valido: "Valid JSON",
  variables_no_existen: " (there are variables that do not exist in the environment)",

  estado: "Status : %estado%",
  enviando: "<i>Sending...</i>",
  json_no_valido: "<b>Invalid JSON</b> %error%",
  cerrado_sin_respuesta: "<i>Palomo was closed before the response arrived</i>",
  tiempo: "Time : %tiempo%",
  previsualizar: "Preview",
  guardada_ok: "Saved",
  guardar_peticion: "Save request",
  sin_contenido: "(no content)",
  no_hay_cabeceras: "No headers",

  aviso_entorno: "Environment: %avisos%",
  no_guarda_no_correcta: "Nothing is saved in the environment because the response is not successful",
  no_encontrado: "%ruta% not found",
  el_cuerpo: "the body",

  envio_multiple: "Multiple sending",
  cuantas_veces: "How many times",
  como_se_envian: "How they are sent",
  modo_paralelo: "All at once",
  modo_paralelo_ayuda: "all together, without waiting for any",
  modo_secuencial: "One after another",
  modo_secuencial_ayuda: "waits for the response of one before sending the next",
  modo_intervalo: "Every so often",
  modo_intervalo_ayuda: "sends one every interval, without waiting for the response",
  cada_ms: "Every (ms)",
  aceptar: "OK",
  resumen_paralelo: "all at once",
  resumen_secuencial: "one after another",
  resumen_intervalo: "every %intervalo% ms",
  veces_modo: "%veces% times, %modo%",
  cambiar_multiple_titulo: "Change the multiple sending options",
  multiple_bien: "%numero% ok",
  multiple_mal: "%numero% failed",
  multiple_parado: "stopped",
  multiple_terminado: "finished",
  multiple_enviando: "sending...",
  multiple_tiempos: "minimum %minimo% ms · average %media% ms · maximum %maximo% ms",

  cerrar: "Close",
  abrir_pestana_nueva: "Open in new tab",
  anadir_variable: "Add variable +",
  entorno_ayuda_1: "Write {{key}} in the URL, the attributes or the JSON and it will be replaced by its value when sending",
  entorno_ayuda_2: "With {{$key}} its value is sent and then 1 is added to it (only if the value is an integer)",
  entorno_ayuda_3: "{{$i}} is the send number: 1, 2, 3... in multiple sending and 1 in a normal one",
  nombre: "Name",
  guardar: "Save",
  peticiones_guardadas: "Saved requests",
  no_hay_guardadas: "There are no saved requests, save one with the floppy disk button",
  recuperar: "Restore",
  detalle_direccion: "URL :",
  detalle_cabeceras: "Headers :",
  detalle_json: "JSON :",
  detalle_atributos: "Attributes :",
  ninguno: "none",

  ayuda_titulo: "Palomo help · version",
  ayuda_variables: `
    <h3>Environment variables</h3>
    <p>The <b>Environment</b> stores keys with their value. They can be used in the URL, the attributes, the JSON and the headers:</p>
    <ul>
      <li><code>{{key}}</code> is replaced by its value when sending. If the key does not exist it is left as it is.</li>
      <li><code>{{$key}}</code> is replaced by its value and <b>then 1 is added to it in the environment</b>. It only works if the value is an integer.
        If it appears several times in the same request all of them get the same number and 1 is added only once. Leading zeros are kept: <code>007</code> becomes <code>008</code>.</li>
      <li><code>{{$i}}</code> is the send number: 1, 2, 3... in multiple sending and 1 in a normal one. It does not change the environment.</li>
    </ul>
    <p>In the JSON each variable has a colour: <span class="var_entorno">{{key}}</span> from the environment,
      <span class="var_contador">{{$key}}</span> counter, <span class="var_iteracion">{{$i}}</span> send number,
      and <span class="var_desconocida">in red</span> the ones that do not exist in the environment (or counters that are not a number).</p>
    <p>The JSON is checked with the values already in place, so <code>{"id": {{$i}}}</code> without quotes is valid.
      A number with leading zeros (<code>007</code>) is not valid JSON without quotes: <code>{"code": "{{$key}}"}</code>.</p>`,
  ayuda_escribir_json: `
    <h3>Writing the JSON</h3>
    <ul>
      <li><code>{</code>, <code>[</code> and <code>"</code> close by themselves. Typing <code>{{</code> gives <code>{{}}</code> to put the variable inside.</li>
      <li><code>Enter</code> keeps the indentation, and between <code>{}</code> or <code>[]</code> it opens a new block. <code>Tab</code> inserts 2 spaces and <code>Shift+Tab</code> removes them.</li>
      <li><b>Format</b> indents the JSON, even if it has variables.</li>
      <li>Below it always shows whether the JSON is valid and, if not, the error.</li>
    </ul>`,
  ayuda_multiple: `
    <h3>Multiple sending</h3>
    <p>Ticking <b>Multiple</b> sends the request several times. When ticking it you choose how many and how:</p>
    <ul>
      <li><b>All at once</b>: all together, without waiting for any.</li>
      <li><b>One after another</b>: waits for the response of one before sending the next.</li>
      <li><b>Every so often</b>: sends one every X milliseconds without waiting for the response.</li>
    </ul>
    <p>Hovering over <b>Send</b> shows how many times and how it will be sent. To change it click the word <b>Multiple</b>. While sending, the <b>Send</b> button becomes <b>Stop</b>
      (the ones already sent cannot be cancelled). Each send appears in the list with its code, its time and the time it went out, and clicking it shows its response.</p>`,
  ayuda_cabeceras_seccion: `
    <h3>Headers</h3>
    <p>In the <b>Headers</b> section you add the request headers, for example <code>Authorization</code> = <code>Bearer {{token}}</code>.
      If there is a body <code>Content-Type: application/json</code> is sent, unless you set your own Content-Type.
      The response headers are shown in the <b>Headers</b> tab below.</p>`,
  ayuda_guardar_entorno: `
    <h3>Saving response values to the environment</h3>
    <p>In the <b>Save to environment</b> section each row says where the value comes from and in which environment key it is saved (it is created if it does not exist):</p>
    <ul>
      <li><b>From the body</b>: a path like in javascript: <code>token</code>, <code>data.access_token</code>, <code>items[0].id</code>. Empty saves the whole body.</li>
      <li><b>From the header</b>: its name, upper or lower case does not matter: <code>X-Auth-Token</code>, <code>Location</code>.</li>
    </ul>
    <p>It is only saved when the response is successful (2xx), so an error does not overwrite a good token. Above the response you can see what was saved and what was not found.</p>
    <p><b>Example, login and token:</b> in the login request <code>data.access_token</code> is saved in <code>token</code>,
      and the other requests get the header <code>Authorization</code> = <code>Bearer {{token}}</code>.</p>`,
  ayuda_guardadas: `
    <h3>Saved requests</h3>
    <p>The floppy disk saves the request of the tab with a name: URL, method, body, headers, what is saved to the environment and the multiple sending options.
      In <b>Saved requests</b>, clicking the name shows what it contains and <b>Restore</b> opens it in a new tab.</p>`,
  ayuda_respuesta: `
    <h3>The response</h3>
    <ul>
      <li>Hovering over the status code shows what it means.</li>
      <li>URLs that appear in a JSON can be clicked to view them (images or pages).</li>
      <li>If the response is an html page the <b>Preview</b> button appears.</li>
      <li>The body is shown even if it is an error, APIs usually explain there what went wrong.</li>
    </ul>`,
  ayuda_sesion: `
    <h3>Closing and opening again</h3>
    <p>Tabs are kept with their request and their last response. Below the time it shows when the request was made, so you know whether the result is recent or old.
      If the responses are very big and do not fit, the tabs and the codes are kept but not the response bodies.</p>`,
  ayuda_ventanas: `
    <h3>Several windows</h3>
    <p>Each window has its own tabs, but the environment and the saved requests are the same in all of them: what one changes the others see.
      When Palomo is opened again the tabs of the main window are restored, the ones of windows opened with <b>New window</b> are not kept.</p>`,
  ayuda_atajos: `
    <h3>Keyboard shortcuts</h3>
    <ul>
      <li><code>Ctrl+Enter</code> send, <code>Ctrl+S</code> save the request</li>
      <li><code>Ctrl+O</code> saved requests, <code>Ctrl+E</code> environment</li>
      <li><code>Ctrl+N</code> new window, <code>Ctrl+W</code> close tab, <code>Ctrl+Q</code> quit</li>
      <li><code>Ctrl+,</code> settings, <code>F1</code> this help</li>
    </ul>`,

  codigos_http: {
    0: ["No response", "Could not connect: there is no network, the URL is wrong or the browser blocked it because of CORS."],
    100: ["Continue", "The server has received the headers and the client can send the body."],
    101: ["Switching Protocols", "The server switches protocol as the client asked (for example to WebSocket)."],
    102: ["Processing", "The server has received the request and is processing it, there is no response yet."],
    103: ["Early Hints", "The server sends some headers ahead of the final response."],
    200: ["OK", "The request went well."],
    201: ["Created", "The request went well and a new resource has been created."],
    202: ["Accepted", "The request has been accepted but has not been processed yet."],
    203: ["Non-Authoritative Information", "The response has been modified by a proxy, it does not come directly from the original server."],
    204: ["No Content", "The request went well but there is no content to return."],
    205: ["Reset Content", "The request went well and the client has to reset the form or the view."],
    206: ["Partial Content", "The server returns only part of the resource, as requested with the Range header."],
    207: ["Multi-Status", "The response contains the status of several operations at once (WebDAV)."],
    208: ["Already Reported", "These elements have already been included earlier in the same response (WebDAV)."],
    226: ["IM Used", "The server returns the resource with changes applied over the version the client had."],
    300: ["Multiple Choices", "There are several possible responses and the client has to choose one."],
    301: ["Moved Permanently", "The resource has moved permanently to another URL (see the Location header)."],
    302: ["Found", "The resource is temporarily at another URL (see the Location header)."],
    303: ["See Other", "The response has to be requested with GET at another URL."],
    304: ["Not Modified", "The resource has not changed since last time, the cached copy can be used."],
    307: ["Temporary Redirect", "The resource is temporarily at another URL and the request has to be repeated with the same method."],
    308: ["Permanent Redirect", "The resource has moved permanently and the request has to be repeated with the same method."],
    400: ["Bad Request", "The request is malformed (wrong syntax, malformed JSON...)."],
    401: ["Unauthorized", "Authentication is needed to access the resource."],
    402: ["Payment Required", "Reserved for payments, hardly ever used."],
    403: ["Forbidden", "The server understood the request but does not give you permission."],
    404: ["Not Found", "The requested resource was not found."],
    405: ["Method Not Allowed", "The method (GET, POST...) is not allowed for this resource."],
    406: ["Not Acceptable", "The server cannot return the content in any format the client accepts."],
    407: ["Proxy Authentication Required", "Authentication with the proxy is needed."],
    408: ["Request Timeout", "The server got tired of waiting for the request to arrive."],
    409: ["Conflict", "The request conflicts with the current state of the resource (for example, it already exists)."],
    410: ["Gone", "The resource existed but has been deleted permanently."],
    411: ["Length Required", "The server needs the Content-Length header."],
    412: ["Precondition Failed", "Some condition in the request headers is not met."],
    413: ["Content Too Large", "The request body is too big."],
    414: ["URI Too Long", "The URL is too long."],
    415: ["Unsupported Media Type", "The server does not accept the body format (see the Content-Type)."],
    416: ["Range Not Satisfiable", "The requested range does not exist in the resource."],
    417: ["Expectation Failed", "The server cannot meet the Expect header."],
    418: ["I'm a teapot", "I am a teapot. It is an April Fools' joke from 1998 (RFC 2324)."],
    421: ["Misdirected Request", "The request reached a server that cannot answer it."],
    422: ["Unprocessable Content", "The request is well written but the data is not valid."],
    423: ["Locked", "The resource is locked (WebDAV)."],
    424: ["Failed Dependency", "The request failed because another one it depended on failed (WebDAV)."],
    425: ["Too Early", "The server does not want to process a request that might be replayed."],
    426: ["Upgrade Required", "You have to switch to another protocol to make this request."],
    428: ["Precondition Required", "The server requires the request to be conditional."],
    429: ["Too Many Requests", "You have made too many requests in a short time, wait a little."],
    431: ["Request Header Fields Too Large", "The request headers are too big."],
    451: ["Unavailable For Legal Reasons", "The resource is not available for legal reasons."],
    500: ["Internal Server Error", "The server had an unexpected error."],
    501: ["Not Implemented", "The server does not know how to do what is asked (for example, it does not support the method)."],
    502: ["Bad Gateway", "An intermediate server received an invalid response from the server behind it."],
    503: ["Service Unavailable", "The server is not available right now (overloaded or under maintenance)."],
    504: ["Gateway Timeout", "An intermediate server got tired of waiting for the server behind it."],
    505: ["HTTP Version Not Supported", "The server does not support the HTTP version of the request."],
    506: ["Variant Also Negotiates", "Server configuration error when choosing the content format."],
    507: ["Insufficient Storage", "The server does not have space to complete the request (WebDAV)."],
    508: ["Loop Detected", "The server has detected an infinite loop (WebDAV)."],
    510: ["Not Extended", "Required extensions are missing in the request."],
    511: ["Network Authentication Required", "You have to authenticate to access the network (for example, hotel wifi)."],
  },
  familias_http: {
    1: ["Informational", "Informational response, the request is still in progress."],
    2: ["Success", "The request went well."],
    3: ["Redirection", "The resource is somewhere else."],
    4: ["Client error", "Something is wrong with the request."],
    5: ["Server error", "The server failed to respond."],
  },
  codigo_desconocido: ["Unknown", "Non-standard code."],

  menu_archivo: "File",
  menu_nueva_ventana: "New window",
  menu_salir: "Quit",
  menu_peticion: "Request",
  menu_enviar: "Send request",
  menu_ver_guardadas: "View saved requests",
  menu_editar_entorno: "Edit environment",
  menu_como_funciona: "How it works",
  deshacer: "Undo",
  rehacer: "Redo",
  cortar: "Cut",
  copiar: "Copy",
  pegar: "Paste",
  seleccionar_todo: "Select all",
  error_direccion_http: "The URL has to start with http:// or https://",
}

if (typeof module != "undefined"){ module.exports = language }
