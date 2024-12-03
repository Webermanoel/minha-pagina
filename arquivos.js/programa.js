let itensDaLista = [];


function exibirTextoNaTela(){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    print('H1', 'Bem-vindo ao programa de cadastro de itens');
}

exibirTextoNaTela();

function salvarItens(){
  let itensCadastrados = document.querySelector('input').value;

  if(itensCadastrados <= 10){
    exibirTextoNaTela('H1', 'Deseja salvar os itens?')
  }

  }
