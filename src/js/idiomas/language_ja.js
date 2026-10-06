var language = typeof language == "undefined"? {}: language

language.ja = {
  locale: "ja-JP",

  entorno: "環境",
  guardadas: "保存済み",
  ayuda: "ヘルプ",
  configuracion: "設定",
  idioma: "言語",
  direccion: "URL",
  metodo: "メソッド",
  enviar_como: "送信形式",
  clave_valor: "キーと値",
  multiple: "複数回",
  enviar: "送信",
  parar: "停止",
  parando: "停止中...",
  cuerpo: "ボディ",
  cabeceras: "ヘッダー",
  guardar_en_entorno: "環境に保存",
  anadir_atributo: "パラメータを追加",
  json_placeholder: '{"キー": "値"}',
  formatear: "整形",
  formatear_titulo: "変数が含まれていても JSON をインデントして整えます",
  anadir_cabecera: "ヘッダーを追加",
  ayuda_cabeceras: "環境変数を使えます。例: Authorization = Bearer {{token}}",
  anadir_valor: "保存する値を追加",
  ayuda_extraer: "レスポンスが成功 (2xx) したとき、値をその環境キーに保存します（存在しなければ作成します）。"
    +"ボディのパスは javascript と同じ書き方です: token、data.access_token、items[0].id。空の場合はボディ全体を保存します。"
    +"ヘッダーの場合は名前を書きます: X-Auth-Token、Location...",

  nueva_pestana: "新しいタブ",
  cerrar_pestana: "タブを閉じる",

  clave: "キー",
  valor: "値",
  deshabilitar: "無効にする",
  habilitar: "有効にする",
  borrar: "削除",
  del_cuerpo: "ボディから",
  de_la_cabecera: "ヘッダーから",
  guardar_en: "保存先",

  json_valido: "JSON は有効です",
  variables_no_existen: "（環境に存在しない変数があります）",

  estado: "ステータス : %estado%",
  enviando: "<i>送信中...</i>",
  json_no_valido: "<b>無効な JSON</b> %error%",
  cerrado_sin_respuesta: "<i>レスポンスが届く前に Palomo API-geon が閉じられました</i>",
  tiempo: "時間 : %tiempo%",
  previsualizar: "プレビュー",
  guardada_ok: "保存しました",
  guardar_peticion: "リクエストを保存",
  sin_contenido: "（内容なし）",
  no_hay_cabeceras: "ヘッダーはありません",

  aviso_entorno: "環境: %avisos%",
  no_guarda_no_correcta: "レスポンスが成功していないため、環境には何も保存しません",
  no_encontrado: "%ruta% が見つかりません",
  el_cuerpo: "ボディ",

  envio_multiple: "複数回送信",
  cuantas_veces: "回数",
  como_se_envian: "送信方法",
  modo_paralelo: "同時に",
  modo_paralelo_ayuda: "どれも待たずに一斉に送信",
  modo_secuencial: "順番に",
  modo_secuencial_ayuda: "1つのレスポンスを待ってから次を送信",
  modo_intervalo: "一定間隔で",
  modo_intervalo_ayuda: "レスポンスを待たずに間隔ごとに1つ送信",
  cada_ms: "間隔 (ミリ秒)",
  aceptar: "OK",
  resumen_paralelo: "同時に",
  resumen_secuencial: "順番に",
  resumen_intervalo: "%intervalo% ミリ秒ごと",
  veces_modo: "%veces% 回、%modo%",
  cambiar_multiple_titulo: "複数回送信のオプションを変更",
  multiple_bien: "%numero% 成功",
  multiple_mal: "%numero% 失敗",
  multiple_parado: "停止",
  multiple_terminado: "完了",
  multiple_enviando: "送信中...",
  multiple_tiempos: "最小 %minimo% ミリ秒 · 平均 %media% ミリ秒 · 最大 %maximo% ミリ秒",

  cerrar: "閉じる",
  abrir_pestana_nueva: "新しいタブで開く",
  anadir_variable: "変数を追加 +",
  entorno_ayuda_1: "URL、パラメータ、JSON に {{キー}} と書くと、送信時にその値に置き換わります",
  entorno_ayuda_2: "{{$キー}} はその値を送信し、その後に 1 を足します（値が整数の場合のみ）",
  entorno_ayuda_3: "{{$i}} は送信番号です: 複数回送信では 1、2、3...、通常の送信では 1",
  nombre: "名前",
  guardar: "保存",
  peticiones_guardadas: "保存済みリクエスト",
  no_hay_guardadas: "保存済みのリクエストはありません。フロッピーディスクのボタンで保存できます",
  coleccion: "コレクション",
  nombre_coleccion: "コレクション名",
  crear_coleccion: "新しいコレクション",
  renombrar_coleccion: "名前を変更",
  borrar_coleccion: "コレクションを削除",
  importar: "インポート",
  exportar: "エクスポート",
  exportar_todo: "すべてエクスポート",
  coleccion_general: "一般",
  coleccion_sin_nombre: "コレクション名を入力してください",
  coleccion_ya_existe: "同じ名前のコレクションがすでにあります",
  confirmar_borrar_coleccion: "コレクション %nombre% と %cuantas% 件のリクエストを削除します。よろしいですか？",
  mover_a_coleccion: "別のコレクションに移動",
  coleccion_vacia: "このコレクションにはリクエストがありません",
  importadas: "%cuantas% 件のリクエストをインポートしました",
  importar_error: "ファイルが有効なリクエスト JSON ではありません",
  recuperar: "復元",
  detalle_direccion: "URL :",
  detalle_cabeceras: "ヘッダー :",
  detalle_json: "JSON :",
  detalle_atributos: "パラメータ :",
  ninguno: "なし",

  ayuda_titulo: "Palomo API-geon ヘルプ · バージョン",
  ayuda_variables: `
    <h3>環境変数</h3>
    <p><b>環境</b>にはキーと値が保存されます。URL、パラメータ、JSON、ヘッダーで使えます:</p>
    <ul>
      <li><code>{{キー}}</code> は送信時にその値に置き換わります。キーが存在しない場合はそのまま残ります。</li>
      <li><code>{{$キー}}</code> はその値に置き換わり、<b>その後、環境の値に 1 が足されます</b>。値が整数の場合のみ動作します。
        同じリクエストに何度出てきても、すべて同じ数値になり、足されるのは 1 だけです。先頭のゼロは保たれます: <code>007</code> は <code>008</code> になります。</li>
      <li><code>{{$i}}</code> は送信番号です: 複数回送信では 1、2、3...、通常の送信では 1。環境は変わりません。</li>
    </ul>
    <p>JSON では変数ごとに色が付きます: <span class="var_entorno">{{キー}}</span> 環境の変数、
      <span class="var_contador">{{$キー}}</span> カウンター、<span class="var_iteracion">{{$i}}</span> 送信番号、
      <span class="var_desconocida">赤</span>は環境に存在しないもの（または数値でないカウンター）です。</p>
    <p>JSON は値を入れた後でチェックされるので、引用符なしの <code>{"id": {{$i}}}</code> も有効です。
      先頭にゼロが付いた数値（<code>007</code>）は引用符なしでは有効な JSON になりません: <code>{"code": "{{$キー}}"}</code>。</p>`,
  ayuda_escribir_json: `
    <h3>JSON の入力</h3>
    <ul>
      <li><code>{</code>、<code>[</code>、<code>"</code> は自動で閉じます。<code>{{</code> と入力すると <code>{{}}</code> になり、中に変数を書けます。</li>
      <li><code>Enter</code> はインデントを保ち、<code>{}</code> や <code>[]</code> の間では新しいブロックを開きます。<code>Tab</code> は空白を 2 つ入れ、<code>Shift+Tab</code> で取り除きます。</li>
      <li><b>整形</b>は変数が含まれていても JSON をインデントして整えます。</li>
      <li>下には JSON が有効かどうか、無効ならそのエラーが常に表示されます。</li>
    </ul>`,
  ayuda_multiple: `
    <h3>複数回送信</h3>
    <p><b>複数回</b>にチェックを入れるとリクエストを何度も送信します。チェックするときに回数と方法を選びます:</p>
    <ul>
      <li><b>同時に</b>: どれも待たずに一斉に送信します。</li>
      <li><b>順番に</b>: 1つのレスポンスを待ってから次を送信します。</li>
      <li><b>一定間隔で</b>: レスポンスを待たずに X ミリ秒ごとに1つ送信します。</li>
    </ul>
    <p><b>送信</b>にマウスを乗せると、何回どのように送信するかが分かります。変更するには<b>複数回</b>という文字をクリックします。送信中は<b>送信</b>ボタンが<b>停止</b>に変わります
      （すでに送信したものは取り消せません）。各送信はステータスコード、所要時間、送信時刻とともに一覧に表示され、クリックするとレスポンスが見られます。</p>`,
  ayuda_cabeceras_seccion: `
    <h3>ヘッダー</h3>
    <p><b>ヘッダー</b>欄ではリクエストのヘッダーを追加します。例: <code>Authorization</code> = <code>Bearer {{token}}</code>。
      ボディがある場合は <code>Content-Type: application/json</code> を送信します。自分で Content-Type を指定した場合はそちらを使います。
      レスポンスのヘッダーは下の<b>ヘッダー</b>タブで見られます。</p>`,
  ayuda_guardar_entorno: `
    <h3>レスポンスの値を環境に保存する</h3>
    <p><b>環境に保存</b>欄では、各行に値の取り出し元と保存先の環境キーを指定します（存在しなければ作成します）:</p>
    <ul>
      <li><b>ボディから</b>: javascript と同じ書き方のパス: <code>token</code>、<code>data.access_token</code>、<code>items[0].id</code>。空の場合はボディ全体を保存します。</li>
      <li><b>ヘッダーから</b>: ヘッダー名。大文字小文字は区別しません: <code>X-Auth-Token</code>、<code>Location</code>。</li>
    </ul>
    <p>保存されるのはレスポンスが成功 (2xx) したときだけなので、エラーで正しいトークンが上書きされることはありません。レスポンスの上に、保存したものと見つからなかったものが表示されます。</p>
    <p><b>例、ログインとトークン:</b> ログインのリクエストで <code>data.access_token</code> を <code>token</code> に保存し、
      他のリクエストではヘッダー <code>Authorization</code> = <code>Bearer {{token}}</code> を付けます。</p>`,
  ayuda_guardadas: `
    <h3>保存済みリクエスト</h3>
    <p>フロッピーディスクのボタンで、タブのリクエストを名前を付けて保存します: URL、メソッド、ボディ、ヘッダー、環境に保存する値、複数回送信のオプション。
      <b>保存済みリクエスト</b>で名前をクリックすると内容が見られ、<b>復元</b>で新しいタブに開きます。</p>
    <p>リクエストは<b>コレクション</b>（フォルダのタブ）で整理されます。保存時にコレクションを選び、一覧から別のコレクションに移動できます。<b>エクスポート</b>は表示中のコレクションを JSON でダウンロードし、<b>すべてエクスポート</b>は全コレクションを、<b>インポート</b>はエクスポートした JSON から追加します。</p>`,
  ayuda_respuesta: `
    <h3>レスポンス</h3>
    <ul>
      <li>ステータスコードにマウスを乗せると意味が分かります。</li>
      <li>JSON に含まれる URL はクリックして表示できます（画像やページ）。</li>
      <li>レスポンスが html ページの場合は<b>プレビュー</b>ボタンが表示されます。</li>
      <li>エラーでもボディは表示されます。API は普通そこに何が失敗したかを書いています。</li>
    </ul>`,
  ayuda_sesion: `
    <h3>閉じてもう一度開いたとき</h3>
    <p>タブはリクエストと最後のレスポンスとともに保持されます。時間の下にリクエストした日時が表示されるので、結果が新しいか古いか分かります。
      レスポンスが大きすぎて保存できない場合、タブとステータスコードは保持されますが、レスポンスのボディは保持されません。</p>`,
  ayuda_ventanas: `
    <h3>複数のウィンドウ</h3>
    <p>ウィンドウごとにタブがありますが、環境と保存済みリクエストはすべてのウィンドウで共通です: 1つで変更すると他でも見えます。
      Palomo API-geon を再び開くとメインウィンドウのタブが復元されます。<b>新しいウィンドウ</b>で開いたウィンドウのタブは保持されません。</p>`,
  ayuda_atajos: `
    <h3>キーボードショートカット</h3>
    <ul>
      <li><code>Ctrl+Enter</code> 送信、<code>Ctrl+S</code> リクエストを保存</li>
      <li><code>Ctrl+O</code> 保存済みリクエスト、<code>Ctrl+E</code> 環境</li>
      <li><code>Ctrl+N</code> 新しいウィンドウ、<code>Ctrl+W</code> タブを閉じる、<code>Ctrl+Q</code> 終了</li>
      <li><code>Ctrl+,</code> 設定、<code>F1</code> このヘルプ</li>
    </ul>`,

  codigos_http: {
    0: ["レスポンスなし", "接続できませんでした: ネットワークがない、URL が間違っている、またはブラウザが CORS でブロックしました。"],
    100: ["Continue", "サーバーはヘッダーを受け取ったので、クライアントはボディを送信できます。"],
    101: ["Switching Protocols", "クライアントの要求に応じてサーバーがプロトコルを切り替えます（例: WebSocket へ）。"],
    102: ["Processing", "サーバーはリクエストを受け取り処理中で、まだレスポンスはありません。"],
    103: ["Early Hints", "サーバーが最終的なレスポンスの前に一部のヘッダーを先に送ります。"],
    200: ["OK", "リクエストは成功しました。"],
    201: ["Created", "リクエストは成功し、新しいリソースが作成されました。"],
    202: ["Accepted", "リクエストは受け付けられましたが、まだ処理されていません。"],
    203: ["Non-Authoritative Information", "レスポンスはプロキシによって変更されており、元のサーバーから直接のものではありません。"],
    204: ["No Content", "リクエストは成功しましたが、返す内容はありません。"],
    205: ["Reset Content", "リクエストは成功し、クライアントはフォームや表示をリセットする必要があります。"],
    206: ["Partial Content", "Range ヘッダーで要求されたとおり、サーバーはリソースの一部だけを返します。"],
    207: ["Multi-Status", "レスポンスには複数の操作のステータスが含まれています (WebDAV)。"],
    208: ["Already Reported", "これらの要素は同じレスポンス内ですでに含まれています (WebDAV)。"],
    226: ["IM Used", "サーバーはクライアントが持っていたバージョンに変更を適用したリソースを返します。"],
    300: ["Multiple Choices", "複数のレスポンスが可能で、クライアントがどれかを選ぶ必要があります。"],
    301: ["Moved Permanently", "リソースは別の URL に恒久的に移動しました（Location ヘッダーを参照）。"],
    302: ["Found", "リソースは一時的に別の URL にあります（Location ヘッダーを参照）。"],
    303: ["See Other", "レスポンスは別の URL に GET で取得する必要があります。"],
    304: ["Not Modified", "前回からリソースは変わっていないので、キャッシュのコピーを使えます。"],
    307: ["Temporary Redirect", "リソースは一時的に別の URL にあり、同じメソッドでリクエストを繰り返す必要があります。"],
    308: ["Permanent Redirect", "リソースは恒久的に移動しており、同じメソッドでリクエストを繰り返す必要があります。"],
    400: ["Bad Request", "リクエストが正しくありません（構文の誤り、不正な JSON...）。"],
    401: ["Unauthorized", "リソースにアクセスするには認証が必要です。"],
    402: ["Payment Required", "支払い用に予約されていますが、ほとんど使われません。"],
    403: ["Forbidden", "サーバーはリクエストを理解しましたが、権限を与えません。"],
    404: ["Not Found", "要求されたリソースが見つかりません。"],
    405: ["Method Not Allowed", "このリソースではそのメソッド (GET、POST...) は許可されていません。"],
    406: ["Not Acceptable", "サーバーはクライアントが受け入れるどの形式でも内容を返せません。"],
    407: ["Proxy Authentication Required", "プロキシでの認証が必要です。"],
    408: ["Request Timeout", "サーバーがリクエストの到着を待ちきれませんでした。"],
    409: ["Conflict", "リクエストがリソースの現在の状態と衝突しています（例: すでに存在する）。"],
    410: ["Gone", "リソースは存在していましたが、恒久的に削除されました。"],
    411: ["Length Required", "サーバーは Content-Length ヘッダーを必要としています。"],
    412: ["Precondition Failed", "リクエストヘッダーの条件の一部が満たされていません。"],
    413: ["Content Too Large", "リクエストのボディが大きすぎます。"],
    414: ["URI Too Long", "URL が長すぎます。"],
    415: ["Unsupported Media Type", "サーバーはボディの形式を受け付けません（Content-Type を参照）。"],
    416: ["Range Not Satisfiable", "要求された範囲はリソースに存在しません。"],
    417: ["Expectation Failed", "サーバーは Expect ヘッダーに応えられません。"],
    418: ["I'm a teapot", "私はティーポットです。1998 年のエイプリルフールのジョークです (RFC 2324)。"],
    421: ["Misdirected Request", "リクエストが応答できないサーバーに届きました。"],
    422: ["Unprocessable Content", "リクエストの書き方は正しいですが、データが有効ではありません。"],
    423: ["Locked", "リソースはロックされています (WebDAV)。"],
    424: ["Failed Dependency", "依存していた別のリクエストが失敗したため、このリクエストは失敗しました (WebDAV)。"],
    425: ["Too Early", "サーバーは再送される可能性のあるリクエストを処理したくありません。"],
    426: ["Upgrade Required", "このリクエストを行うには別のプロトコルに切り替える必要があります。"],
    428: ["Precondition Required", "サーバーはリクエストが条件付きであることを要求しています。"],
    429: ["Too Many Requests", "短時間にリクエストを送りすぎました。少し待ってください。"],
    431: ["Request Header Fields Too Large", "リクエストヘッダーが大きすぎます。"],
    451: ["Unavailable For Legal Reasons", "法的な理由でリソースは利用できません。"],
    500: ["Internal Server Error", "サーバーで予期しないエラーが発生しました。"],
    501: ["Not Implemented", "サーバーは要求された処理ができません（例: そのメソッドに対応していない）。"],
    502: ["Bad Gateway", "中間サーバーが背後のサーバーから無効なレスポンスを受け取りました。"],
    503: ["Service Unavailable", "サーバーは現在利用できません（過負荷またはメンテナンス中）。"],
    504: ["Gateway Timeout", "中間サーバーが背後のサーバーを待ちきれませんでした。"],
    505: ["HTTP Version Not Supported", "サーバーはリクエストの HTTP バージョンに対応していません。"],
    506: ["Variant Also Negotiates", "内容の形式を選ぶ際のサーバーの設定エラーです。"],
    507: ["Insufficient Storage", "サーバーにはリクエストを完了する容量がありません (WebDAV)。"],
    508: ["Loop Detected", "サーバーが無限ループを検出しました (WebDAV)。"],
    510: ["Not Extended", "リクエストに必要な拡張がありません。"],
    511: ["Network Authentication Required", "ネットワークにアクセスするには認証が必要です（例: ホテルの wifi）。"],
  },
  familias_http: {
    1: ["情報", "情報レスポンスです。リクエストはまだ処理中です。"],
    2: ["成功", "リクエストは成功しました。"],
    3: ["リダイレクト", "リソースは別の場所にあります。"],
    4: ["クライアントエラー", "リクエストに問題があります。"],
    5: ["サーバーエラー", "サーバーが応答に失敗しました。"],
  },
  codigo_desconocido: ["不明", "標準ではないコードです。"],

  menu_archivo: "ファイル",
  menu_nueva_ventana: "新しいウィンドウ",
  menu_salir: "終了",
  menu_peticion: "リクエスト",
  menu_enviar: "リクエストを送信",
  menu_ver_guardadas: "保存済みリクエストを表示",
  menu_editar_entorno: "環境を編集",
  menu_como_funciona: "使い方",
  deshacer: "元に戻す",
  rehacer: "やり直す",
  cortar: "切り取り",
  copiar: "コピー",
  pegar: "貼り付け",
  seleccionar_todo: "すべて選択",
  error_direccion_http: "URL は http:// または https:// で始まる必要があります",
}

if (typeof module != "undefined"){ module.exports = language }
