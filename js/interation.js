var btn_1 = document.getElementById('1')
var btn_2 = document.getElementById('2')
var resultado = document.querySelector('div.resultado')

function clicar() {
    var n1 = Number(btn_1.value)
    var n2 = Number(btn_2.value)
    var soma = n1 + n2
    resultado.innerHTML = soma
}