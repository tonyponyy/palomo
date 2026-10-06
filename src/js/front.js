function traduce_pagina(){
  document.documentElement.lang = idioma
  document.querySelectorAll("[data-texto]").forEach(function(elemento){ elemento.innerHTML = texto(elemento.dataset.texto) })
  document.querySelectorAll("[data-texto-title]").forEach(function(elemento){ elemento.title = texto(elemento.dataset.textoTitle) })
  document.querySelectorAll("[data-texto-placeholder]").forEach(function(elemento){ elemento.placeholder = texto(elemento.dataset.textoPlaceholder) })
}

function abrir_ayuda(){
  document.querySelectorAll(".version").forEach(function(elemento){ elemento.textContent = VERSION })
  document.getElementById("modal_ayuda").style.display = "flex"
  document.getElementById("ayuda_contenido").scrollTop = 0
}

function abrir_configuracion(){
  document.getElementById("selector_idioma").value = idioma
  document.getElementById("modal_configuracion").style.display = "flex"
}

function cerrar_configuracion(){
  document.getElementById("modal_configuracion").style.display = "none"
}

function cambiar_idioma(){
  idioma = document.getElementById("selector_idioma").value
  guarda_idioma()
  aplica_idioma()
}

function aplica_idioma(){
  traduce_pagina()
  if (window.palomo_electron != undefined){
    window.palomo_electron.cambia_idioma(idioma)
  }
  document.querySelectorAll("#tab_containers .delete_tab").forEach(function(boton){ boton.title = texto("cerrar_pestana") })
  tabs.forEach(function(tab){
    if (tab.ejecucion != null){
      actualiza_multiple(tab)
    }else if (tab.codigo != undefined && tab.img != IMG_RELOJ){
      tab.status = pinta_codigo(tab.codigo[0], tab.codigo[1])
    }
  })
  if (tabs.length > 0){
    change_tab(settings.current_tab)
  }
  if (document.getElementById("modal_guardadas").style.display == "flex"){
    pinta_guardadas()
  }
  if (document.getElementById("modal_entorno").style.display == "flex"){
    pinta_entorno()
  }
}

function cerrar_ayuda(){
  document.getElementById("modal_ayuda").style.display = "none"
}

  function muestra_respuesta(tab, respuesta){
      tab.tiempo = respuesta.tiempo
      tab.codigo = [respuesta.status, respuesta.statusText]
      tab.status = pinta_codigo(respuesta.status, respuesta.statusText)
      tab.text = respuesta.texto
      tab.tipo = respuesta.tipo
      tab.cabeceras_respuesta = respuesta.cabeceras
      tab.img = es_correcta(respuesta.status)? "img/palomok.png": "img/palomal.png"
      guarda_sesion()
      if (tab.tab_id != settings.current_tab){
        return
      }
      muestra_tiempo(tab.tiempo)
      muestra_fecha(tab.fecha)
      document.getElementById("status").innerHTML ='<p>'+texto("estado", {estado: tab.status})+'</p>';
      muestra_boton_previsualizar(tab)
      document.getElementById("palomo").src = tab.img
      pinta_cabeceras_respuesta(tab)
      pinta_extraidas(tab)
      if (tab.text != undefined && tab.text != ""){
        document.getElementById("demo").innerHTML =formatea_json(tab.text);
      }else if (es_correcta(respuesta.status)){
        document.getElementById("demo").innerHTML = '<span class="ayuda">'+texto("sin_contenido")+'</span>';
      }else{
        document.getElementById("demo").innerHTML = "<h3> :'( </h3>";
      }
  }

  function cambia_seccion(nombre){
    settings.seccion = nombre
    var secciones = ["cuerpo", "cabeceras", "extraer"]
    for (let i = 0; i < secciones.length; i++) {
      var activa = secciones[i] == nombre
      document.getElementById("panel_"+secciones[i]).style.display = activa? "block": "none"
      document.getElementById("seccion_"+secciones[i]).className = activa? "activa": ""
    }
  }

  function cambia_vista_respuesta(nombre){
    settings.vista_respuesta = nombre
    document.getElementById("salida").style.display = nombre == "cuerpo"? "block": "none"
    document.getElementById("salida_cabeceras").style.display = nombre == "cabeceras"? "block": "none"
    document.getElementById("respuesta_cuerpo").className = nombre == "cuerpo"? "activa": ""
    document.getElementById("respuesta_cabeceras").className = nombre == "cabeceras"? "activa": ""
  }

  function pinta_cabeceras_respuesta(tab){
    var cabeceras = tab.cabeceras_respuesta == undefined? []: tab.cabeceras_respuesta
    var html = ""
    for (let i = 0; i < cabeceras.length; i++) {
      html += '<span class="nombre_cabecera">'+escapa_html(cabeceras[i][0])+'</span>: '+escapa_html(cabeceras[i][1])+'\n'
    }
    document.getElementById("salida_cabeceras").innerHTML = html == ""? '<span class="ayuda">'+texto("no_hay_cabeceras")+'</span>': html
    document.getElementById("respuesta_cabeceras").textContent = texto("cabeceras") + (cabeceras.length > 0? " ("+cabeceras.length+")": "")
  }

  var fila_counter = 0

  function add_fila(lista, datos={}){
    fila_counter++
    var id = "fila"+fila_counter
    var html = '<div class="fila" id="'+id+'">'
    if (lista == "cabeceras"){
      html += '<input type="text" class="clave" placeholder="Authorization"> <input type="text" class="valor" placeholder="Bearer {{token}}">'
    }else{
      html += '<select class="origen"><option value="cuerpo">'+texto("del_cuerpo")+'</option><option value="cabecera">'+texto("de_la_cabecera")+'</option></select>'
        +' <input type="text" class="ruta" placeholder="data.access_token"> <span>'+texto("guardar_en")+'</span> <input type="text" class="clave" placeholder="token">'
    }
    html += ' <button class="boton_deshabilitar" onclick="deshabilita_fila(\''+id+'\')">'+texto("deshabilitar")+'</button> <button onclick="borra_fila(\''+id+'\')">'+texto("borrar")+'</button></div>'
    document.getElementById(lista).insertAdjacentHTML("beforeend", html)
    var fila = document.getElementById(id)
    fila.querySelectorAll("input, select").forEach(function(campo){
      if (datos[campo.className] != undefined){ campo.value = datos[campo.className] }
    })
    if (datos.disabled){
      deshabilita_fila(id)
    }
    cuenta_filas()
  }

  function deshabilita_fila(id){
    var fila = document.getElementById(id)
    var deshabilitar = !fila.classList.contains("tachado")
    fila.classList.toggle("tachado", deshabilitar)
    fila.querySelectorAll("input, select").forEach(function(campo){ campo.disabled = deshabilitar })
    fila.querySelector(".boton_deshabilitar").textContent = deshabilitar? texto("habilitar"): texto("deshabilitar")
  }

  function borra_fila(id){
    document.getElementById(id).remove()
    cuenta_filas()
  }

  function lee_filas(lista){
    var filas = []
    document.querySelectorAll("#"+lista+" .fila").forEach(function(fila){
      var datos = {disabled: fila.classList.contains("tachado")}
      fila.querySelectorAll("input, select").forEach(function(campo){ datos[campo.className] = campo.value })
      filas.push(datos)
    })
    return filas
  }

  function pinta_filas(lista, filas){
    document.getElementById(lista).innerHTML = ""
    for (let i = 0; i < filas.length; i++) {
      add_fila(lista, filas[i])
    }
    cuenta_filas()
  }

  function cuenta_filas(){
    var cabeceras = document.querySelectorAll("#cabeceras .fila").length
    var extracciones = document.querySelectorAll("#extracciones .fila").length
    document.getElementById("seccion_cabeceras").textContent = texto("cabeceras") + (cabeceras > 0? " ("+cabeceras+")": "")
    document.getElementById("seccion_extraer").textContent = texto("guardar_en_entorno") + (extracciones > 0? " ("+extracciones+")": "")
  }

  function pinta_extraidas(tab){
    var html = ""
    for (let i = 0; i < tab.extraidas.length; i++) {
      var e = tab.extraidas[i]
      if (e.mensaje != undefined){
        html += '<span class="no_encontrado">'+e.mensaje+'</span> '
      }else if (e.encontrado){
        var valor = e.valor.length > 40? e.valor.slice(0, 40)+"...": e.valor
        html += '<span class="encontrado">✔ {{'+escapa_html(e.clave)+'}} = '+escapa_html(valor)+'</span> '
      }else{
        html += '<span class="no_encontrado">✘ {{'+escapa_html(e.clave)+'}}: '+texto("no_encontrado", {ruta: escapa_html(e.ruta == ""? texto("el_cuerpo"): e.ruta)})+'</span> '
      }
    }
    document.getElementById("aviso_entorno").innerHTML = html == ""? "": texto("aviso_entorno", {avisos: html})
  }

  function clase_variable(variable){
    var nombre = variable.slice(2, -2).trim()
    if (nombre == "$i"){ return "var_iteracion" }
    if (nombre.startsWith("$")){
      var contador = busca_variable(nombre.slice(1))
      return contador != undefined && /^\s*-?\d+\s*$/.test(contador.value)? "var_contador": "var_desconocida"
    }
    return busca_variable(nombre) != undefined? "var_entorno": "var_desconocida"
  }

  function pinta_variables(texto){
    return texto.split(/({{[^{}]*}})/).map(function(parte, i){
      if (i % 2 == 1){
        return '<span class="'+clase_variable(parte)+'">'+escapa_html(parte)+'</span>'
      }
      return escapa_html(parte)
    }).join("")
  }

  function resalta_json(texto){
    var html = ""
    var ultimo = 0
    var tokens = /("(?:\\.|[^"\\\n])*"?)(\s*:)?|({{[^{}]*}})|\b(true|false|null)\b|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|([{}\[\]])/g
    var t
    while ((t = tokens.exec(texto)) != null){
      html += escapa_html(texto.slice(ultimo, t.index))
      ultimo = tokens.lastIndex
      if (t[1] != undefined){
        var clase = t[2] != undefined? "clave_json": "comillas"
        html += '<span class="'+clase+'">'+pinta_variables(t[1])+'</span>'+(t[2] != undefined? escapa_html(t[2]): "")
      }else if (t[3] != undefined){
        html += pinta_variables(t[3])
      }else if (t[4] != undefined){
        html += '<span class="'+t[4]+'">'+t[4]+'</span>'
      }else if (t[5] != undefined){
        html += '<span class="numero">'+t[5]+'</span>'
      }else{
        html += '<span class="llave_json">'+t[6]+'</span>'
      }
    }
    html += escapa_html(texto.slice(ultimo))
    return html
  }

  function pinta_json(){
    var area = document.getElementById("json_body")
    if (area == null){ return }
    var contenido = area.value
    document.getElementById("json_resaltado").innerHTML = resalta_json(contenido) + (contenido.endsWith("\n") || contenido == ""? " ": "")
    sincroniza_scroll_json()
    var estado = document.getElementById("estado_json")
    if (contenido.trim() == ""){
      estado.innerHTML = ""
      return
    }
    try {
      JSON.parse(concreta_peticion({url:"", metodo:"", cuerpo:contenido, cabeceras:[]}, 1, false).cuerpo)
      estado.innerHTML = '<span class="json_valido">✔ '+texto("json_valido")+'</span>'
    } catch (e) {
      var pista = document.querySelector("#json_resaltado .var_desconocida") != null? texto("variables_no_existen"): ""
      estado.innerHTML = '<span class="json_no_valido">✘ '+escapa_html(e.message)+pista+'</span>'
    }
  }

  function sincroniza_scroll_json(){
    var area = document.getElementById("json_body")
    var resaltado = document.getElementById("json_resaltado")
    resaltado.scrollTop = area.scrollTop
    resaltado.scrollLeft = area.scrollLeft
  }

  function inserta_json(area, texto, posicion){
    var inicio = area.selectionStart
    if (!document.execCommand("insertText", false, texto)){
      area.setRangeText(texto, area.selectionStart, area.selectionEnd, "end")
    }
    if (posicion != undefined){
      area.setSelectionRange(inicio + posicion, inicio + posicion)
    }
    pinta_json()
  }

  var cierres_json = {"{": "}", "[": "]", '"': '"'}

  function tecla_json(evento){
    if (evento.ctrlKey || evento.altKey || evento.metaKey){ return }
    var area = evento.target
    var inicio = area.selectionStart
    var fin = area.selectionEnd
    var texto = area.value
    var antes = texto[inicio - 1]
    var despues = texto[inicio]
    var principio_linea = texto.lastIndexOf("\n", inicio - 1) + 1
    var sangria = texto.slice(principio_linea, inicio).match(/^[ \t]*/)[0]

    if (evento.key == "Tab"){
      evento.preventDefault()
      if (!evento.shiftKey){
        inserta_json(area, "  ")
        return
      }
      var quitar = texto.slice(principio_linea, principio_linea + 2).match(/^ */)[0].length
      if (quitar > 0){
        area.setSelectionRange(principio_linea, principio_linea + quitar)
        document.execCommand("delete")
        area.setSelectionRange(Math.max(inicio - quitar, principio_linea), Math.max(fin - quitar, principio_linea))
        pinta_json()
      }
    }else if (evento.key == "Enter"){
      evento.preventDefault()
      if ((antes == "{" && despues == "}") || (antes == "[" && despues == "]")){
        inserta_json(area, "\n"+sangria+"  \n"+sangria, sangria.length + 3)
      }else if (antes == "{" || antes == "[" || antes == ","){
        inserta_json(area, "\n"+sangria+(antes == ","? "": "  "))
      }else{
        inserta_json(area, "\n"+sangria)
      }
    }else if ((evento.key == "}" || evento.key == "]" || evento.key == '"') && inicio == fin && despues == evento.key){
      evento.preventDefault()
      area.setSelectionRange(inicio + 1, inicio + 1)
    }else if (cierres_json[evento.key] != undefined){
      if (evento.key == '"' && inicio == fin && /[\w\\]/.test(antes || "")){ return }
      evento.preventDefault()
      var seleccion = texto.slice(inicio, fin)
      inserta_json(area, evento.key + seleccion + cierres_json[evento.key], 1 + seleccion.length)
    }else if (evento.key == "Backspace" && inicio == fin && antes != undefined && cierres_json[antes] == despues){
      evento.preventDefault()
      area.setSelectionRange(inicio - 1, inicio + 1)
      document.execCommand("delete")
      pinta_json()
    }
  }

  function formatear_json(){
    var area = document.getElementById("json_body")
    var texto = area.value
    if (texto.trim() == ""){ return }
    var variables = []
    var fuera = []
    var marcado = ""
    var en_cadena = false
    for (let i = 0; i < texto.length; i++) {
      var c = texto[i]
      if (en_cadena && c == "\\"){
        marcado += c + (texto[i + 1] || "")
        i++
        continue
      }
      if (c == '"'){
        en_cadena = !en_cadena
      }else if (c == "{" && texto[i + 1] == "{"){
        var cierre = texto.indexOf("}}", i)
        if (cierre != -1){
          var marca = "@@palomo" + variables.length + "@@"
          variables.push(texto.slice(i, cierre + 2))
          fuera.push(!en_cadena)
          marcado += en_cadena? marca: '"' + marca + '"'
          i = cierre + 1
          continue
        }
      }
      marcado += c
    }
    try {
      var formateado = JSON.stringify(JSON.parse(marcado), null, 2)
    } catch (e) {
      pinta_json()
      return
    }
    for (let n = 0; n < variables.length; n++) {
      var marca = "@@palomo" + n + "@@"
      formateado = formateado.replace(fuera[n]? '"' + marca + '"': marca, function(){ return variables[n] })
    }
    area.focus()
    area.select()
    inserta_json(area, formateado)
  }

  function tecla_url(evento){
    if (evento.key != "Enter" || evento.isComposing || evento.repeat){ return }
    evento.preventDefault()
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    if (tab.ejecucion != null && !tab.ejecucion.terminado){ return }
    loadDoc()
  }

  var multiple_recien_marcado = false

  function cambiar_multiple(){
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    tab.multiple.activo = document.getElementById("multiple").checked
    if (tab.multiple.activo){
      abrir_multiple()
      multiple_recien_marcado = true
    }
    muestra_resumen_multiple(tab)
  }

  function abrir_multiple(){
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    document.getElementById("multiple_veces").value = tab.multiple.veces
    document.getElementById("multiple_intervalo").value = tab.multiple.intervalo
    document.querySelector('input[name="multiple_modo"][value="'+tab.multiple.modo+'"]').checked = true
    cambiar_modo_multiple()
    document.getElementById("modal_multiple").style.display = "flex"
    document.getElementById("multiple_veces").focus()
  }

  function cambiar_modo_multiple(){
    var modo = document.querySelector('input[name="multiple_modo"]:checked').value
    document.getElementById("multiple_intervalo_caja").style.display = modo == "intervalo"? "block": "none"
  }

  function aceptar_multiple(){
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    var veces = parseInt(document.getElementById("multiple_veces").value)
    var intervalo = parseInt(document.getElementById("multiple_intervalo").value)
    tab.multiple.veces = isNaN(veces)? 1: Math.min(Math.max(veces, 1), 1000)
    tab.multiple.intervalo = isNaN(intervalo)? 0: Math.max(intervalo, 0)
    tab.multiple.modo = document.querySelector('input[name="multiple_modo"]:checked').value
    multiple_recien_marcado = false
    document.getElementById("modal_multiple").style.display = "none"
    muestra_resumen_multiple(tab)
  }

  function cancelar_multiple(){
    document.getElementById("modal_multiple").style.display = "none"
    if (multiple_recien_marcado){
      multiple_recien_marcado = false
      document.getElementById("multiple").checked = false
      cambiar_multiple()
    }
  }

  function texto_modo(multiple){
    if (multiple.modo == "secuencial"){ return texto("resumen_secuencial") }
    if (multiple.modo == "intervalo"){ return texto("resumen_intervalo", {intervalo: multiple.intervalo}) }
    return texto("resumen_paralelo")
  }

  function muestra_resumen_multiple(tab){
    var etiqueta = document.getElementById("texto_multiple")
    etiqueta.className = tab.multiple.activo? "activo": ""
    etiqueta.title = tab.multiple.activo? texto("cambiar_multiple_titulo"): ""
    muestra_boton_enviar(tab)
  }

  function pulsa_texto_multiple(evento){
    if (document.getElementById("multiple").checked){
      evento.preventDefault()
      abrir_multiple()
    }
  }

  function muestra_boton_enviar(tab){
    var boton = document.getElementById("boton_enviar")
    var etiqueta = document.getElementById("texto_enviar")
    var icono = document.getElementById("icono_enviar")
    var icono_parar = document.getElementById("icono_parar")
    if (tab.ejecucion == null || tab.ejecucion.terminado){
      etiqueta.textContent = texto("enviar")
      icono.style.display = ""
      icono_parar.style.display = "none"
      boton.title = tab.multiple.activo? texto("veces_modo", {veces: tab.multiple.veces, modo: texto_modo(tab.multiple)}): ""
    }else{
      etiqueta.textContent = tab.ejecucion.parado? texto("parando"): texto("parar")
      icono.style.display = "none"
      icono_parar.style.display = "inline"
      boton.title = ""
    }
  }

  function actualiza_multiple(tab){
    var ejecucion = tab.ejecucion
    var llegadas = ejecucion.resultados.filter(function(r){ return r != null })
    var correctas = llegadas.filter(function(r){ return es_correcta(r.status) }).length
    var fallidas = llegadas.length - correctas
    var fin = ejecucion.terminado? ejecucion.fin: performance.now()
    tab.tiempo = Math.round(fin - ejecucion.inicio)
    tab.status = '<b>'+texto("multiple")+'</b> '+llegadas.length+'/'+ejecucion.multiple.veces
      +' · <span class="codigo codigo_2xx">'+texto("multiple_bien", {numero: correctas})+'</span> <span class="codigo codigo_4xx">'+texto("multiple_mal", {numero: fallidas})+'</span>'
      +' · '+(ejecucion.terminado? (ejecucion.parado? texto("multiple_parado"): texto("multiple_terminado")): texto("multiple_enviando"))
    if (!ejecucion.terminado){
      tab.img = IMG_RELOJ
    }else if (llegadas.length == 0){
      tab.img = ""
    }else{
      tab.img = fallidas == 0? "img/palomok.png": "img/palomal.png"
    }
    if (tab.tab_id != settings.current_tab){
      return
    }
    muestra_tiempo(tab.tiempo)
    muestra_fecha(tab.fecha)
    document.getElementById("status").innerHTML ='<p>'+texto("estado", {estado: tab.status})+'</p>';
    document.getElementById("palomo").src = tab.img
    muestra_boton_previsualizar(tab)
    muestra_boton_enviar(tab)
    pinta_cabeceras_respuesta(tab)
    pinta_extraidas(tab)
    pinta_multiple(tab)
  }

  function pinta_multiple(tab){
    var ejecucion = tab.ejecucion
    var tiempos = ejecucion.resultados.filter(function(r){ return r != null }).map(function(r){ return r.tiempo })
    var html = '<div class="resumen_multiple">'+escapa_html(texto("veces_modo", {veces: ejecucion.multiple.veces, modo: texto_modo(ejecucion.multiple)}))
    if (tiempos.length > 0){
      var media = Math.round(tiempos.reduce(function(a, b){ return a + b }, 0) / tiempos.length)
      html += ' · '+texto("multiple_tiempos", {minimo: Math.min.apply(null, tiempos), media: media, maximo: Math.max.apply(null, tiempos)})
    }
    html += '</div>'
    for (let i = 0; i < ejecucion.resultados.length; i++) {
      var r = ejecucion.resultados[i]
      if (r === undefined){ continue }
      if (r == null){
        html += '<div class="resultado_multiple enviando">#'+(i+1)+' '+texto("multiple_enviando")+'</div>'
        continue
      }
      var abierto = ejecucion.abiertos[i]? ' open': ''
      html += '<details class="resultado_multiple"'+abierto+' ontoggle="toggle_resultado('+i+', this.open)"><summary>#'+(i+1)+' '+pinta_codigo(r.status, r.statusText)+' '+r.tiempo+' ms'
        +(r.fecha != undefined? ' <span class="hora_envio">· '+formatea_hora(r.fecha)+'</span>': '')+'</summary>'
        +'<div class="detalle_json">'+formatea_json(r.texto)+'</div></details>'
    }
    document.getElementById("demo").innerHTML = html
  }

  function toggle_resultado(i, abierto){
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    if (tab.ejecucion != null){
      tab.ejecucion.abiertos[i] = abierto
    }
  }

  function add_atribute(){
    att_counter++
    document.getElementById("atributes").insertAdjacentHTML("beforeend", '<div class="atts"id="att'+att_counter+'"><span> '+texto("clave")+'</span> <input type="text" class="clave"> <span> '+texto("valor")+' </span> <input type="text" class="valor"> <button id="deshabilitar'+att_counter+'" onClick="deshabilitar('+att_counter+')"> '+texto("deshabilitar")+' </button> <button onClick="borrar_att('+att_counter+')"> '+texto("borrar")+' </button> <br> </div>')
  }

  function deshabilitar(id){
  
    if (document.getElementById("att"+id).children[1].disabled == false ){
      document.getElementById("att"+id).className += " tachado"
      document.getElementById("att"+id).children[1].disabled = true
      document.getElementById("att"+id).children[3].disabled = true
      document.getElementById("deshabilitar"+id).innerHTML = texto("habilitar")
    }else{
      document.getElementById("att"+id).className = "atts"
      document.getElementById("att"+id).children[1].disabled = false
      document.getElementById("att"+id).children[3].disabled = false
      document.getElementById("deshabilitar"+id).innerHTML = texto("deshabilitar")
    }
    



  }
  function cambiar_tipo_envio(){
    if (document.getElementById("tipo_envio").value == "json"){
      document.getElementById("add_att").style.display = "none"
      document.getElementById("atributes").style.display = "none"
      document.getElementById("json_section").style.display = "block"
    }else{
      document.getElementById("add_att").style.display = "block"
      document.getElementById("atributes").style.display = "block"
      document.getElementById("json_section").style.display = "none"
    }
  }

  function borrar_att(id){
    att = document.getElementById("att"+id).remove()
  }

  function formatea_json(cadena){
    if (cadena == undefined){ return "" }
    try {
      salida = JSON.stringify(JSON.parse(cadena), null, 2)
    } catch (e) {
      return escapa_html(cadena)
    }
    salida = escapa_html(salida)
    salida = salida.replace(/("(\\.|[^"\\])*")(\s*:)?|\b(true|false|null)\b|([{}\[\]])|-?\d+(\.\d+)?([eE][+-]?\d+)?/g,
      function(encontrado, texto, caracter, dos_puntos, palabra, llave){
        if (texto != undefined){
          if (dos_puntos != undefined){
            return "<span class='clave_json'>"+texto+"</span>"+dos_puntos
          }
          if (/^"https?:\/\/[^"\s]+"$/.test(texto)){
            return "<span class='comillas enlace' onclick='abrir_modal(this)'>"+texto+"</span>"
          }
          return "<span class='comillas'>"+texto+"</span>"
        }
        if (palabra != undefined){
          return "<span class='"+palabra+"'>"+palabra+"</span>"
        }
        if (llave != undefined){
          return "<b>"+llave+"</b>"
        }
        return "<span class='numero'>"+encontrado+"</span>"
      });
    return salida;
  }

  function abrir_modal(elemento){
    url = JSON.parse(elemento.textContent)
    document.getElementById("modal_url").textContent = url
    if (/\.(png|jpe?g|gif|webp|svg|bmp|ico)(\?.*)?$/i.test(url)){
      document.getElementById("modal_contenido").innerHTML = '<img id="modal_vista">'
    }else{
      document.getElementById("modal_contenido").innerHTML = '<iframe id="modal_vista"></iframe>'
    }
    document.getElementById("modal_vista").src = url
    document.getElementById("modal").style.display = "flex"
  }

  function abrir_pestana(){
    window.open(document.getElementById("modal_url").textContent, "_blank", "noopener")
  }

  function es_html(texto, tipo){
    if (texto == undefined || texto == ""){ return false }
    if (tipo != undefined && tipo != null && tipo != ""){
      return /text\/html|application\/xhtml/i.test(tipo)
    }
    return /^\s*(<!doctype html|<html)/i.test(texto)
  }

  function muestra_boton_previsualizar(tab){
    if (es_html(tab.text, tab.tipo)){
      document.getElementById("boton_previsualizar").style.display = "inline-block"
    }else{
      document.getElementById("boton_previsualizar").style.display = "none"
    }
  }

  function previsualizar_html(){
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    var html = tab.text
    var base = '<base href="'+escapa_html(tab.url_respuesta).replace(/"/g,"&quot;")+'">'
    if (/<head[^>]*>/i.test(html)){
      html = html.replace(/<head[^>]*>/i, function(encontrado){ return encontrado + base })
    }else{
      html = base + html
    }
    document.getElementById("modal_url").textContent = tab.url_respuesta
    document.getElementById("modal_contenido").innerHTML = '<iframe id="modal_vista" sandbox="allow-scripts allow-forms"></iframe>'
    document.getElementById("modal_vista").srcdoc = html
    document.getElementById("modal").style.display = "flex"
  }

  function cerrar_modal(){
    document.getElementById("modal").style.display = "none"
    document.getElementById("modal_contenido").innerHTML = ""
  }

  function pinta_codigo(status, statusText){
    var familia = Math.floor(status / 100)
    var codigos_http = texto("codigos_http"), familias_http = texto("familias_http")
    var info = codigos_http[status] != undefined? codigos_http[status]: familias_http[familia]
    if (info == undefined){ info = texto("codigo_desconocido") }
    var nombre = statusText != undefined && statusText != ""? statusText: info[0]
    var titulo = (status+" "+info[0]+": "+info[1]).replace(/"/g,"&quot;")
    return '<span class="codigo codigo_'+familia+'xx" title="'+titulo+'">'+status+'</span> <b>'+escapa_html(nombre)+'</b>'
  }

  function muestra_fecha(fecha){
    document.getElementById("fecha_peticion").textContent = fecha == undefined? "": new Date(fecha).toLocaleString(texto("locale"))
  }

  function formatea_hora(fecha){
    var d = new Date(fecha)
    return d.toLocaleTimeString(texto("locale")) + "." + String(d.getMilliseconds()).padStart(3, "0")
  }

  function muestra_tiempo(tiempo){
    if (tiempo == undefined){
      document.getElementById("tiempo").innerHTML = ""
    }else if (tiempo < 1000){
      document.getElementById("tiempo").innerHTML = '<p>'+texto("tiempo", {tiempo: tiempo+' ms'})+'</p>'
    }else{
      document.getElementById("tiempo").innerHTML = '<p>'+texto("tiempo", {tiempo: (tiempo/1000).toFixed(2)+' s'})+'</p>'
    }
  }

  function guardar_peticion(){
    save_tab()
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    document.getElementById("nombre_peticion").value = ""
    document.getElementById("nombre_peticion").placeholder = tab.metodo + " " + create_url(tab.url)
    document.getElementById("coleccion_peticion").innerHTML = opciones_colecciones(coleccion_actual)
    document.getElementById("modal_nombre").style.display = "flex"
    document.getElementById("nombre_peticion").focus()
  }

  function cerrar_nombre(){
    document.getElementById("modal_nombre").style.display = "none"
  }

  function tecla_nombre(event){
    if (event.key == "Enter"){ confirmar_guardar() }
    if (event.key == "Escape"){ cerrar_nombre() }
  }

  function confirmar_guardar(){
    var tab = tabs[get_tab_position_from_array(settings.current_tab)]
    var nombre = document.getElementById("nombre_peticion").value.trim()
    if (nombre == ""){
      nombre = document.getElementById("nombre_peticion").placeholder
    }
    var coleccion = document.getElementById("coleccion_peticion").value
    guardadas.push(new peticion_object(nombre, tab.url, tab.metodo, tab.tipo_envio, tab.json, tab.attributes, tab.multiple, tab.cabeceras, tab.extracciones, coleccion))
    coleccion_actual = coleccion
    guarda_guardadas()
    cerrar_nombre()

    document.getElementById("guardado_ok").style.display = "inline"
    setTimeout(function(){ document.getElementById("guardado_ok").style.display = "none" }, 1500)
  }

  function abrir_guardadas(){
    pinta_guardadas()
    document.getElementById("modal_guardadas").style.display = "flex"
  }

  function cerrar_guardadas(){
    document.getElementById("modal_guardadas").style.display = "none"
  }

  function nombre_coleccion(coleccion){
    return coleccion == ""? texto("coleccion_general"): coleccion
  }

  function opciones_colecciones(seleccionada){
    var opciones = ""
    var todas = [""].concat(colecciones)
    for (let i = 0; i < todas.length; i++) {
      var marcada = todas[i] == seleccionada? ' selected': ''
      opciones += '<option value="'+escapa_atributo(todas[i])+'"'+marcada+'>'+escapa_html(nombre_coleccion(todas[i]))+'</option>'
    }
    return opciones
  }

  function cuenta_coleccion(coleccion){
    return guardadas.filter(function(guardada){ return guardada.coleccion == coleccion }).length
  }

  function pinta_colecciones(){
    var barra = ""
    var todas = [""].concat(colecciones)
    for (let i = 0; i < todas.length; i++) {
      var clase = todas[i] == coleccion_actual? "coleccion coleccion_activa": "coleccion"
      barra += '<button class="'+clase+'" onclick="cambia_coleccion('+i+')"><img src="img/carpeta.png" class="icono_carpeta"> '
        +escapa_html(nombre_coleccion(todas[i]))+' <span class="cuenta">('+cuenta_coleccion(todas[i])+')</span></button>'
    }
    document.getElementById("colecciones_barra").innerHTML = barra
    var es_general = coleccion_actual == ""
    document.getElementById("boton_renombrar_coleccion").disabled = es_general
    document.getElementById("boton_borrar_coleccion").disabled = es_general
  }

  function cambia_coleccion(i){
    coleccion_actual = i == 0? "": colecciones[i-1]
    document.getElementById("colecciones_mensaje").textContent = ""
    pinta_guardadas()
  }

  function tecla_coleccion(event){
    if (event.key == "Enter"){ crear_coleccion() }
  }

  function lee_nombre_coleccion(){
    var nombre = document.getElementById("nombre_coleccion").value.trim()
    if (nombre == ""){
      muestra_mensaje_colecciones(texto("coleccion_sin_nombre"))
      return null
    }
    if (colecciones.indexOf(nombre) != -1){
      muestra_mensaje_colecciones(texto("coleccion_ya_existe"))
      return null
    }
    return nombre
  }

  function crear_coleccion(){
    var nombre = lee_nombre_coleccion()
    if (nombre == null){ return }
    colecciones.push(nombre)
    coleccion_actual = nombre
    document.getElementById("nombre_coleccion").value = ""
    guarda_guardadas()
    pinta_guardadas()
  }

  function renombrar_coleccion(){
    if (coleccion_actual == ""){ return }
    var nombre = lee_nombre_coleccion()
    if (nombre == null){ return }
    colecciones[colecciones.indexOf(coleccion_actual)] = nombre
    for (let i = 0; i < guardadas.length; i++) {
      if (guardadas[i].coleccion == coleccion_actual){ guardadas[i].coleccion = nombre }
    }
    coleccion_actual = nombre
    document.getElementById("nombre_coleccion").value = ""
    guarda_guardadas()
    pinta_guardadas()
  }

  function borrar_coleccion(){
    if (coleccion_actual == ""){ return }
    var cuantas = cuenta_coleccion(coleccion_actual)
    if (cuantas > 0 && !confirm(texto("confirmar_borrar_coleccion", {nombre: coleccion_actual, cuantas: cuantas}))){
      return
    }
    var borrada = coleccion_actual
    guardadas = guardadas.filter(function(guardada){ return guardada.coleccion != borrada })
    colecciones.splice(colecciones.indexOf(borrada), 1)
    coleccion_actual = ""
    guarda_guardadas()
    pinta_guardadas()
  }

  function mover_guardada(i, coleccion){
    guardadas[i].coleccion = coleccion
    guarda_guardadas()
    pinta_guardadas()
  }

  function muestra_mensaje_colecciones(mensaje){
    document.getElementById("colecciones_mensaje").textContent = mensaje
  }

  // sin coleccion exporta todas
  function exportar_coleccion(coleccion){
    var nombres = coleccion == undefined? [""].concat(colecciones): [coleccion]
    var datos = {palomo: "colecciones", version: 1, colecciones: []}
    for (let i = 0; i < nombres.length; i++) {
      var peticiones = guardadas.filter(function(guardada){ return guardada.coleccion == nombres[i] }).map(function(guardada){
        var copia = Object.assign({}, guardada)
        delete copia.coleccion
        return copia
      })
      datos.colecciones.push({nombre: nombres[i], peticiones: peticiones})
    }
    var archivo = coleccion == undefined? "palomo_guardadas": "palomo_" + nombre_coleccion(coleccion)
    var enlace = document.createElement("a")
    enlace.href = URL.createObjectURL(new Blob([JSON.stringify(datos, null, 2)], {type: "application/json"}))
    enlace.download = archivo.replace(/[\\/:*?"<>|]/g, "_") + ".json"
    document.body.appendChild(enlace)
    enlace.click()
    enlace.remove()
    setTimeout(function(){ URL.revokeObjectURL(enlace.href) }, 1000)
  }

  function importar_guardadas(input){
    var archivo = input.files[0]
    input.value = ""
    if (archivo == undefined){ return }
    archivo.text().then(function(contenido){
      var datos = JSON.parse(contenido)
      // un array suelto de peticiones va a la coleccion que se esta viendo
      var lista = Array.isArray(datos)? [{nombre: coleccion_actual, peticiones: datos}]: datos.colecciones
      if (!Array.isArray(lista)){ throw new Error("formato") }
      var importadas = 0
      for (let i = 0; i < lista.length; i++) {
        var coleccion = typeof lista[i].nombre == "string"? lista[i].nombre.trim(): ""
        if (coleccion != "" && colecciones.indexOf(coleccion) == -1){
          colecciones.push(coleccion)
        }
        var peticiones = Array.isArray(lista[i].peticiones)? lista[i].peticiones: []
        for (let j = 0; j < peticiones.length; j++) {
          var peticion = limpia_importada(peticiones[j], coleccion)
          if (peticion != null){
            guardadas.push(peticion)
            importadas++
          }
        }
      }
      guarda_guardadas()
      pinta_guardadas()
      muestra_mensaje_colecciones(texto("importadas", {cuantas: importadas}))
    }).catch(function(e){
      console.log("No se ha podido importar", e)
      muestra_mensaje_colecciones(texto("importar_error"))
    })
  }

  function limpia_importada(datos, coleccion){
    if (datos == null || typeof datos != "object" || typeof datos.url != "string"){
      return null
    }
    var metodo = typeof datos.metodo == "string"? datos.metodo.toUpperCase(): "GET"
    var nombre = typeof datos.nombre == "string" && datos.nombre.trim() != ""? datos.nombre: metodo + " " + datos.url
    var multiple = datos.multiple != null && typeof datos.multiple == "object"?
      new multiple_object(datos.multiple.activo == true, Number(datos.multiple.veces) || 5, datos.multiple.modo || "paralelo", Number(datos.multiple.intervalo) || 1000): new multiple_object()
    var peticion = new peticion_object(nombre, datos.url, metodo,
      datos.tipo_envio == "clave_valor"? "clave_valor": "json",
      typeof datos.json == "string"? datos.json: "",
      lista_importada(datos.attributes, ["key", "value"]),
      multiple,
      lista_importada(datos.cabeceras, ["clave", "valor"]),
      lista_importada(datos.extracciones, ["ruta", "clave"]),
      coleccion)
    if (typeof datos.fecha == "string"){ peticion.fecha = datos.fecha }
    return peticion
  }

  // se queda con las filas que son objetos y pasa a texto los campos que se pintan
  function lista_importada(lista, campos){
    if (!Array.isArray(lista)){ return [] }
    return lista.filter(function(fila){ return fila != null && typeof fila == "object" }).map(function(fila){
      var limpia = Object.assign({}, fila)
      for (let i = 0; i < campos.length; i++) {
        limpia[campos[i]] = limpia[campos[i]] == undefined? "": String(limpia[campos[i]])
      }
      limpia.disabled = limpia.disabled == true
      return limpia
    })
  }

  function pinta_guardadas(){
    pinta_colecciones()
    var visibles = []
    for (let i = 0; i < guardadas.length; i++) {
      if (guardadas[i].coleccion == coleccion_actual){ visibles.push(i) }
    }
    if (visibles.length == 0){
      document.getElementById("guardadas").innerHTML = '<p class="ayuda">'+texto(guardadas.length == 0? "no_hay_guardadas": "coleccion_vacia")+'</p>'
      return
    }
    var html = ""
    for (let k = 0; k < visibles.length; k++) {
      var i = visibles[k]
      html += '<div class="guardada" id="guardada'+i+'"><span class="metodo '+clase_metodo(guardadas[i].metodo)+'">'+escapa_html(guardadas[i].metodo)+'</span> <a class="nombre_guardada" onclick="ver_guardada('+i+')">'+escapa_html(guardadas[i].nombre)+'</a> <span class="fecha">'+escapa_html(guardadas[i].fecha)+'</span>'
        +' <select class="mover_guardada" title="'+escapa_atributo(texto("mover_a_coleccion"))+'" onchange="mover_guardada('+i+', this.value)">'+opciones_colecciones(guardadas[i].coleccion)+'</select>'
        +' <button onClick="borrar_guardada('+i+')"> '+texto("borrar")+' </button>'
        +'<div class="detalle_guardada" id="detalle'+i+'">'+pinta_detalle_guardada(guardadas[i])+'<button class="button_add" onClick="recuperar_peticion('+i+')"> '+texto("recuperar")+' </button></div></div>'
    }
    document.getElementById("guardadas").innerHTML = html
  }

  function clase_metodo(metodo){
    return /^(GET|POST|PUT|PATCH|DELETE)$/.test(metodo)? "metodo_" + metodo.toLowerCase(): "metodo_otro"
  }

  function pinta_detalle_guardada(guardada){
    var detalle = '<p><b>'+texto("detalle_direccion")+'</b> <span class="detalle_url">'+escapa_html(guardada.url)+'</span></p>'
    if (guardada.cabeceras != undefined && guardada.cabeceras.length > 0){
      detalle += '<p><b>'+texto("detalle_cabeceras")+'</b></p>'
      for (let j = 0; j < guardada.cabeceras.length; j++) {
        var tachada = guardada.cabeceras[j].disabled? ' class="tachado"': ''
        detalle += '<div'+tachada+'><span>'+escapa_html(guardada.cabeceras[j].clave)+': '+escapa_html(guardada.cabeceras[j].valor)+'</span></div>'
      }
    }
    if (guardada.tipo_envio == "json"){
      if (guardada.json.trim() != ""){
        detalle += '<p><b>'+texto("detalle_json")+'</b></p><pre class="detalle_json">'+formatea_json(guardada.json)+'</pre>'
      }
    }else{
      detalle += '<p><b>'+texto("detalle_atributos")+'</b>'
      if (guardada.attributes.length == 0){ detalle += ' '+texto("ninguno") }
      detalle += '</p>'
      for (let j = 0; j < guardada.attributes.length; j++) {
        var clase = guardada.attributes[j].disabled? ' class="tachado"': ''
        detalle += '<div'+clase+'><span>'+escapa_html(guardada.attributes[j].key)+' = '+escapa_html(guardada.attributes[j].value)+'</span></div>'
      }
    }
    return detalle
  }

  function ver_guardada(i){
    var detalle = document.getElementById("detalle"+i)
    detalle.style.display = detalle.style.display == "block"? "none": "block"
  }

  function borrar_guardada(i){
    guardadas.splice(i, 1)
    guarda_guardadas()
    pinta_guardadas()
  }

  function recuperar_peticion(i){
    var guardada = guardadas[i]
    create_tab()
    var tab = tabs[get_tab_position_from_array(tab_counter)]
    tab.url = guardada.url
    tab.metodo = guardada.metodo
    tab.tipo_envio = guardada.tipo_envio
    tab.json = guardada.json
    if (guardada.multiple != undefined){
      tab.multiple = new multiple_object(guardada.multiple.activo, guardada.multiple.veces, guardada.multiple.modo, guardada.multiple.intervalo)
    }
    tab.cabeceras = guardada.cabeceras == undefined? []: guardada.cabeceras.map(function(c){ return Object.assign({}, c) })
    tab.extracciones = guardada.extracciones == undefined? []: guardada.extracciones.map(function(e){ return Object.assign({}, e) })
    tab.attributes = []
    for (let j = 0; j < guardada.attributes.length; j++) {
      tab.attributes.push(new attributes_object(guardada.attributes[j].key, guardada.attributes[j].value, guardada.attributes[j].disabled))
    }
    document.getElementById("texttab"+tab_counter).textContent = guardada.nombre
    change_tab(tab_counter)
    cerrar_guardadas()
  }

  function abrir_entorno(){
    pinta_entorno()
    document.getElementById("modal_entorno").style.display = "flex"
  }

  function cerrar_entorno(){
    document.getElementById("modal_entorno").style.display = "none"
  }

  function pinta_entorno(){
    document.getElementById("variables").innerHTML = ""
    for (let i = 0; i < entorno.length; i++) {
      document.getElementById("variables").innerHTML += '<div class="variable" id="variable'+i+'"><span> '+texto("clave")+'</span> <input type="text" oninput="cambia_variable('+i+')"> <span> '+texto("valor")+' </span> <input type="text" class="clase_valor" oninput="cambia_variable('+i+')"> <button onClick="borrar_variable('+i+')"> '+texto("borrar")+' </button> </div>'
    }
    for (let i = 0; i < entorno.length; i++) {
      document.getElementById("variable"+i).children[1].value = entorno[i].key
      document.getElementById("variable"+i).children[3].value = entorno[i].value
    }
  }

  function add_variable(){
    entorno.push(new attributes_object("",""))
    guarda_entorno()
    pinta_entorno()
  }

  function cambia_variable(i){
    entorno[i].key = document.getElementById("variable"+i).children[1].value
    entorno[i].value = document.getElementById("variable"+i).children[3].value
    guarda_entorno()
  }

  function borrar_variable(i){
    entorno.splice(i, 1)
    guarda_entorno()
    pinta_entorno()
  }

  function refresca_entorno(){
    if (document.getElementById("modal_entorno").style.display != "flex"){
      return
    }
    for (let i = 0; i < entorno.length; i++) {
      var input = document.getElementById("variable"+i).children[3]
      if (input != document.activeElement){
        input.value = entorno[i].value
      }
    }
  }

  function escapa_atributo(cadena){
    return escapa_html(cadena).replace(/"/g,"&quot;").replace(/'/g,"&#39;")
  }

  function escapa_html(cadena){
    salida = cadena.replace(/&/g,"&amp;");
    salida = salida.replace(/</g,"&lt;");
    salida = salida.replace(/>/g,"&gt;");
    return salida;
  }
