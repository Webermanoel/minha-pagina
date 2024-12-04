let itensDaLista = [];
let limiteItens = 10;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Bem-vindo ao programa de cadastro de itens');

function salvarItens(){
  let itensCadastrados = document.querySelector('input').value;

  if(itensCadastrados <= 10){
    exibirTextoNaTela('H1', 'Deseja salvar os itens?')
  }

  }

  function limparCampo() {
    chute = document.querySelector('input');
    chute.itensCadastrados = 10;
}

function reiniciarLista(){

}

function mostrarLista(){

}
