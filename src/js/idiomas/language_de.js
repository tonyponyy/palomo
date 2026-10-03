var language = typeof language == "undefined"? {}: language

language.de = {
  locale: "de-DE",

  entorno: "Umgebung",
  guardadas: "Gespeichert",
  ayuda: "Hilfe",
  configuracion: "Einstellungen",
  idioma: "Sprache",
  direccion: "URL",
  metodo: "Methode",
  enviar_como: "Senden als",
  clave_valor: "Schlüssel-Wert",
  multiple: "Mehrfach",
  enviar: "Senden",
  parar: "Stoppen",
  parando: "Wird gestoppt...",
  cuerpo: "Body",
  cabeceras: "Header",
  guardar_en_entorno: "In Umgebung speichern",
  anadir_atributo: "Attribut hinzufügen",
  json_placeholder: '{"schluessel": "wert"}',
  formatear: "Formatieren",
  formatear_titulo: "Rückt das JSON ein, auch wenn es Variablen enthält",
  anadir_cabecera: "Header hinzufügen",
  ayuda_cabeceras: "Umgebungsvariablen können verwendet werden, zum Beispiel Authorization = Bearer {{token}}",
  anadir_valor: "Zu speichernden Wert hinzufügen",
  ayuda_extraer: "Wenn die Antwort erfolgreich ist (2xx), wird der Wert unter diesem Umgebungsschlüssel gespeichert (existiert er nicht, wird er angelegt). "
    +"Der Pfad im Body funktioniert wie in Javascript: token, data.access_token, items[0].id. Leer speichert den ganzen Body. "
    +"Beim Header gibt man seinen Namen an: X-Auth-Token, Location...",

  nueva_pestana: "Neuer Tab",
  cerrar_pestana: "Tab schließen",

  clave: "Schlüssel",
  valor: "Wert",
  deshabilitar: "Deaktivieren",
  habilitar: "Aktivieren",
  borrar: "Löschen",
  del_cuerpo: "Aus dem Body",
  de_la_cabecera: "Aus dem Header",
  guardar_en: "speichern in",

  json_valido: "Gültiges JSON",
  variables_no_existen: " (es gibt Variablen, die in der Umgebung nicht existieren)",

  estado: "Status : %estado%",
  enviando: "<i>Wird gesendet...</i>",
  json_no_valido: "<b>Ungültiges JSON</b> %error%",
  cerrado_sin_respuesta: "<i>Palomo API-geon wurde geschlossen, bevor die Antwort ankam</i>",
  tiempo: "Zeit : %tiempo%",
  previsualizar: "Vorschau",
  guardada_ok: "Gespeichert",
  guardar_peticion: "Anfrage speichern",
  sin_contenido: "(kein Inhalt)",
  no_hay_cabeceras: "Keine Header",

  aviso_entorno: "Umgebung: %avisos%",
  no_guarda_no_correcta: "In der Umgebung wird nichts gespeichert, weil die Antwort nicht erfolgreich ist",
  no_encontrado: "%ruta% nicht gefunden",
  el_cuerpo: "der Body",

  envio_multiple: "Mehrfachversand",
  cuantas_veces: "Wie oft",
  como_se_envian: "Wie gesendet wird",
  modo_paralelo: "Alle gleichzeitig",
  modo_paralelo_ayuda: "alle auf einmal, ohne auf eine zu warten",
  modo_secuencial: "Eine nach der anderen",
  modo_secuencial_ayuda: "wartet auf die Antwort einer Anfrage, bevor die nächste gesendet wird",
  modo_intervalo: "In Abständen",
  modo_intervalo_ayuda: "sendet eine pro Intervall, ohne auf die Antwort zu warten",
  cada_ms: "Alle (ms)",
  aceptar: "OK",
  resumen_paralelo: "alle gleichzeitig",
  resumen_secuencial: "eine nach der anderen",
  resumen_intervalo: "alle %intervalo% ms",
  veces_modo: "%veces% Mal, %modo%",
  cambiar_multiple_titulo: "Optionen des Mehrfachversands ändern",
  multiple_bien: "%numero% ok",
  multiple_mal: "%numero% fehlgeschlagen",
  multiple_parado: "gestoppt",
  multiple_terminado: "fertig",
  multiple_enviando: "wird gesendet...",
  multiple_tiempos: "Minimum %minimo% ms · Mittel %media% ms · Maximum %maximo% ms",

  cerrar: "Schließen",
  abrir_pestana_nueva: "In neuem Tab öffnen",
  anadir_variable: "Variable hinzufügen +",
  entorno_ayuda_1: "Schreibe {{schluessel}} in die URL, die Attribute oder das JSON, und es wird beim Senden durch seinen Wert ersetzt",
  entorno_ayuda_2: "Mit {{$schluessel}} wird sein Wert gesendet und danach um 1 erhöht (nur wenn der Wert eine ganze Zahl ist)",
  entorno_ayuda_3: "{{$i}} ist die Sendenummer: 1, 2, 3... beim Mehrfachversand und 1 beim normalen",
  nombre: "Name",
  guardar: "Speichern",
  peticiones_guardadas: "Gespeicherte Anfragen",
  no_hay_guardadas: "Es gibt keine gespeicherten Anfragen, speichere eine mit dem Diskettensymbol",
  recuperar: "Wiederherstellen",
  detalle_direccion: "URL :",
  detalle_cabeceras: "Header :",
  detalle_json: "JSON :",
  detalle_atributos: "Attribute :",
  ninguno: "keine",

  ayuda_titulo: "Hilfe zu Palomo API-geon · Version",
  ayuda_variables: `
    <h3>Umgebungsvariablen</h3>
    <p>In der <b>Umgebung</b> werden Schlüssel mit ihrem Wert gespeichert. Sie können in der URL, den Attributen, dem JSON und den Headern verwendet werden:</p>
    <ul>
      <li><code>{{schluessel}}</code> wird beim Senden durch seinen Wert ersetzt. Existiert der Schlüssel nicht, bleibt er unverändert.</li>
      <li><code>{{$schluessel}}</code> wird durch seinen Wert ersetzt und <b>danach in der Umgebung um 1 erhöht</b>. Das funktioniert nur, wenn der Wert eine ganze Zahl ist.
        Kommt er mehrmals in derselben Anfrage vor, haben alle dieselbe Zahl und es wird nur einmal 1 addiert. Führende Nullen bleiben erhalten: aus <code>007</code> wird <code>008</code>.</li>
      <li><code>{{$i}}</code> ist die Sendenummer: 1, 2, 3... beim Mehrfachversand und 1 beim normalen. Die Umgebung ändert sich nicht.</li>
    </ul>
    <p>Im JSON hat jede Variable eine Farbe: <span class="var_entorno">{{schluessel}}</span> aus der Umgebung,
      <span class="var_contador">{{$schluessel}}</span> Zähler, <span class="var_iteracion">{{$i}}</span> Sendenummer,
      und <span class="var_desconocida">in Rot</span> die, die in der Umgebung nicht existieren (oder Zähler, die keine Zahl sind).</p>
    <p>Das JSON wird mit den bereits eingesetzten Werten geprüft, daher ist <code>{"id": {{$i}}}</code> ohne Anführungszeichen gültig.
      Eine Zahl mit führenden Nullen (<code>007</code>) ist ohne Anführungszeichen kein gültiges JSON: <code>{"code": "{{$schluessel}}"}</code>.</p>`,
  ayuda_escribir_json: `
    <h3>Das JSON schreiben</h3>
    <ul>
      <li><code>{</code>, <code>[</code> und <code>"</code> schließen sich von selbst. Bei <code>{{</code> erscheint <code>{{}}</code>, um die Variable hineinzuschreiben.</li>
      <li><code>Enter</code> behält die Einrückung bei und öffnet zwischen <code>{}</code> oder <code>[]</code> einen neuen Block. <code>Tab</code> fügt 2 Leerzeichen ein und <code>Shift+Tab</code> entfernt sie.</li>
      <li><b>Formatieren</b> rückt das JSON ein, auch wenn es Variablen enthält.</li>
      <li>Darunter wird jederzeit angezeigt, ob das JSON gültig ist, und wenn nicht, der Fehler.</li>
    </ul>`,
  ayuda_multiple: `
    <h3>Mehrfachversand</h3>
    <p>Mit <b>Mehrfach</b> wird die Anfrage mehrmals gesendet. Beim Ankreuzen wählt man, wie oft und wie:</p>
    <ul>
      <li><b>Alle gleichzeitig</b>: alle auf einmal, ohne auf eine zu warten.</li>
      <li><b>Eine nach der anderen</b>: wartet auf die Antwort einer Anfrage, bevor die nächste gesendet wird.</li>
      <li><b>In Abständen</b>: sendet alle X Millisekunden eine, ohne auf die Antwort zu warten.</li>
    </ul>
    <p>Fährt man mit der Maus über <b>Senden</b>, sieht man, wie oft und wie gesendet wird. Zum Ändern klickt man auf das Wort <b>Mehrfach</b>. Während des Sendens wird aus <b>Senden</b> der Knopf <b>Stoppen</b>
      (bereits gesendete können nicht abgebrochen werden). Jeder Versand erscheint in der Liste mit Code, Dauer und Uhrzeit, und ein Klick zeigt seine Antwort.</p>`,
  ayuda_cabeceras_seccion: `
    <h3>Header</h3>
    <p>Im Bereich <b>Header</b> fügt man die Header der Anfrage hinzu, zum Beispiel <code>Authorization</code> = <code>Bearer {{token}}</code>.
      Gibt es einen Body, wird <code>Content-Type: application/json</code> gesendet, außer du setzt deinen eigenen Content-Type.
      Die Header der Antwort sieht man unten im Tab <b>Header</b>.</p>`,
  ayuda_guardar_entorno: `
    <h3>Werte der Antwort in der Umgebung speichern</h3>
    <p>Im Bereich <b>In Umgebung speichern</b> gibt jede Zeile an, woher der Wert kommt und unter welchem Umgebungsschlüssel er gespeichert wird (existiert er nicht, wird er angelegt):</p>
    <ul>
      <li><b>Aus dem Body</b>: ein Pfad wie in Javascript: <code>token</code>, <code>data.access_token</code>, <code>items[0].id</code>. Leer speichert den ganzen Body.</li>
      <li><b>Aus dem Header</b>: sein Name, Groß- und Kleinschreibung egal: <code>X-Auth-Token</code>, <code>Location</code>.</li>
    </ul>
    <p>Gespeichert wird nur, wenn die Antwort erfolgreich ist (2xx), damit ein Fehler kein gutes Token überschreibt. Über der Antwort steht, was gespeichert und was nicht gefunden wurde.</p>
    <p><b>Beispiel, Login und Token:</b> in der Login-Anfrage wird <code>data.access_token</code> in <code>token</code> gespeichert,
      und in den anderen setzt man den Header <code>Authorization</code> = <code>Bearer {{token}}</code>.</p>`,
  ayuda_guardadas: `
    <h3>Gespeicherte Anfragen</h3>
    <p>Die Diskette speichert die Anfrage des Tabs unter einem Namen: URL, Methode, Body, Header, was in der Umgebung gespeichert wird und die Optionen des Mehrfachversands.
      In <b>Gespeicherte Anfragen</b> zeigt ein Klick auf den Namen den Inhalt, und <b>Wiederherstellen</b> öffnet sie in einem neuen Tab.</p>`,
  ayuda_respuesta: `
    <h3>Die Antwort</h3>
    <ul>
      <li>Fährt man mit der Maus über den Statuscode, sieht man, was er bedeutet.</li>
      <li>URLs in einem JSON kann man anklicken, um sie anzusehen (Bilder oder Seiten).</li>
      <li>Ist die Antwort eine HTML-Seite, erscheint der Knopf <b>Vorschau</b>.</li>
      <li>Der Body wird auch bei einem Fehler angezeigt, APIs erklären dort meist, was schiefgegangen ist.</li>
    </ul>`,
  ayuda_sesion: `
    <h3>Schließen und wieder öffnen</h3>
    <p>Die Tabs bleiben mit ihrer Anfrage und ihrer letzten Antwort erhalten. Unter der Zeit steht, wann die Anfrage gemacht wurde, damit man weiß, ob das Ergebnis aktuell oder alt ist.
      Sind die Antworten sehr groß und passen nicht, bleiben die Tabs und Codes erhalten, aber nicht die Bodies der Antworten.</p>`,
  ayuda_ventanas: `
    <h3>Mehrere Fenster</h3>
    <p>Jedes Fenster hat eigene Tabs, aber die Umgebung und die gespeicherten Anfragen sind in allen gleich: was eines ändert, sehen die anderen.
      Beim erneuten Öffnen von Palomo API-geon werden die Tabs des Hauptfensters wiederhergestellt, die der mit <b>Neues Fenster</b> geöffneten Fenster nicht.</p>`,
  ayuda_atajos: `
    <h3>Tastenkürzel</h3>
    <ul>
      <li><code>Ctrl+Enter</code> senden, <code>Ctrl+S</code> Anfrage speichern</li>
      <li><code>Ctrl+O</code> gespeicherte Anfragen, <code>Ctrl+E</code> Umgebung</li>
      <li><code>Ctrl+N</code> neues Fenster, <code>Ctrl+W</code> Tab schließen, <code>Ctrl+Q</code> beenden</li>
      <li><code>Ctrl+,</code> Einstellungen, <code>F1</code> diese Hilfe</li>
    </ul>`,

  codigos_http: {
    0: ["Keine Antwort", "Keine Verbindung möglich: kein Netz, die URL ist falsch geschrieben oder der Browser hat sie wegen CORS blockiert."],
    100: ["Continue", "Der Server hat die Header erhalten und der Client kann den Body senden."],
    101: ["Switching Protocols", "Der Server wechselt das Protokoll, wie vom Client verlangt (zum Beispiel zu WebSocket)."],
    102: ["Processing", "Der Server hat die Anfrage erhalten und bearbeitet sie, es gibt noch keine Antwort."],
    103: ["Early Hints", "Der Server schickt einige Header vor der endgültigen Antwort."],
    200: ["OK", "Die Anfrage war erfolgreich."],
    201: ["Created", "Die Anfrage war erfolgreich und eine neue Ressource wurde angelegt."],
    202: ["Accepted", "Die Anfrage wurde angenommen, aber noch nicht bearbeitet."],
    203: ["Non-Authoritative Information", "Die Antwort wurde von einem Proxy verändert und kommt nicht direkt vom ursprünglichen Server."],
    204: ["No Content", "Die Anfrage war erfolgreich, aber es gibt keinen Inhalt zurückzugeben."],
    205: ["Reset Content", "Die Anfrage war erfolgreich und der Client muss das Formular oder die Ansicht zurücksetzen."],
    206: ["Partial Content", "Der Server liefert nur einen Teil der Ressource, wie mit dem Range-Header verlangt."],
    207: ["Multi-Status", "Die Antwort enthält den Status mehrerer Operationen auf einmal (WebDAV)."],
    208: ["Already Reported", "Diese Elemente wurden bereits weiter oben in derselben Antwort aufgeführt (WebDAV)."],
    226: ["IM Used", "Der Server liefert die Ressource mit Änderungen gegenüber der Version, die der Client hatte."],
    300: ["Multiple Choices", "Es gibt mehrere mögliche Antworten und der Client muss eine wählen."],
    301: ["Moved Permanently", "Die Ressource ist dauerhaft unter eine andere URL umgezogen (siehe Location-Header)."],
    302: ["Found", "Die Ressource liegt vorübergehend unter einer anderen URL (siehe Location-Header)."],
    303: ["See Other", "Die Antwort muss mit GET unter einer anderen URL abgerufen werden."],
    304: ["Not Modified", "Die Ressource hat sich seit dem letzten Mal nicht geändert, die Kopie im Cache kann verwendet werden."],
    307: ["Temporary Redirect", "Die Ressource liegt vorübergehend unter einer anderen URL und die Anfrage muss mit derselben Methode wiederholt werden."],
    308: ["Permanent Redirect", "Die Ressource ist dauerhaft umgezogen und die Anfrage muss mit derselben Methode wiederholt werden."],
    400: ["Bad Request", "Die Anfrage ist fehlerhaft (falsche Syntax, fehlerhaftes JSON...)."],
    401: ["Unauthorized", "Für den Zugriff auf die Ressource ist eine Anmeldung nötig."],
    402: ["Payment Required", "Für Zahlungen reserviert, wird kaum verwendet."],
    403: ["Forbidden", "Der Server hat die Anfrage verstanden, gibt dir aber keine Berechtigung."],
    404: ["Not Found", "Die angeforderte Ressource wurde nicht gefunden."],
    405: ["Method Not Allowed", "Die Methode (GET, POST...) ist für diese Ressource nicht erlaubt."],
    406: ["Not Acceptable", "Der Server kann den Inhalt in keinem Format liefern, das der Client akzeptiert."],
    407: ["Proxy Authentication Required", "Eine Anmeldung am Proxy ist nötig."],
    408: ["Request Timeout", "Der Server hat zu lange auf die Anfrage gewartet."],
    409: ["Conflict", "Die Anfrage steht im Konflikt mit dem aktuellen Zustand der Ressource (zum Beispiel existiert sie bereits)."],
    410: ["Gone", "Die Ressource existierte, wurde aber dauerhaft gelöscht."],
    411: ["Length Required", "Der Server braucht den Content-Length-Header."],
    412: ["Precondition Failed", "Eine Bedingung in den Headern der Anfrage ist nicht erfüllt."],
    413: ["Content Too Large", "Der Body der Anfrage ist zu groß."],
    414: ["URI Too Long", "Die URL ist zu lang."],
    415: ["Unsupported Media Type", "Der Server akzeptiert das Format des Bodys nicht (siehe Content-Type)."],
    416: ["Range Not Satisfiable", "Der angeforderte Bereich existiert in der Ressource nicht."],
    417: ["Expectation Failed", "Der Server kann den Expect-Header nicht erfüllen."],
    418: ["I'm a teapot", "Ich bin eine Teekanne. Ein Aprilscherz von 1998 (RFC 2324)."],
    421: ["Misdirected Request", "Die Anfrage ist bei einem Server angekommen, der sie nicht beantworten kann."],
    422: ["Unprocessable Content", "Die Anfrage ist korrekt geschrieben, aber die Daten sind ungültig."],
    423: ["Locked", "Die Ressource ist gesperrt (WebDAV)."],
    424: ["Failed Dependency", "Die Anfrage ist fehlgeschlagen, weil eine andere, von der sie abhing, fehlgeschlagen ist (WebDAV)."],
    425: ["Too Early", "Der Server will keine Anfrage bearbeiten, die wiederholt werden könnte."],
    426: ["Upgrade Required", "Für diese Anfrage muss auf ein anderes Protokoll gewechselt werden."],
    428: ["Precondition Required", "Der Server verlangt, dass die Anfrage bedingt ist."],
    429: ["Too Many Requests", "Du hast in kurzer Zeit zu viele Anfragen gestellt, warte ein wenig."],
    431: ["Request Header Fields Too Large", "Die Header der Anfrage sind zu groß."],
    451: ["Unavailable For Legal Reasons", "Die Ressource ist aus rechtlichen Gründen nicht verfügbar."],
    500: ["Internal Server Error", "Der Server hatte einen unerwarteten Fehler."],
    501: ["Not Implemented", "Der Server kann nicht, was verlangt wird (zum Beispiel unterstützt er die Methode nicht)."],
    502: ["Bad Gateway", "Ein Zwischenserver hat vom dahinterliegenden Server eine ungültige Antwort erhalten."],
    503: ["Service Unavailable", "Der Server ist gerade nicht verfügbar (überlastet oder in Wartung)."],
    504: ["Gateway Timeout", "Ein Zwischenserver hat zu lange auf den dahinterliegenden Server gewartet."],
    505: ["HTTP Version Not Supported", "Der Server unterstützt die HTTP-Version der Anfrage nicht."],
    506: ["Variant Also Negotiates", "Konfigurationsfehler des Servers bei der Wahl des Inhaltsformats."],
    507: ["Insufficient Storage", "Der Server hat keinen Platz, um die Anfrage abzuschließen (WebDAV)."],
    508: ["Loop Detected", "Der Server hat eine Endlosschleife erkannt (WebDAV)."],
    510: ["Not Extended", "In der Anfrage fehlen nötige Erweiterungen."],
    511: ["Network Authentication Required", "Für den Netzzugang ist eine Anmeldung nötig (zum Beispiel das WLAN eines Hotels)."],
  },
  familias_http: {
    1: ["Information", "Informative Antwort, die Anfrage läuft noch."],
    2: ["Erfolgreich", "Die Anfrage war erfolgreich."],
    3: ["Umleitung", "Die Ressource ist woanders."],
    4: ["Client-Fehler", "Etwas stimmt mit der Anfrage nicht."],
    5: ["Server-Fehler", "Der Server konnte nicht antworten."],
  },
  codigo_desconocido: ["Unbekannt", "Kein Standardcode."],

  menu_archivo: "Datei",
  menu_nueva_ventana: "Neues Fenster",
  menu_salir: "Beenden",
  menu_peticion: "Anfrage",
  menu_enviar: "Anfrage senden",
  menu_ver_guardadas: "Gespeicherte Anfragen anzeigen",
  menu_editar_entorno: "Umgebung bearbeiten",
  menu_como_funciona: "So funktioniert es",
  deshacer: "Rückgängig",
  rehacer: "Wiederholen",
  cortar: "Ausschneiden",
  copiar: "Kopieren",
  pegar: "Einfügen",
  seleccionar_todo: "Alles auswählen",
  error_direccion_http: "Die URL muss mit http:// oder https:// beginnen",
}

if (typeof module != "undefined"){ module.exports = language }
