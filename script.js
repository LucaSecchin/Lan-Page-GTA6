

let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

console.log(nome)
console.log(personagem)
console.log("E ai já deu like?")

function escolherPersonagem(nomePersonagem, imagemPersonagem, corPersonagem) {
    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = corPersonagem

}



