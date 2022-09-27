const frutas = ["laranja", "limão", "uva"];

const fruta1 = document.getElementById("fruta-1")
fruta1.innerHTML = frutas[0]
console.log(fruta1.innerHTML)

const fruta2 = document.getElementById("fruta-2")
console.log(fruta2.innerHTML= frutas[1])

const fruta3 = document.getElementById("fruta-3")
console.log(fruta3.innerHTML = frutas[2])

let adicionarFruta = document.getElementById("texto")
adicionarFruta.value = "morango"

let fruta4 = document.getElementById("fruta-4")

adicionar = () => {
fruta4.innerHTML = adicionarFruta.value
}
