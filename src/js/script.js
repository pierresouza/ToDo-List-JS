const todoList = document.querySelector(".todo-list");
// coletando botão de salvar um novo item
const buttonNewItem = document.getElementById('button-new-item');
//coletando a input text de novo item 
const inputNewItem = document.getElementById('input-new-item');

//criar um novo item na todo
function createItem(event) {
  // JSON con valores de status e nome dos campos
  const newItem = {
    name: inputNewItem.value,
    status: "progress"
  };
  // variável que armazena itens da todo 
  const listItem = localStorage.getItem("itens");
  //verificando se existem itens armazenados no localstorage
  if(listItem != undefined){
    // adicionando um novo item ao todo
    listItem.push(newItem);
    //atualizando os itens no localstorage
    localStorage.setItem("itens",listItem);
  }else{
    //criando um array com os itens da todo no localstorage 
    localStorage.setItem("itens",[newItem]); 
  }
}

function deleteItem(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
}

function loadItems(){
  const listItens = localStorage.getItem("itens");
  
}
//Event Listener
todoButton.addEventListener("click", createItem)
todoList.addEventListener('click', deleteItem)