function loadDoc() {
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    if (tab.ejecucion != null && !tab.ejecucion.terminado){
      parar_multiple(tab)
      return
    }
    var plantilla = prepara_peticion()
    if (plantilla == null){
      return
    }
    if (document.getElementById("multiple").checked){
      lanza_multiple(tab, plantilla)
      return
    }
    tab.ejecucion = null
    tab.fecha = Date.now()
    tab.img = IMG_RELOJ
    tab.status = texto("enviando")
    tab.tiempo = undefined
    tab.codigo = undefined
    document.getElementById("palomo").src = tab.img
    document.getElementById("status").innerHTML = '<p>'+texto("estado", {estado: tab.status})+'</p>'
    muestra_tiempo(tab.tiempo)
    muestra_fecha(tab.fecha)
    var peticion = concreta_peticion(plantilla, 1)
    tab.url_respuesta = peticion.url
    envia(peticion).then(function(respuesta){
      aplica_extracciones(tab, plantilla.extracciones, respuesta)
      muestra_respuesta(tab, respuesta)
    });
  }

  function prepara_peticion(){
    url_base = document.getElementById("url").value;
    var enlace = create_url(url_base)
    if (enlace.trim() != ""){
      document.getElementById('texttab'+settings.current_tab).text = enlace
    }
    var metodo = document.getElementById("met").value;
    var tipo_envio = document.getElementById("tipo_envio").value;
    var cuerpo = null
    if (tipo_envio == "json" && document.getElementById("json_body").value.trim() != ""){
      cuerpo = document.getElementById("json_body").value
    }
    var cabeceras = lee_filas("cabeceras").filter(function(c){ return !c.disabled && c.clave.trim() != "" })
      .map(function(c){ return [c.clave.trim(), c.valor] })
    var extracciones = lee_filas("extracciones").filter(function(e){ return !e.disabled && e.clave.trim() != "" })
    var plantilla = {url:enlace, metodo:metodo, cuerpo:cuerpo, cabeceras:cabeceras, extracciones:extracciones}
    if (cuerpo != null){
      try {
        JSON.parse(concreta_peticion(plantilla, 1, false).cuerpo)
      } catch (e) {
        document.getElementById("status").innerHTML ='<p>'+texto("estado", {estado: texto("json_no_valido", {error: e.message})})+'</p>';
        document.getElementById("palomo").src = "img/palomal.png"
        return null
      }
    }
    return plantilla
  }

  function concreta_peticion(plantilla, i, sumar=true){
    var contadores = []
    function sustituye(cadena){
      cadena = cadena.replace(/{{\s*\$([^{}]+?)\s*}}/g, function(encontrado, clave){
        if (clave == "i"){
          return String(i)
        }
        var variable = busca_variable(clave)
        if (variable == undefined || !/^\s*-?\d+\s*$/.test(variable.value)){
          return encontrado
        }
        if (!contadores.includes(variable)){
          contadores.push(variable)
        }
        return variable.value.trim()
      });
      return aplica_entorno(cadena)
    }
    var peticion = {
      url: sustituye(plantilla.url),
      metodo: plantilla.metodo,
      cuerpo: plantilla.cuerpo == null? null: sustituye(plantilla.cuerpo),
      cabeceras: plantilla.cabeceras.map(function(c){ return [sustituye(c[0]), sustituye(c[1])] }),
    }
    if (sumar && contadores.length > 0){
      for (let j = 0; j < contadores.length; j++) {
        contadores[j].value = suma_uno(contadores[j].value)
      }
      guarda_entorno()
      refresca_entorno()
    }
    return peticion
  }

  function suma_uno(valor){
    var texto = valor.trim()
    var siguiente = String(parseInt(texto, 10) + 1)
    if (/^0\d/.test(texto)){
      siguiente = siguiente.padStart(texto.length, "0")
    }
    return siguiente
  }

  function envia(peticion){
    console.log(peticion.metodo, peticion.url)
    var inicio = performance.now()
    function con_tiempo(respuesta){
      respuesta.tiempo = Math.round(performance.now() - inicio)
      return respuesta
    }

    if (window.palomo_electron != undefined){
      return window.palomo_electron.peticion(peticion).then(con_tiempo)
    }

    return new Promise(function(resolve){
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4){
          resolve(con_tiempo({status:this.status, statusText:this.statusText, texto:this.responseText, tipo:this.getResponseHeader("content-type"),
            cabeceras:lee_cabeceras_xhr(this.getAllResponseHeaders())}))
        }
      };
      xhttp.open(peticion.metodo, peticion.url, true);
      var tiene_tipo = peticion.cabeceras.some(function(c){ return c[0].toLowerCase() == "content-type" })
      if (peticion.cuerpo != null && peticion.metodo != "GET" && !tiene_tipo){
        xhttp.setRequestHeader("Content-type","application/json");
      }
      for (let i = 0; i < peticion.cabeceras.length; i++) {
        try {
          xhttp.setRequestHeader(peticion.cabeceras[i][0], peticion.cabeceras[i][1]);
        } catch (e) {
          console.log("No se puede poner la cabecera", peticion.cabeceras[i][0], e)
        }
      }
      xhttp.send(peticion.cuerpo);
    });
  }

  function lee_cabeceras_xhr(texto){
    var cabeceras = []
    texto.trim().split(/[\r\n]+/).forEach(function(linea){
      var pos = linea.indexOf(":")
      if (pos > 0){
        cabeceras.push([linea.slice(0, pos).trim(), linea.slice(pos + 1).trim()])
      }
    })
    return cabeceras
  }

  function es_correcta(status){
    return status >= 200 && status < 300
  }

  function busca_ruta(objeto, ruta){
    var partes = ruta.replace(/^\$\.?/, "").match(/[^.\[\]]+/g)
    if (partes == null){ return objeto }
    for (let i = 0; i < partes.length; i++) {
      if (objeto == null || typeof objeto != "object" || !(partes[i] in objeto)){
        return undefined
      }
      objeto = objeto[partes[i]]
    }
    return objeto
  }

  function busca_cabecera(cabeceras, nombre){
    for (let i = 0; i < cabeceras.length; i++) {
      if (cabeceras[i][0].toLowerCase() == nombre.trim().toLowerCase()){
        return cabeceras[i][1]
      }
    }
  }

  function aplica_extracciones(tab, extracciones, respuesta){
    tab.extraidas = []
    if (extracciones.length == 0){ return }
    if (!es_correcta(respuesta.status)){
      tab.extraidas.push({mensaje: texto("no_guarda_no_correcta")})
      return
    }
    var cuerpo
    try {
      cuerpo = JSON.parse(respuesta.texto)
    } catch (e) {
      cuerpo = undefined
    }
    var nueva = false
    for (let i = 0; i < extracciones.length; i++) {
      var ext = extracciones[i]
      var valor
      if (ext.origen == "cabecera"){
        valor = busca_cabecera(respuesta.cabeceras, ext.ruta)
      }else if (ext.ruta.trim() == ""){
        valor = respuesta.texto
      }else{
        valor = cuerpo == undefined? undefined: busca_ruta(cuerpo, ext.ruta.trim())
      }
      var clave = ext.clave.trim()
      if (valor === undefined){
        tab.extraidas.push({clave: clave, ruta: ext.ruta, encontrado: false})
        continue
      }
      valor = typeof valor == "string"? valor: JSON.stringify(valor)
      var variable = busca_variable(clave)
      if (variable == undefined){
        entorno.push(new attributes_object(clave, valor))
        nueva = true
      }else{
        variable.value = valor
      }
      tab.extraidas.push({clave: clave, ruta: ext.ruta, encontrado: true, valor: valor})
    }
    guarda_entorno()
    if (nueva && document.getElementById("modal_entorno").style.display == "flex"){
      pinta_entorno()
    }else{
      refresca_entorno()
    }
  }

  function espera(ejecucion, ms){
    return new Promise(function(resolve){
      ejecucion.despierta = resolve
      ejecucion.temporizador = setTimeout(resolve, ms)
    });
  }

  async function lanza_multiple(tab, plantilla){
    var ejecucion = {
      multiple: new multiple_object(true, tab.multiple.veces, tab.multiple.modo, tab.multiple.intervalo),
      resultados: [],
      abiertos: {},
      parado: false,
      terminado: false,
      inicio: performance.now(),
    }
    tab.ejecucion = ejecucion
    tab.fecha = Date.now()
    tab.text = undefined
    tab.tipo = undefined
    actualiza_multiple(tab)

    function una(i){
      ejecucion.resultados[i] = null
      actualiza_multiple(tab)
      var peticion = concreta_peticion(plantilla, i+1)
      tab.url_respuesta = peticion.url
      var fecha = Date.now()
      return envia(peticion).then(function(respuesta){
        respuesta.fecha = fecha
        ejecucion.resultados[i] = respuesta
        tab.text = respuesta.texto
        tab.tipo = respuesta.tipo
        tab.cabeceras_respuesta = respuesta.cabeceras
        aplica_extracciones(tab, plantilla.extracciones, respuesta)
        actualiza_multiple(tab)
      });
    }

    var promesas = []
    for (let i = 0; i < ejecucion.multiple.veces; i++) {
      if (ejecucion.parado){ break }
      if (ejecucion.multiple.modo == "secuencial"){
        await una(i)
        continue
      }
      if (ejecucion.multiple.modo == "intervalo" && i > 0){
        await espera(ejecucion, ejecucion.multiple.intervalo)
        if (ejecucion.parado){ break }
      }
      promesas.push(una(i))
    }
    await Promise.all(promesas)
    ejecucion.terminado = true
    ejecucion.fin = performance.now()
    actualiza_multiple(tab)
    guarda_sesion()
  }

  function parar_multiple(tab){
    var ejecucion = tab.ejecucion
    ejecucion.parado = true
    clearTimeout(ejecucion.temporizador)
    if (ejecucion.despierta != undefined){ ejecucion.despierta() }
    muestra_boton_enviar(tab)
  }

  function create_url(url_base){
    string_url=""
    if (document.getElementById("tipo_envio").value == "json"){
      return url_base
    }
    for (let i = 0; i < document.getElementsByClassName('atts').length; i++) {
      if (document.getElementsByClassName('atts')[i].children[1].disabled){ continue }
      string_url += (url_base+string_url).includes("?")? "&": "?"
      string_url += document.getElementsByClassName('atts')[i].children[1].value
      string_url += "="
      string_url += document.getElementsByClassName('atts')[i].children[3].value
    }
    return url_base+string_url
  }
