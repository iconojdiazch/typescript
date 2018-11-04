"use strict";
window.addEventListener('load', function () {
    function saludo(texto) {
        return texto.toUpperCase();
    }
    console.log(saludo('mensaje'));
    var nodo = document.createElement("div");
    nodo.innerHTML = saludo('Nuevo mensaje');
    document.body.appendChild(nodo);
});
