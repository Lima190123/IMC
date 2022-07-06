function verificar () {
var altura = (document.getElementById('altura').value)/100
var peso = document.getElementById('peso').value
var res =document.getElementById ('res')


var imc= peso/altura**2
if(altura = '' || peso == '') {
    res.innerHTML = ('Faltam Dados!')
}
else if (imc < 18.5) {
    res.innerHTML= (`O seu IMC é ${imc.toFixed(2)}, você está abaixo do peso.`)
} else if (imc<24.9) {
    res.innerHTML= (`O seu IMC é ${imc.toFixed(2)}, o seu IMC é adequado.`)
} else if (imc< 29.9) {
    res.innerHTML= (`O seu IMC é ${imc.toFixed(2)}, você está com sobrepeso.`)
}
else if (imc < 39.9) {
    res.innerHTML= (`O seu IMC é ${imc.toFixed(2)}, você está com obesidade.`)
}
else if (imc > 39.9) {
    res.innerHTML= (`O seu IMC é ${imc.toFixed(2)}, você está com obesidade mórbida.`)
}


}