let itensDaLista = [];
const limiteDeItens = 10;

function exibirTextoNaTela(tag, texto) {
  const elemento = document.createElement(tag);
  elemento.innerText = texto;
}

exibirTextoNaTela('h1', 'Bem-vindo ao programa de cadastro de itens');


function salvarItens(){
  let itensCadastrados = document.querySelector('input').value;

  if(itensCadastrados == itensDaLista.length){
    exibirTextoNaTela('H1', 'Deseja salvar os itens?')
  }

  }

  function limparCampo() {
    chute = document.querySelector('input');
    chute.itensCadastrados = itensEscolhidos;
}

function reiniciarLista(){


}

function mostrarLista(){

}

salvarItens();

