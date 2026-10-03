var language = typeof language == "undefined"? {}: language

language.ca = {
  locale: "ca-ES",

  entorno: "Entorn",
  guardadas: "Desades",
  ayuda: "Ajuda",
  configuracion: "Configuració",
  idioma: "Idioma",
  direccion: "Adreça",
  metodo: "Mètode",
  enviar_como: "Envia com a",
  clave_valor: "Clau valor",
  multiple: "Múltiple",
  enviar: "Envia",
  parar: "Atura",
  parando: "Aturant...",
  cuerpo: "Cos",
  cabeceras: "Capçaleres",
  guardar_en_entorno: "Desa a l'entorn",
  anadir_atributo: "Afegeix atribut",
  json_placeholder: '{"clau": "valor"}',
  formatear: "Formata",
  formatear_titulo: "Ordena el JSON amb sagnat, encara que tingui variables",
  anadir_cabecera: "Afegeix capçalera",
  ayuda_cabeceras: "Es poden fer servir variables de l'entorn, per exemple Authorization = Bearer {{token}}",
  anadir_valor: "Afegeix valor a desar",
  ayuda_extraer: "Quan la resposta és correcta (2xx) el valor es desa en aquesta clau de l'entorn (si no existeix es crea). "
    +"La ruta del cos és com en javascript: token, data.access_token, items[0].id. Buida desa el cos sencer. "
    +"A la capçalera s'hi posa el seu nom: X-Auth-Token, Location...",

  nueva_pestana: "Pestanya nova",
  cerrar_pestana: "Tanca la pestanya",

  clave: "Clau",
  valor: "Valor",
  deshabilitar: "Deshabilita",
  habilitar: "Habilita",
  borrar: "Esborra",
  del_cuerpo: "Del cos",
  de_la_cabecera: "De la capçalera",
  guardar_en: "desa a",

  json_valido: "JSON vàlid",
  variables_no_existen: " (hi ha variables que no existeixen a l'entorn)",

  estado: "Estat : %estado%",
  enviando: "<i>Enviant...</i>",
  json_no_valido: "<b>JSON no vàlid</b> %error%",
  cerrado_sin_respuesta: "<i>Es va tancar Palomo API-geon abans que arribés la resposta</i>",
  tiempo: "Temps : %tiempo%",
  previsualizar: "Previsualitza",
  guardada_ok: "Desada",
  guardar_peticion: "Desa la petició",
  sin_contenido: "(sense contingut)",
  no_hay_cabeceras: "No hi ha capçaleres",

  aviso_entorno: "Entorn: %avisos%",
  no_guarda_no_correcta: "No es desa res a l'entorn perquè la resposta no és correcta",
  no_encontrado: "no s'ha trobat %ruta%",
  el_cuerpo: "el cos",

  envio_multiple: "Enviament múltiple",
  cuantas_veces: "Quantes vegades",
  como_se_envian: "Com s'envien",
  modo_paralelo: "Alhora",
  modo_paralelo_ayuda: "totes de cop, sense esperar-ne cap",
  modo_secuencial: "Una darrere l'altra",
  modo_secuencial_ayuda: "espera la resposta d'una per enviar la següent",
  modo_intervalo: "Cada cert temps",
  modo_intervalo_ayuda: "n'envia una cada interval, sense esperar la resposta",
  cada_ms: "Cada (ms)",
  aceptar: "Accepta",
  resumen_paralelo: "alhora",
  resumen_secuencial: "una darrere l'altra",
  resumen_intervalo: "cada %intervalo% ms",
  veces_modo: "%veces% vegades, %modo%",
  cambiar_multiple_titulo: "Canvia les opcions de l'enviament múltiple",
  multiple_bien: "%numero% bé",
  multiple_mal: "%numero% malament",
  multiple_parado: "aturat",
  multiple_terminado: "acabat",
  multiple_enviando: "enviant...",
  multiple_tiempos: "mínim %minimo% ms · mitjana %media% ms · màxim %maximo% ms",

  cerrar: "Tanca",
  abrir_pestana_nueva: "Obre en una pestanya nova",
  anadir_variable: "Afegeix variable +",
  entorno_ayuda_1: "Escriu {{clau}} a l'adreça, als atributs o al JSON i es canviarà pel seu valor en enviar",
  entorno_ayuda_2: "Amb {{$clau}} s'envia el seu valor i després s'hi suma 1 (només si el valor és un nombre enter)",
  entorno_ayuda_3: "{{$i}} és el número d'enviament: 1, 2, 3... a l'enviament múltiple i 1 al normal",
  nombre: "Nom",
  guardar: "Desa",
  peticiones_guardadas: "Peticions desades",
  no_hay_guardadas: "No hi ha peticions desades, desa'n una amb el botó del disquet",
  recuperar: "Recupera",
  detalle_direccion: "Adreça :",
  detalle_cabeceras: "Capçaleres :",
  detalle_json: "JSON :",
  detalle_atributos: "Atributs :",
  ninguno: "cap",

  ayuda_titulo: "Ajuda de Palomo API-geon · versió",
  ayuda_variables: `
    <h3>Variables de l'entorn</h3>
    <p>A <b>Entorn</b> es desen claus amb el seu valor. Es poden fer servir a l'adreça, als atributs, al JSON i a les capçaleres:</p>
    <ul>
      <li><code>{{clau}}</code> es canvia pel seu valor en enviar. Si la clau no existeix es deixa tal com està.</li>
      <li><code>{{$clau}}</code> es canvia pel seu valor i <b>després s'hi suma 1 a l'entorn</b>. Només funciona si el valor és un nombre enter.
        Si surt diverses vegades a la mateixa petició totes porten el mateix número i només se suma 1. Els zeros del davant es mantenen: <code>007</code> passa a <code>008</code>.</li>
      <li><code>{{$i}}</code> és el número d'enviament: 1, 2, 3... a l'enviament múltiple i 1 al normal. No canvia l'entorn.</li>
    </ul>
    <p>Al JSON cada variable surt d'un color: <span class="var_entorno">{{clau}}</span> de l'entorn,
      <span class="var_contador">{{$clau}}</span> comptador, <span class="var_iteracion">{{$i}}</span> número d'enviament,
      i <span class="var_desconocida">en vermell</span> les que no existeixen a l'entorn (o els comptadors que no són un número).</p>
    <p>El JSON es comprova amb els valors ja posats, així que <code>{"id": {{$i}}}</code> sense cometes és vàlid.
      Un número amb zeros al davant (<code>007</code>) no és JSON vàlid sense cometes: <code>{"codi": "{{$clau}}"}</code>.</p>`,
  ayuda_escribir_json: `
    <h3>Escriure el JSON</h3>
    <ul>
      <li><code>{</code>, <code>[</code> i <code>"</code> es tanquen sols. Escrivint <code>{{</code> surt <code>{{}}</code> per posar-hi la variable a dins.</li>
      <li><code>Enter</code> manté el sagnat, i entre <code>{}</code> o <code>[]</code> obre un bloc nou. <code>Tab</code> hi posa 2 espais i <code>Shift+Tab</code> els treu.</li>
      <li><b>Formata</b> ordena el JSON amb sagnat, encara que tingui variables.</li>
      <li>A sota surt en tot moment si el JSON és vàlid i, si no, l'error.</li>
    </ul>`,
  ayuda_multiple: `
    <h3>Enviament múltiple</h3>
    <p>Marcant <b>Múltiple</b> la petició s'envia diverses vegades. En marcar-ho es tria quantes i com:</p>
    <ul>
      <li><b>Alhora</b>: totes de cop, sense esperar-ne cap.</li>
      <li><b>Una darrere l'altra</b>: espera la resposta d'una per enviar la següent.</li>
      <li><b>Cada cert temps</b>: n'envia una cada X mil·lisegons sense esperar la resposta.</li>
    </ul>
    <p>Passant el ratolí per sobre d'<b>Envia</b> es veu quantes vegades i com s'enviarà. Per canviar-ho es prem la paraula <b>Múltiple</b>. Mentre s'envia, el botó <b>Envia</b> passa a <b>Atura</b>
      (les que ja han sortit no es poden cancel·lar). Cada enviament surt a la llista amb el seu codi, el seu temps i l'hora en què va sortir, i prement-lo se'n veu la resposta.</p>`,
  ayuda_cabeceras_seccion: `
    <h3>Capçaleres</h3>
    <p>A la secció <b>Capçaleres</b> s'hi afegeixen les de la petició, per exemple <code>Authorization</code> = <code>Bearer {{token}}</code>.
      Si hi ha cos s'envia <code>Content-Type: application/json</code>, tret que hi posis el teu propi Content-Type.
      Les de la resposta es veuen a la pestanya <b>Capçaleres</b> de sota.</p>`,
  ayuda_guardar_entorno: `
    <h3>Desar valors de la resposta a l'entorn</h3>
    <p>A la secció <b>Desa a l'entorn</b> cada fila diu d'on surt el valor i en quina clau de l'entorn es desa (si no existeix es crea):</p>
    <ul>
      <li><b>Del cos</b>: una ruta com en javascript: <code>token</code>, <code>data.access_token</code>, <code>items[0].id</code>. Buida desa el cos sencer.</li>
      <li><b>De la capçalera</b>: el seu nom, tant fa majúscules com minúscules: <code>X-Auth-Token</code>, <code>Location</code>.</li>
    </ul>
    <p>Només es desa quan la resposta és correcta (2xx), així un error no trepitja un token bo. Sobre la resposta surt el que s'ha desat i el que no s'ha trobat.</p>
    <p><b>Exemple, login i token:</b> a la petició de login es desa <code>data.access_token</code> a <code>token</code>,
      i a les altres s'hi posa la capçalera <code>Authorization</code> = <code>Bearer {{token}}</code>.</p>`,
  ayuda_guardadas: `
    <h3>Peticions desades</h3>
    <p>El disquet desa la petició de la pestanya amb un nom: adreça, mètode, cos, capçaleres, el que es desa a l'entorn i les opcions de l'enviament múltiple.
      A <b>Peticions desades</b>, prement el nom es veu el que té i <b>Recupera</b> l'obre en una pestanya nova.</p>`,
  ayuda_respuesta: `
    <h3>La resposta</h3>
    <ul>
      <li>Passant el ratolí pel codi d'estat es veu què vol dir.</li>
      <li>Les adreces que surten en un JSON es poden prémer per veure-les (imatges o pàgines).</li>
      <li>Si la resposta és una pàgina html surt el botó <b>Previsualitza</b>.</li>
      <li>El cos es veu encara que sigui un error, les API solen explicar-hi què ha fallat.</li>
    </ul>`,
  ayuda_sesion: `
    <h3>En tancar i tornar a obrir</h3>
    <p>Les pestanyes es conserven amb la seva petició i la seva última resposta. Sota el temps surt quan es va fer la petició, per saber si el resultat és d'ara o d'abans.
      Si les respostes són molt grans i no hi caben, es conserven les pestanyes i els codis però no el cos de les respostes.</p>`,
  ayuda_ventanas: `
    <h3>Diverses finestres</h3>
    <p>Cada finestra té les seves pestanyes, però l'entorn i les peticions desades són els mateixos a totes: el que canvia una ho veuen les altres.
      En tornar a obrir Palomo API-geon es recuperen les pestanyes de la finestra principal, les de les finestres obertes amb <b>Finestra nova</b> no es conserven.</p>`,
  ayuda_atajos: `
    <h3>Dreceres de teclat</h3>
    <ul>
      <li><code>Ctrl+Enter</code> envia, <code>Ctrl+S</code> desa la petició</li>
      <li><code>Ctrl+O</code> peticions desades, <code>Ctrl+E</code> entorn</li>
      <li><code>Ctrl+N</code> finestra nova, <code>Ctrl+W</code> tanca la pestanya, <code>Ctrl+Q</code> surt</li>
      <li><code>Ctrl+,</code> configuració, <code>F1</code> aquesta ajuda</li>
    </ul>`,

  codigos_http: {
    0: ["Sense resposta", "No s'ha pogut connectar: no hi ha xarxa, l'adreça està mal escrita o el navegador l'ha bloquejada per CORS."],
    100: ["Continue", "El servidor ha rebut les capçaleres i el client pot enviar el cos."],
    101: ["Switching Protocols", "El servidor canvia de protocol tal com ha demanat el client (per exemple a WebSocket)."],
    102: ["Processing", "El servidor ha rebut la petició i l'està processant, encara no hi ha resposta."],
    103: ["Early Hints", "El servidor avança algunes capçaleres abans de la resposta final."],
    200: ["OK", "La petició ha anat bé."],
    201: ["Created", "La petició ha anat bé i s'ha creat un recurs nou."],
    202: ["Accepted", "La petició s'ha acceptat però encara no s'ha processat."],
    203: ["Non-Authoritative Information", "La resposta ve modificada per un proxy, no directament del servidor original."],
    204: ["No Content", "La petició ha anat bé però no hi ha contingut per retornar."],
    205: ["Reset Content", "La petició ha anat bé i el client ha de reiniciar el formulari o la vista."],
    206: ["Partial Content", "El servidor retorna només una part del recurs, tal com s'ha demanat amb la capçalera Range."],
    207: ["Multi-Status", "La resposta porta l'estat de diverses operacions alhora (WebDAV)."],
    208: ["Already Reported", "Aquests elements ja s'han inclòs abans a la mateixa resposta (WebDAV)."],
    226: ["IM Used", "El servidor retorna el recurs amb canvis aplicats sobre la versió que tenia el client."],
    300: ["Multiple Choices", "Hi ha diverses respostes possibles i el client n'ha de triar una."],
    301: ["Moved Permanently", "El recurs s'ha mogut per sempre a una altra adreça (mira la capçalera Location)."],
    302: ["Found", "El recurs és temporalment en una altra adreça (mira la capçalera Location)."],
    303: ["See Other", "La resposta s'ha de demanar amb GET en una altra adreça."],
    304: ["Not Modified", "El recurs no ha canviat des de l'última vegada, es pot fer servir la còpia desada a la memòria cau."],
    307: ["Temporary Redirect", "El recurs és temporalment en una altra adreça i cal repetir la petició amb el mateix mètode."],
    308: ["Permanent Redirect", "El recurs s'ha mogut per sempre i cal repetir la petició amb el mateix mètode."],
    400: ["Bad Request", "La petició està mal feta (sintaxi incorrecta, JSON mal format...)."],
    401: ["Unauthorized", "Cal autenticar-se per accedir al recurs."],
    402: ["Payment Required", "Reservat per a pagaments, gairebé no es fa servir."],
    403: ["Forbidden", "El servidor ha entès la petició però no et dona permís."],
    404: ["Not Found", "No s'ha trobat el recurs demanat."],
    405: ["Method Not Allowed", "El mètode (GET, POST...) no està permès per a aquest recurs."],
    406: ["Not Acceptable", "El servidor no pot retornar el contingut en cap format que accepti el client."],
    407: ["Proxy Authentication Required", "Cal autenticar-se al proxy."],
    408: ["Request Timeout", "El servidor s'ha cansat d'esperar que arribés la petició."],
    409: ["Conflict", "La petició xoca amb l'estat actual del recurs (per exemple, ja existeix)."],
    410: ["Gone", "El recurs existia però s'ha esborrat per sempre."],
    411: ["Length Required", "El servidor necessita la capçalera Content-Length."],
    412: ["Precondition Failed", "No es compleix alguna condició de les capçaleres de la petició."],
    413: ["Content Too Large", "El cos de la petició és massa gran."],
    414: ["URI Too Long", "L'adreça és massa llarga."],
    415: ["Unsupported Media Type", "El servidor no accepta el format del cos (mira el Content-Type)."],
    416: ["Range Not Satisfiable", "El rang demanat no existeix al recurs."],
    417: ["Expectation Failed", "El servidor no pot complir la capçalera Expect."],
    418: ["I'm a teapot", "Soc una tetera. És una broma de l'1 d'abril de 1998 (RFC 2324)."],
    421: ["Misdirected Request", "La petició ha arribat a un servidor que no la pot respondre."],
    422: ["Unprocessable Content", "La petició està ben escrita però les dades no són vàlides."],
    423: ["Locked", "El recurs està bloquejat (WebDAV)."],
    424: ["Failed Dependency", "La petició ha fallat perquè va fallar una altra de la qual depenia (WebDAV)."],
    425: ["Too Early", "El servidor no vol processar una petició que es podria repetir."],
    426: ["Upgrade Required", "Cal canviar a un altre protocol per fer aquesta petició."],
    428: ["Precondition Required", "El servidor exigeix que la petició sigui condicional."],
    429: ["Too Many Requests", "Has fet massa peticions en poc temps, espera una mica."],
    431: ["Request Header Fields Too Large", "Les capçaleres de la petició són massa grans."],
    451: ["Unavailable For Legal Reasons", "El recurs no està disponible per motius legals."],
    500: ["Internal Server Error", "El servidor ha tingut un error inesperat."],
    501: ["Not Implemented", "El servidor no sap fer el que se li demana (per exemple, no admet el mètode)."],
    502: ["Bad Gateway", "Un servidor intermedi ha rebut una resposta no vàlida del servidor del darrere."],
    503: ["Service Unavailable", "El servidor no està disponible ara mateix (sobrecarregat o en manteniment)."],
    504: ["Gateway Timeout", "Un servidor intermedi s'ha cansat d'esperar el servidor del darrere."],
    505: ["HTTP Version Not Supported", "El servidor no admet la versió d'HTTP de la petició."],
    506: ["Variant Also Negotiates", "Error de configuració del servidor en triar el format del contingut."],
    507: ["Insufficient Storage", "El servidor no té espai per completar la petició (WebDAV)."],
    508: ["Loop Detected", "El servidor ha detectat un bucle infinit (WebDAV)."],
    510: ["Not Extended", "Falten extensions necessàries a la petició."],
    511: ["Network Authentication Required", "Cal autenticar-se per accedir a la xarxa (per exemple, el wifi d'un hotel)."],
  },
  familias_http: {
    1: ["Informatiu", "Resposta informativa, la petició encara està en curs."],
    2: ["Correcte", "La petició ha anat bé."],
    3: ["Redirecció", "El recurs és en un altre lloc."],
    4: ["Error del client", "Alguna cosa falla a la petició."],
    5: ["Error del servidor", "El servidor ha fallat en respondre."],
  },
  codigo_desconocido: ["Desconegut", "Codi que no és estàndard."],

  menu_archivo: "Fitxer",
  menu_nueva_ventana: "Finestra nova",
  menu_salir: "Surt",
  menu_peticion: "Petició",
  menu_enviar: "Envia la petició",
  menu_ver_guardadas: "Mostra les peticions desades",
  menu_editar_entorno: "Edita l'entorn",
  menu_como_funciona: "Com funciona",
  deshacer: "Desfés",
  rehacer: "Refés",
  cortar: "Retalla",
  copiar: "Copia",
  pegar: "Enganxa",
  seleccionar_todo: "Selecciona-ho tot",
  error_direccion_http: "L'adreça ha de començar per http:// o https://",
}

if (typeof module != "undefined"){ module.exports = language }
