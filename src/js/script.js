const todoList = document.querySelector(".todo-list");
// coletando botao de salvar um novo item
const buttonNewItem = document.getElementById('button-new-item');
//coletando a input text de novo item 
const inputNewItem = document.getElementById('input-new-item');
// Coletando a lista da TODO
const ulTodolist = document.getElementById('todo-list-container');

const filterTodo = document.getElementById('filter-todo');

// Funcao que atribui um status de deletado a um item da TODO
function checkItem(index) {
  // Coletando todos os itens do localStorage
  let listItens = localStorage.getItem("itens");
  // Separando os itens pelo caractere que utilizamos para criar um Array com os itens
  // Pois, o localStorage nao permite armazenar Arrays e Objetos
  listItens = listItens.split("|");
  // Coletando a informacao do item que desejamos alterar o status
  const item = listItens[index].split('/');
  // Alterando o status do item para removed
  listItens[index] = `${item[0]}/${item[1] == "completed"?"progress":"completed"}`;
  // Navegando com o forEach pelos elementos do array de itens
  listItens.forEach((item, index) => {
    // Caso esteja no primeiro item, ele limpa a variavel de itens, salvando uma String vazia
    if(index == 0) listItens = "";
    // Salvando os itens da todo em uma string separada com o nosso caractere reservado para itens
    listItens+=`${item}|`;
  });
  // Removendo a ultima barra que ficou no final da string
  listItens = listItens.substring(0, listItens.length-1);
  // Salvando os itens atualizados no localStorage
  localStorage.setItem('itens', listItens);
  // Carregando a todo na tela com os itens atualizados
  loadItems("completed");
}

// Funcao que atribui um status de deletado a um item da TODO
function deleteItem(index) {
  // Coletando todos os itens do localStorage
  let listItens = localStorage.getItem("itens");
  // Separando os itens pelo caractere que utilizamos para criar um Array com os itens
  // Pois, o localStorage nao permite armazenar Arrays e Objetos
  listItens = listItens.split("|");
  // Coletando a informacao do item que desejamos alterar o status
  const item = listItens[index].split('/');
  // Alterando o status do item para removed
  listItens[index] = `${item[0]}/removed`;
  // Navegando com o forEach pelos elementos do array de itens
  listItens.forEach((item, index) => {
    // Caso esteja no primeiro item, ele limpa a variavel de itens, salvando uma String vazia
    if(index == 0) listItens = "";
    // Salvando os itens da todo em uma string separada com o nosso caractere reservado para itens
    listItens+=`${item}|`;
  });
  // Removendo a ultima barra que ficou no final da string
  listItens = listItens.substring(0, listItens.length-1);
  // Salvando os itens atualizados no localStorage
  localStorage.setItem('itens', listItens);
  // Exibindo um alerta para informar que o item foi deletado com sucesso
  window.alert("Item deletado com sucesso!");
  // Carregando a todo na tela com os itens atualizados
  loadItems();
}

// Funcao que carrega a lista de itens do localStorage
function loadItems(status="progress"){
  // Variavel que armazena todos os itens da TODO
  let listItens = localStorage.getItem("itens");
  // Verificando se caso nao houver nenhum item cadastrado
  // Retornando nada caso nao tenha
  if(listItens == undefined) return;
  // Criando um array de itens utilizando um caractere reservado
  listItens = listItens.split("|");
  // Limpando a listagem de itens da tela da TODO
  ulTodolist.innerHTML = "";
  // Navegando por cada item usando forEach
  listItens.forEach((item, index) => {
    // Separando o valor e o status do item por um caractere reservado
    const data = item.split('/');
    // Verificando se o status esta diferente do que foi especificado para ser exibido
    if(data[1] != status) return;
    // Criando uma tag LI para o item da TODO
    const liTodoItem = document.createElement('li');
    // Criando uma tag Input para o item da TODO
    const checkTodoItem = document.createElement('input');
    // Atribuindo o tipo checkbox a input
    checkTodoItem.type = "checkbox";
    checkTodoItem.onclick = () => {checkItem(index)};
    checkTodoItem.checked = data[1] == "completed"?true:false;

    // Criando uma tag div para o item
    const divTodoItem = document.createElement('div');
    // Inserindo o nome do item dentro da div criada
    divTodoItem.innerHTML = data[0];

    // Criando um botao de delete para o item
    const buttonTodoItem = document.createElement('button');
    // Atribuindo a funcao para deletar o item no evento onClick do botao
    buttonTodoItem.onclick = () => {deleteItem(index)}
    // Escrevendo que dentro do botao teremos uma tag de imagem com o icone de deletar
    buttonTodoItem.innerHTML = `<img src="assets/remove.svg" alt="">`;
    // Inserindo o campo checkbox dentro da Li criada para o item
    liTodoItem.appendChild(checkTodoItem);
    // Inserindo o a div criada para o nome do item dentro da Li criada para o item
    liTodoItem.appendChild(divTodoItem);
    // Inserindo o botao de delete dentro da Li criada para o item
    liTodoItem.appendChild(buttonTodoItem);
    // Inserindo a LI criada na ul da pagina
    ulTodolist.appendChild(liTodoItem);
  });
}

//criar um novo item na todo
function createItem(event) {
  // criando uma string com um caracter separador (/) para nome e status do item 
  const newItem = `${inputNewItem.value}/progress`;
  // variável que armazena itens da todo 
  let listItem = localStorage.getItem("itens");
  //verificando se existem itens armazenados no localstorage
  if(listItem != undefined){
    // adicionando um novo item ao todo com um caracter separador (|) para separar os itens 
    listItem += `|${newItem}`;
    // atualizando os itens no localstorage
    localStorage.setItem("itens",listItem);
  }else{
    // Salvando o item no localStorage
    localStorage.setItem("itens",`${newItem}`);
  }
  // Chamando a funcao que carrega os itens da todo atualizados na listagem da tela
  loadItems();
  // Exibindo para o usuario que o item foi criado com sucesso
  window.alert("Item created succesfully!");
}

// Chamando a funcao que carrega os itens da todo no carregamento da tela
loadItems();

//Event Listener
buttonNewItem.addEventListener("click", createItem);
filterTodo.addEventListener("click", (e) => {loadItems(e.target.value)});