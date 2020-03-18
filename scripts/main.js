/* Texto del input */
var textoParrafo = document.querySelector('.cambiotexto__parrafo');
var textoInput = document.querySelector('.cambiotexto__input');

var handleTextoInput = function(event) {
    textoParrafo.textContent= textoInput.value.toUpperCase();
}

textoInput.addEventListener('input', handleTextoInput);

/* Borrar texto cuandi de click */
var handleClearContent = function(event){
    textoInput.value = "";
}

textoInput.addEventListener('change', handleClearContent)