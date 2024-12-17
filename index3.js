// tipos de variáveis:
let idade = 37
let nome = "Danilo"
let logado = false

// array e objetos
let ingredientes = ["fainha, agua, sal, corante, açucar"]
let personagem = {
    nome: "cleberson",
    nivel: 20,
    forca: 900,
    magia: 200,
    vida: 1000,
    mana: 200,

}

function somar(a, b){
    let resultado = a + b
    return resultado
}

let somar2 = (a, b) => {
    let resultado = a + b
    return resultado
}

let x = somar(15, 5)
let y = somar(2, 8)

console.log(x)
console.log(y)

// tipos de condicionais
// if sig: se
if (idade >= 18) { //um sinal de igual é atribuir ao valor, dois iguais está se comparando o valor 
    console.log("você é de maior de idade")
}

if (nome == "Danilo") {
    console.log("você é cristão")
} else {
    console.log("não é cristão")
}

//simbolos de comparação
// == :igual
// != :diferente
// > :maior
// < :menor
// >= :maior ou igual
// <= :menor ou igual

// tipo de loop
let lista = [10, 20, 30, 40]
//for sig: para
for(let item of lista)
    console.log("-numeros: " + item)

function avisar() {
    alert("Deus É Bom!")
}

let botao = document.querySelector("#botao")
// addEventListener sig : adicione, escutador de eventos
botao.addEventListener("mouseover", () => {//mouseover ao passar o mouse em vez de click
    avisar()
})