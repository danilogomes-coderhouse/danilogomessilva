let botaoSom = document.querySelector(".botao-som")
let video = document.querySelector(".video")
let botao = document.querySelector(".link-info")
let modal = document.querySelector(".modal")

botaoSom.addEventListener("click", ligarsom)

function ligarsom(){
    video.muted = false
}

botao.addEventListener("click", mostrarmodal)
modal.addEventListener("click", escondermodal)

function mostrarmodal(){
    modal.style.display = "block"
}

function escondermodal(){
    modal.style.display = "none"
}

window.addEventListener("load", tocaraudio)

function ligarsom(){
    Audio.apply()
}