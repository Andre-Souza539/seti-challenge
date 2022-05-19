console.log("Desafio Seti FrontEnd!");
/* Declaração das variáveis */
var counter = 1;
var obs = "";
var pedido = [];

// Funcao para colocar os itens selecionados na tela num array
function getPedido() {
  var pedidoLista = [];
  var check = document.querySelectorAll("input[type=checkbox]:checked");
  for (var i = 0; i < check.length; i++) {
    pedidoLista.push(check[i].value);
  }
  pedido = pedidoLista;
}

function verificaPedidoVazio(pedido){
  if(pedido.length == 0){
    alert("Selecione pelo menos 1 item")
    return true;
  }
}

//funcao para somar 1 valor ao contador
function som() {
  if (counter > 0) {
    counter++;
    console.log(counter);
    atualizaDisplay();
  } else {
    counter = 1;
    console.log(counter);
    atualizaDisplay();
  }
}

//funcao para subtrair 1 do contador
function sub() {
  if (counter > 1) {
    counter--;
    console.log(counter);
    atualizaDisplay();
  } else {
    counter = 1;
    console.log(counter);
    atualizaDisplay();
  }
}

//Funcao para atualizar o contador quando o valor é colocado manualmente na tela
function atualizaContador() {
  counter = parseInt(document.getElementById("qtd-display").value);
  atualizaDisplay();
  if (counter < 1) {
    counter = 1;
    atualizaDisplay();
  } else {
    if (isNaN(counter)) {
      counter = 1;
      atualizaDisplay();
    }
  }
}

/* funcao para atualizar o display de contagem */
function atualizaDisplay() {
  document.getElementById("qtd-display").value = counter;
}

// funcao para enviar o formulário, retorna um prompt.alert com as informações sobre o pedido: itens, quantidade e a observação
function enviar() {
  obs = document.getElementById("obs-text").value;
  console.log(obs);
  getPedido();
  if(verificaPedidoVazio(pedido)){
    
  }else {
    alert(
      "Seu Pedido Foi Realizado! Sua recomendação foi: " +
        obs +
        " A quantidade de códigos foram: " +
        counter +
        " Os itens foram: " +
        pedido.toString()
    );
  }
}
