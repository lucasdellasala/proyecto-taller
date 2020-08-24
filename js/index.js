/*
window.onload hace que primero se cargue toda la página para luego ejecutar los scripts, si no lo pusieramos en el ejemplo tendríamos
problemas para ejecutar el evento porque no encontraría ningún elemento con id "ejemplo" y por lo tanto habría un error.

Todo código que no precise de elementos que tengan que cargar primero, puede ponerse fuera de window.onload.

*/
window.onload = function () {
    //Acá buscamos en el documento por Id al botón de ejemplo y le agregamos un evento de click que disparar el saludador()
    document.getElementById("ejemplo").addEventListener("click", ()=>{saludador()});
}