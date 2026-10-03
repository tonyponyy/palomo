var language = typeof language == "undefined"? {}: language

language.zh = {
  locale: "zh-CN",

  entorno: "环境",
  guardadas: "已保存",
  ayuda: "帮助",
  configuracion: "设置",
  idioma: "语言",
  direccion: "地址",
  metodo: "方法",
  enviar_como: "发送格式",
  clave_valor: "键值对",
  multiple: "多次",
  enviar: "发送",
  parar: "停止",
  parando: "正在停止...",
  cuerpo: "请求体",
  cabeceras: "请求头",
  guardar_en_entorno: "保存到环境",
  anadir_atributo: "添加参数",
  json_placeholder: '{"键": "值"}',
  formatear: "格式化",
  formatear_titulo: "为 JSON 添加缩进，即使其中有变量",
  anadir_cabecera: "添加请求头",
  ayuda_cabeceras: "可以使用环境变量，例如 Authorization = Bearer {{token}}",
  anadir_valor: "添加要保存的值",
  ayuda_extraer: "当响应成功 (2xx) 时，值会保存到该环境键中（不存在则创建）。"
    +"请求体的路径写法和 javascript 一样：token、data.access_token、items[0].id。留空则保存整个响应体。"
    +"响应头填写其名称：X-Auth-Token、Location...",

  nueva_pestana: "新标签页",
  cerrar_pestana: "关闭标签页",

  clave: "键",
  valor: "值",
  deshabilitar: "禁用",
  habilitar: "启用",
  borrar: "删除",
  del_cuerpo: "来自响应体",
  de_la_cabecera: "来自响应头",
  guardar_en: "保存到",

  json_valido: "JSON 有效",
  variables_no_existen: "（有变量在环境中不存在）",

  estado: "状态：%estado%",
  enviando: "<i>正在发送...</i>",
  json_no_valido: "<b>JSON 无效</b> %error%",
  cerrado_sin_respuesta: "<i>Palomo API-geon 在收到响应前被关闭了</i>",
  tiempo: "耗时：%tiempo%",
  previsualizar: "预览",
  guardada_ok: "已保存",
  guardar_peticion: "保存请求",
  sin_contenido: "（无内容）",
  no_hay_cabeceras: "没有响应头",

  aviso_entorno: "环境：%avisos%",
  no_guarda_no_correcta: "响应不成功，因此没有保存任何内容到环境",
  no_encontrado: "未找到 %ruta%",
  el_cuerpo: "响应体",

  envio_multiple: "多次发送",
  cuantas_veces: "次数",
  como_se_envian: "发送方式",
  modo_paralelo: "同时发送",
  modo_paralelo_ayuda: "全部一起发出，不等待任何一个",
  modo_secuencial: "依次发送",
  modo_secuencial_ayuda: "等上一个的响应回来后再发送下一个",
  modo_intervalo: "定时发送",
  modo_intervalo_ayuda: "每隔一段时间发送一个，不等待响应",
  cada_ms: "间隔 (毫秒)",
  aceptar: "确定",
  resumen_paralelo: "同时发送",
  resumen_secuencial: "依次发送",
  resumen_intervalo: "每 %intervalo% 毫秒",
  veces_modo: "%veces% 次，%modo%",
  cambiar_multiple_titulo: "修改多次发送的选项",
  multiple_bien: "%numero% 成功",
  multiple_mal: "%numero% 失败",
  multiple_parado: "已停止",
  multiple_terminado: "已完成",
  multiple_enviando: "正在发送...",
  multiple_tiempos: "最短 %minimo% 毫秒 · 平均 %media% 毫秒 · 最长 %maximo% 毫秒",

  cerrar: "关闭",
  abrir_pestana_nueva: "在新标签页中打开",
  anadir_variable: "添加变量 +",
  entorno_ayuda_1: "在地址、参数或 JSON 中写 {{键}}，发送时会替换为它的值",
  entorno_ayuda_2: "使用 {{$键}} 会发送它的值，然后再加 1（仅当值为整数时）",
  entorno_ayuda_3: "{{$i}} 是发送序号：多次发送时为 1、2、3...，普通发送时为 1",
  nombre: "名称",
  guardar: "保存",
  peticiones_guardadas: "已保存的请求",
  no_hay_guardadas: "没有已保存的请求，可以用软盘按钮保存一个",
  recuperar: "恢复",
  detalle_direccion: "地址：",
  detalle_cabeceras: "请求头：",
  detalle_json: "JSON：",
  detalle_atributos: "参数：",
  ninguno: "无",

  ayuda_titulo: "Palomo API-geon 帮助 · 版本",
  ayuda_variables: `
    <h3>环境变量</h3>
    <p><b>环境</b>中保存着键和对应的值。它们可以用在地址、参数、JSON 和请求头中：</p>
    <ul>
      <li><code>{{键}}</code> 发送时会替换为它的值。如果键不存在，则保持原样。</li>
      <li><code>{{$键}}</code> 会替换为它的值，<b>然后在环境中加 1</b>。仅当值为整数时有效。
        如果在同一个请求中出现多次，它们都使用同一个数字，并且只加 1。前导零会保留：<code>007</code> 变成 <code>008</code>。</li>
      <li><code>{{$i}}</code> 是发送序号：多次发送时为 1、2、3...，普通发送时为 1。不会改变环境。</li>
    </ul>
    <p>在 JSON 中每种变量显示不同颜色：<span class="var_entorno">{{键}}</span> 环境变量，
      <span class="var_contador">{{$键}}</span> 计数器，<span class="var_iteracion">{{$i}}</span> 发送序号，
      <span class="var_desconocida">红色</span>表示环境中不存在的变量（或不是数字的计数器）。</p>
    <p>JSON 会在替换好值之后再检查，所以不带引号的 <code>{"id": {{$i}}}</code> 是有效的。
      带前导零的数字（<code>007</code>）不加引号不是有效的 JSON：<code>{"code": "{{$键}}"}</code>。</p>`,
  ayuda_escribir_json: `
    <h3>编写 JSON</h3>
    <ul>
      <li><code>{</code>、<code>[</code> 和 <code>"</code> 会自动闭合。输入 <code>{{</code> 会出现 <code>{{}}</code>，方便在里面写变量。</li>
      <li><code>Enter</code> 会保持缩进，在 <code>{}</code> 或 <code>[]</code> 之间会新开一个块。<code>Tab</code> 插入 2 个空格，<code>Shift+Tab</code> 删除它们。</li>
      <li><b>格式化</b>会为 JSON 添加缩进，即使其中有变量。</li>
      <li>下方会随时显示 JSON 是否有效，无效时显示错误。</li>
    </ul>`,
  ayuda_multiple: `
    <h3>多次发送</h3>
    <p>勾选<b>多次</b>后请求会发送多次。勾选时可以选择次数和方式：</p>
    <ul>
      <li><b>同时发送</b>：全部一起发出，不等待任何一个。</li>
      <li><b>依次发送</b>：等上一个的响应回来后再发送下一个。</li>
      <li><b>定时发送</b>：每隔 X 毫秒发送一个，不等待响应。</li>
    </ul>
    <p>将鼠标停在<b>发送</b>上可以看到发送的次数和方式。点击<b>多次</b>这个词可以修改。发送过程中<b>发送</b>按钮会变成<b>停止</b>
      （已经发出的无法取消）。每次发送都会出现在列表中，显示状态码、耗时和发出的时间，点击可以查看它的响应。</p>`,
  ayuda_cabeceras_seccion: `
    <h3>请求头</h3>
    <p>在<b>请求头</b>部分添加请求的请求头，例如 <code>Authorization</code> = <code>Bearer {{token}}</code>。
      如果有请求体，会发送 <code>Content-Type: application/json</code>，除非你设置了自己的 Content-Type。
      响应头可以在下方的<b>请求头</b>标签中查看。</p>`,
  ayuda_guardar_entorno: `
    <h3>把响应中的值保存到环境</h3>
    <p>在<b>保存到环境</b>部分，每一行说明值从哪里来，以及保存到哪个环境键（不存在则创建）：</p>
    <ul>
      <li><b>来自响应体</b>：写法和 javascript 一样的路径：<code>token</code>、<code>data.access_token</code>、<code>items[0].id</code>。留空则保存整个响应体。</li>
      <li><b>来自响应头</b>：它的名称，不区分大小写：<code>X-Auth-Token</code>、<code>Location</code>。</li>
    </ul>
    <p>只有响应成功 (2xx) 时才会保存，这样错误就不会覆盖有效的 token。响应上方会显示保存了什么以及没找到什么。</p>
    <p><b>示例，登录和 token：</b>在登录请求中把 <code>data.access_token</code> 保存到 <code>token</code>，
      其他请求中加上请求头 <code>Authorization</code> = <code>Bearer {{token}}</code>。</p>`,
  ayuda_guardadas: `
    <h3>已保存的请求</h3>
    <p>软盘按钮会用一个名称保存当前标签页的请求：地址、方法、请求体、请求头、要保存到环境的内容以及多次发送的选项。
      在<b>已保存的请求</b>中，点击名称可以查看内容，<b>恢复</b>会在新标签页中打开它。</p>`,
  ayuda_respuesta: `
    <h3>响应</h3>
    <ul>
      <li>将鼠标停在状态码上可以看到它的含义。</li>
      <li>JSON 中出现的地址可以点击查看（图片或网页）。</li>
      <li>如果响应是 html 页面，会出现<b>预览</b>按钮。</li>
      <li>即使出错也会显示响应体，API 通常会在那里说明出了什么问题。</li>
    </ul>`,
  ayuda_sesion: `
    <h3>关闭后再次打开</h3>
    <p>标签页会连同请求和最后一次响应一起保留。耗时下方会显示请求的时间，方便判断结果是新的还是旧的。
      如果响应太大放不下，会保留标签页和状态码，但不保留响应体。</p>`,
  ayuda_ventanas: `
    <h3>多个窗口</h3>
    <p>每个窗口有自己的标签页，但环境和已保存的请求在所有窗口中是共享的：一个窗口的修改其他窗口都能看到。
      再次打开 Palomo API-geon 时会恢复主窗口的标签页，通过<b>新窗口</b>打开的窗口的标签页不会保留。</p>`,
  ayuda_atajos: `
    <h3>快捷键</h3>
    <ul>
      <li><code>Ctrl+Enter</code> 发送，<code>Ctrl+S</code> 保存请求</li>
      <li><code>Ctrl+O</code> 已保存的请求，<code>Ctrl+E</code> 环境</li>
      <li><code>Ctrl+N</code> 新窗口，<code>Ctrl+W</code> 关闭标签页，<code>Ctrl+Q</code> 退出</li>
      <li><code>Ctrl+,</code> 设置，<code>F1</code> 本帮助</li>
    </ul>`,

  codigos_http: {
    0: ["无响应", "无法连接：没有网络、地址写错了，或者浏览器因 CORS 拦截了它。"],
    100: ["Continue", "服务器已收到请求头，客户端可以发送请求体。"],
    101: ["Switching Protocols", "服务器按客户端的要求切换协议（例如切换到 WebSocket）。"],
    102: ["Processing", "服务器已收到请求并正在处理，还没有响应。"],
    103: ["Early Hints", "服务器在最终响应之前先发送部分响应头。"],
    200: ["OK", "请求成功。"],
    201: ["Created", "请求成功，并创建了新的资源。"],
    202: ["Accepted", "请求已被接受，但尚未处理。"],
    203: ["Non-Authoritative Information", "响应经过代理修改，并非直接来自原始服务器。"],
    204: ["No Content", "请求成功，但没有要返回的内容。"],
    205: ["Reset Content", "请求成功，客户端需要重置表单或视图。"],
    206: ["Partial Content", "服务器只返回资源的一部分，按 Range 请求头的要求。"],
    207: ["Multi-Status", "响应包含多个操作的状态 (WebDAV)。"],
    208: ["Already Reported", "这些元素在同一响应中已经出现过 (WebDAV)。"],
    226: ["IM Used", "服务器返回在客户端已有版本基础上应用了更改的资源。"],
    300: ["Multiple Choices", "有多个可能的响应，客户端需要选择一个。"],
    301: ["Moved Permanently", "资源已永久移动到另一个地址（见 Location 响应头）。"],
    302: ["Found", "资源暂时位于另一个地址（见 Location 响应头）。"],
    303: ["See Other", "需要用 GET 到另一个地址获取响应。"],
    304: ["Not Modified", "资源自上次以来没有变化，可以使用缓存中的副本。"],
    307: ["Temporary Redirect", "资源暂时位于另一个地址，需要用相同的方法重复请求。"],
    308: ["Permanent Redirect", "资源已永久移动，需要用相同的方法重复请求。"],
    400: ["Bad Request", "请求格式错误（语法错误、JSON 格式错误...）。"],
    401: ["Unauthorized", "需要身份验证才能访问该资源。"],
    402: ["Payment Required", "保留用于支付，几乎不使用。"],
    403: ["Forbidden", "服务器理解了请求，但不给你权限。"],
    404: ["Not Found", "找不到请求的资源。"],
    405: ["Method Not Allowed", "该资源不允许使用此方法（GET、POST...）。"],
    406: ["Not Acceptable", "服务器无法以客户端接受的任何格式返回内容。"],
    407: ["Proxy Authentication Required", "需要在代理上进行身份验证。"],
    408: ["Request Timeout", "服务器等待请求到达的时间太长了。"],
    409: ["Conflict", "请求与资源的当前状态冲突（例如已经存在）。"],
    410: ["Gone", "资源曾经存在，但已被永久删除。"],
    411: ["Length Required", "服务器需要 Content-Length 请求头。"],
    412: ["Precondition Failed", "请求头中的某个条件不满足。"],
    413: ["Content Too Large", "请求体太大。"],
    414: ["URI Too Long", "地址太长。"],
    415: ["Unsupported Media Type", "服务器不接受请求体的格式（见 Content-Type）。"],
    416: ["Range Not Satisfiable", "请求的范围在资源中不存在。"],
    417: ["Expectation Failed", "服务器无法满足 Expect 请求头。"],
    418: ["I'm a teapot", "我是一个茶壶。这是 1998 年的愚人节玩笑 (RFC 2324)。"],
    421: ["Misdirected Request", "请求到达了一个无法响应它的服务器。"],
    422: ["Unprocessable Content", "请求格式正确，但数据无效。"],
    423: ["Locked", "资源已被锁定 (WebDAV)。"],
    424: ["Failed Dependency", "请求失败，因为它依赖的另一个请求失败了 (WebDAV)。"],
    425: ["Too Early", "服务器不愿处理可能被重放的请求。"],
    426: ["Upgrade Required", "需要切换到其他协议才能发出此请求。"],
    428: ["Precondition Required", "服务器要求请求必须是有条件的。"],
    429: ["Too Many Requests", "你在短时间内发送了太多请求，请稍等。"],
    431: ["Request Header Fields Too Large", "请求头太大。"],
    451: ["Unavailable For Legal Reasons", "由于法律原因，该资源不可用。"],
    500: ["Internal Server Error", "服务器发生了意外错误。"],
    501: ["Not Implemented", "服务器无法完成所要求的操作（例如不支持该方法）。"],
    502: ["Bad Gateway", "中间服务器从后端服务器收到了无效的响应。"],
    503: ["Service Unavailable", "服务器现在不可用（过载或维护中）。"],
    504: ["Gateway Timeout", "中间服务器等待后端服务器的时间太长了。"],
    505: ["HTTP Version Not Supported", "服务器不支持请求使用的 HTTP 版本。"],
    506: ["Variant Also Negotiates", "服务器在选择内容格式时出现配置错误。"],
    507: ["Insufficient Storage", "服务器没有足够的空间完成请求 (WebDAV)。"],
    508: ["Loop Detected", "服务器检测到无限循环 (WebDAV)。"],
    510: ["Not Extended", "请求缺少必要的扩展。"],
    511: ["Network Authentication Required", "需要身份验证才能访问网络（例如酒店的 wifi）。"],
  },
  familias_http: {
    1: ["信息", "信息性响应，请求仍在进行中。"],
    2: ["成功", "请求成功。"],
    3: ["重定向", "资源在别的地方。"],
    4: ["客户端错误", "请求有问题。"],
    5: ["服务器错误", "服务器未能响应。"],
  },
  codigo_desconocido: ["未知", "非标准状态码。"],

  menu_archivo: "文件",
  menu_nueva_ventana: "新窗口",
  menu_salir: "退出",
  menu_peticion: "请求",
  menu_enviar: "发送请求",
  menu_ver_guardadas: "查看已保存的请求",
  menu_editar_entorno: "编辑环境",
  menu_como_funciona: "使用说明",
  deshacer: "撤销",
  rehacer: "重做",
  cortar: "剪切",
  copiar: "复制",
  pegar: "粘贴",
  seleccionar_todo: "全选",
  error_direccion_http: "地址必须以 http:// 或 https:// 开头",
}

if (typeof module != "undefined"){ module.exports = language }
