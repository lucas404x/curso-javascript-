/*

BOM -> o Browser Object Model, é uma API que serve para acessar os recursos do navegador:

hora, histórico, etc.

// Window

metodos -> https://www.w3schools.com/js/js_window.asp


*/


function abrirPagina(url) {
    window.open('http://' + url)
}
function imprimirPagina() {
    window.print()
}