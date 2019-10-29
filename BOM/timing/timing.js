/*

Timing -> Serve para exercutarmos uma ação logo após um valor
n de milissegundos.

setTimeout(<acao>, <tempo>) -> a ação ocorre após os n milissegundos e depois finaliza.
clearTimeout()
setInterval(<acao>, <tempo>) a ação ocorre após os n milissegundos e depois ele executa novamente, 
                                                                                        de forma continua.
clearInterval()


*/

let func_out = function() {
    document.write('<h1>setTimeout</h1>')
    document.write('OLA')

    }


let func_int = function(n) {
        document.write('<h1>setInterval</h1>')
        document.write('OLA' + '<br>')
        clearInterval(n)
        }

setTimeout(func_out,  2000)

var x = setInterval(func_int(x), 2000)