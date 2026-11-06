//alert("E ai, deu certo?") cria um alerta assim que vc entra na página

/*  logica de programação
        saber a sequecia que o computador/projeto quer q vc faça

    algoritmo 1
        receita de bolo, literalmente
        saber quem é quem
        saber q o botão foi clicado e o qual o botão
        trocar a foto e o nome do personagem

    algoritmo 2 

    1) pegar imagem do usuario
    2) envviar para a IA a imagem + o que eu quero que ela faça
    3) depois eu preciso receber a imagem da ia
    4) colocar a imagem do site

    variaveis
    é um pedacinho da memoria do computador que vc guarda alguma coisa

    HTML = document
    querSelector = selecionar algo no HTML
    ( ) = entre parenteses vc coloca o que vc quer selecionar
      quem? classe = .nomeDaClasse
      console.log = mostrar 
      innerHTML = coloca alguma coisa que tem lá no html
      src = colocar algo dentro do src da imagem

      1) Criar uma variável para guardar o que eu quero
      2) ir no html (com o document)
      3)selecionar que eu quero com o querySelector
      4) colocar entre parenteses quem eu quero selecionar (classe)

    funções
    é um pedacinho de codigo que só executa quando é chamado





*/

let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

console.log(nome)
console.log(personagem)
console.log("E ai já deu like?")

// esse parenteses ali na frente é uma capsula transformadora
function escolherPersonagem(nomePersonagem, imagemPersonagem, corPersonagem) {
    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = corPersonagem

}


/* 
function self() {
    nome.innerHTML = "CJ"
    personagem.src = "img/cj.png"

}
*/
