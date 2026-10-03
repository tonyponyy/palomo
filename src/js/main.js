window.onload = function() {
  carga_idioma()
  traduce_pagina()
  cambia_seccion(settings.seccion)
  cambia_vista_respuesta(settings.vista_respuesta)
  carga_entorno()
  carga_guardadas()
  if (ventana_nueva || !restaura_sesion()){
    create_tab()
  }
  cambiar_tipo_envio()
  if (window.palomo_electron != undefined){
    document.getElementById("barra_superior").style.display = "none"
    window.palomo_electron.al_pulsar_menu(opcion_menu)
    window.palomo_electron.cambia_idioma(idioma)
  }
};

window.addEventListener("beforeunload", guarda_sesion)

window.addEventListener("storage", function(evento){
  if (evento.key == "palomo_entorno"){
    carga_entorno()
    if (document.getElementById("modal_entorno").style.display == "flex"){
      pinta_entorno()
    }
  }
  if (evento.key == "palomo_idioma"){
    carga_idioma()
    aplica_idioma()
    if (document.getElementById("modal_configuracion").style.display == "flex"){
      document.getElementById("selector_idioma").value = idioma
    }
  }
  if (evento.key == "palomo_guardadas"){
    carga_guardadas()
    if (document.getElementById("modal_guardadas").style.display == "flex"){
      pinta_guardadas()
    }
  }
});

function opcion_menu(nombre){
  if (nombre == "cerrar_pestana"){
    delete_tab(settings.current_tab)
  }else if (nombre == "guardar"){
    guardar_peticion()
  }else if (nombre == "guardadas"){
    abrir_guardadas()
  }else if (nombre == "enviar"){
    loadDoc()
  }else if (nombre == "entorno"){
    abrir_entorno()
  }else if (nombre == "configuracion"){
    abrir_configuracion()
  }else if (nombre == "ayuda"){
    abrir_ayuda()
  }
}
