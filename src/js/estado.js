var idioma = "es"

function texto(clave, valores){
  var textos = language[idioma] != undefined && language[idioma][clave] != undefined? language[idioma]: language.es
  var resultado = textos[clave]
  if (resultado == undefined){
    console.log("Falta el texto", clave)
    return clave
  }
  if (valores != undefined && typeof resultado == "string"){
    resultado = resultado.replace(/%(\w+)%/g, function(encontrado, nombre){
      return valores[nombre] === undefined? encontrado: String(valores[nombre])
    })
  }
  return resultado
}

function carga_idioma(){
  try {
    var guardado = localStorage.getItem("palomo_idioma")
    if (guardado != null && language[guardado] != undefined){
      idioma = guardado
    }
  } catch (e) {
  }
}

function guarda_idioma(){
  try {
    localStorage.setItem("palomo_idioma", idioma)
  } catch (e) {
    console.log("No se ha podido guardar el idioma", e)
  }
}

var tab_counter = 0;
var settings ={
  current_tab:1,
  seccion:"cuerpo",
  vista_respuesta:"cuerpo",
}


tabs =[]
entorno = []
guardadas = []

var ventana_nueva = new URLSearchParams(location.search).has("nueva")

function attributes_object (key,value,disabled=false){
  this.key = key;
  this.value = value;
  this.disabled = disabled;
}

function tab_object(tab_id,name,url,text){
  this.tab_id = tab_id
  this.name = name;
  this.url = url;
  this.text = text;
  this.attributes = []
  this.status
  this.metodo = "GET"
  this.tipo_envio = "json"
  this.json = ""
  this.tiempo
  this.multiple = new multiple_object()
  this.cabeceras = []
  this.extracciones = []
  this.cabeceras_respuesta = []
  this.extraidas = []
  this.ejecucion = null
}

function multiple_object(activo=false,veces=5,modo="paralelo",intervalo=1000){
  this.activo = activo;
  this.veces = veces;
  this.modo = modo;
  this.intervalo = intervalo;
}

function peticion_object(nombre,url,metodo,tipo_envio,json,attributes,multiple,cabeceras,extracciones){
  this.nombre = nombre;
  this.url = url;
  this.metodo = metodo;
  this.tipo_envio = tipo_envio;
  this.json = json;
  this.attributes = attributes;
  this.multiple = multiple;
  this.cabeceras = cabeceras;
  this.extracciones = extracciones;
  this.fecha = new Date().toLocaleString(texto("locale"));
}

function change_tab(id){
  var selected_tab;
  if (settings.current_tab !=0){
    save_tab()
    settings.current_tab = id
    tab = tabs[get_tab_position_from_array(id)]

    var all_tabs = document.querySelectorAll('.tab');
    all_tabs.forEach(tab => { tab.className ="tab inactive_tab" ;});
    
    const attributes = document.querySelectorAll('.atts');
    attributes.forEach(att => { att.remove();});
    document.getElementById("tab"+settings.current_tab).className = "tab active_tab" 

    for (let i = 0; i < tab.attributes.length; i++) {
      add_atribute()
      document.getElementById('att'+att_counter).children[1].value = tab.attributes[i].key 
      document.getElementById('att'+att_counter).children[3].value = tab.attributes[i].value 
      if ( tab.attributes[i].disabled){
        deshabilitar(att_counter)
      }
    }
    
    if (tab.ejecucion != null){
      pinta_multiple(tab)
    }else{
      document.getElementById("demo").innerHTML =formatea_json(tab.text);
    }

    estado = tab.status == undefined? "": tab.status;
    document.getElementById("status").innerHTML = '<p>'+texto("estado", {estado: estado})+'</p>';  

    img = tab.img == undefined? "": tab.img;
    document.getElementById("palomo").src = img

    url = tab.url == "undefined"? "": tab.url;
    document.getElementById("url").value = url

    document.getElementById("met").value = tab.metodo
    document.getElementById("tipo_envio").value = tab.tipo_envio
    document.getElementById("json_body").value = tab.json
    pinta_json()
    document.getElementById("multiple").checked = tab.multiple.activo
    pinta_filas("cabeceras", tab.cabeceras)
    pinta_filas("extracciones", tab.extracciones)
    pinta_cabeceras_respuesta(tab)
    pinta_extraidas(tab)
    cambiar_tipo_envio()
    muestra_resumen_multiple(tab)
    muestra_boton_enviar(tab)
    muestra_boton_previsualizar(tab)
    muestra_tiempo(tab.tiempo)
    muestra_fecha(tab.fecha)


  }
}

function get_tab_position_from_array(id){
  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i].tab_id == id){
      return i;
    }
  }
}


function save_tab(){
  var tab = tabs[get_tab_position_from_array(settings.current_tab)]
  if (tab == undefined){
    return
  }
  tab.attributes = []
  for (let i = 0; i < document.getElementsByClassName('atts').length; i++) {
    key= document.getElementsByClassName('atts')[i].children[1].value
    value=  document.getElementsByClassName('atts')[i].children[3].value
    disabled = document.getElementsByClassName('atts')[i].children[1].disabled 
    attr = new attributes_object(key,value,disabled)
    tab.attributes.push(attr)
  }
  url_base = document.getElementById("url").value;
  var enlace = create_url(url_base)

  tab.name = create_url(url_base);
  tab.url = url_base;
  tab.metodo = document.getElementById("met").value;
  tab.tipo_envio = document.getElementById("tipo_envio").value;
  tab.json = document.getElementById("json_body").value;
  tab.multiple.activo = document.getElementById("multiple").checked;
  tab.cabeceras = lee_filas("cabeceras");
  tab.extracciones = lee_filas("extracciones");

}

function create_tab(){
  tab_counter++
  tab = new tab_object(tab_counter,texto("nueva_pestana"),"","")  
  document.getElementById("tab_containers").innerHTML +=  '<div class="active_tab tab" id="tab'+tab.tab_id+'"><a id ="texttab'+tab.tab_id+'"onclick="change_tab('+tab.tab_id+')">'+tab.tab_id+" "+tab.name+'</a><button onClick="delete_tab('+tab.tab_id+')"class="delete_tab" title="'+texto("cerrar_pestana")+'"></button></div>'
  tabs.push(tab)
}

function delete_tab(id){

  tab_pos =get_tab_position_from_array(id)
  tabs.splice(tab_pos, 1);
  document.getElementById('tab'+id).remove() 

  if (id == settings.current_tab){
    if (tabs.length == 0){
      create_tab()
    }
    change_tab(tabs[0].tab_id)
  }
  guarda_sesion()

}

var res 
att_counter=0;

var IMG_RELOJ = "img/reloj.gif"

  var campos_sesion = ["url", "metodo", "tipo_envio", "json", "attributes", "cabeceras", "extracciones", "multiple",
    "status", "codigo", "tipo", "img", "tiempo", "fecha", "cabeceras_respuesta", "url_respuesta", "extraidas"]

  function datos_tab(tab, con_cuerpos){
    var datos = {tab_id: tab.tab_id}
    campos_sesion.forEach(function(campo){ datos[campo] = tab[campo] })
    var etiqueta = document.getElementById("texttab"+tab.tab_id)
    datos.etiqueta = etiqueta == null? "": etiqueta.textContent
    datos.text = con_cuerpos? tab.text: undefined
    var ejecucion = tab.ejecucion
    if (ejecucion != null){
      datos.ejecucion = {
        multiple: ejecucion.multiple,
        resultados: ejecucion.resultados.map(function(r){
          if (r == null){ return null }
          return con_cuerpos? r: Object.assign({}, r, {texto: ""})
        }),
        parado: ejecucion.parado || !ejecucion.terminado,
      }
    }
    return datos
  }

  function guarda_sesion(){
    if (ventana_nueva || tabs.length == 0){ return }
    save_tab()
    var sesion = {current_tab: settings.current_tab, tabs: tabs.map(function(tab){ return datos_tab(tab, true) })}
    try {
      localStorage.setItem("palomo_sesion", JSON.stringify(sesion))
    } catch (e) {
      sesion.tabs = tabs.map(function(tab){ return datos_tab(tab, false) })
      try {
        localStorage.setItem("palomo_sesion", JSON.stringify(sesion))
      } catch (e) {
        console.log("No se ha podido guardar la sesion", e)
      }
    }
  }

  function restaura_sesion(){
    var sesion
    try {
      sesion = JSON.parse(localStorage.getItem("palomo_sesion"))
    } catch (e) {
      sesion = null
    }
    if (sesion == null || !Array.isArray(sesion.tabs) || sesion.tabs.length == 0){
      return false
    }
    var actual = undefined
    for (let i = 0; i < sesion.tabs.length; i++) {
      var datos = sesion.tabs[i]
      create_tab()
      var tab = tabs[tabs.length - 1]
      campos_sesion.forEach(function(campo){
        if (datos[campo] !== undefined && datos[campo] !== null){ tab[campo] = datos[campo] }
      })
      tab.text = datos.text == null? undefined: datos.text
      tab.multiple = Object.assign(new multiple_object(), datos.multiple)
      if (datos.ejecucion != null){
        tab.ejecucion = {
          multiple: datos.ejecucion.multiple,
          resultados: datos.ejecucion.resultados.map(function(r){ return r == null? undefined: r }),
          abiertos: {},
          parado: datos.ejecucion.parado,
          terminado: true,
          inicio: 0,
          fin: tab.tiempo == undefined? 0: tab.tiempo,
        }
        actualiza_multiple(tab)
      }else if (tab.img == IMG_RELOJ){
        tab.img = ""
        tab.status = texto("cerrado_sin_respuesta")
      }
      if (datos.etiqueta){
        document.getElementById("texttab"+tab.tab_id).textContent = datos.etiqueta
      }
      if (datos.tab_id == sesion.current_tab){
        actual = tab.tab_id
      }
    }
    settings.current_tab = -1
    change_tab(actual == undefined? tabs[0].tab_id: actual)
    return true
  }

  function carga_guardadas(){
    try {
      guardado = localStorage.getItem("palomo_guardadas")
      guardadas = guardado == null? []: JSON.parse(guardado)
    } catch (e) {
      guardadas = []
    }
  }

  function guarda_guardadas(){
    try {
      localStorage.setItem("palomo_guardadas", JSON.stringify(guardadas))
    } catch (e) {
      console.log("No se han podido guardar las peticiones", e)
    }
  }

  function carga_entorno(){
    try {
      guardado = localStorage.getItem("palomo_entorno")
      entorno = guardado == null? []: JSON.parse(guardado)
    } catch (e) {
      entorno = []
    }
    pinta_json()
  }

  function guarda_entorno(){
    try {
      localStorage.setItem("palomo_entorno", JSON.stringify(entorno))
    } catch (e) {
      console.log("No se ha podido guardar el entorno", e)
    }
    pinta_json()
  }

  function busca_variable(clave){
    for (let i = 0; i < entorno.length; i++) {
      if (entorno[i].key == clave){
        return entorno[i]
      }
    }
  }

  function aplica_entorno(cadena){
    return cadena.replace(/{{\s*([^{}]+?)\s*}}/g, function(encontrado, clave){
      var variable = busca_variable(clave)
      return variable == undefined? encontrado: variable.value
    });
  }
