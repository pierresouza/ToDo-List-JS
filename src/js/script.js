const getBanco = () => JSON.parse(localStorage.getItem("todoList")) ?? [];
const setBanco = (banco) =>
  localStorage.setItem("todoList", JSON.stringify(banco));

const criarItem = (tarefa, status, indice) => {
  const item = document.createElement("div");
  item.classList.add("todo-item");
  item.innerHTML = `
      <input  type="checkbox"  ${status} data-indice = ${indice} >
      <div>${tarefa}</div>
      <button onClick="removerItem()"><img src="assets/remove.svg" /></button data-indice = ${indice}>
  `;
  document.getElementById("todoList").appendChild(item);
};

// const filter = getBanco.filter(() => {
//   if (filter === )
// })

const limparTarefas = () => {
  const todoList = document.getElementById("todoList");
  while (todoList.firstChild) {
    todoList.removeChild(todoList.lastChild);
  }
};

const inserirItem = (evento) => {
  const tecla = evento.key;
  const texto = evento.target.value;
  if (tecla === "Enter") {
    const banco = getBanco();
    banco.push({ tarefa: texto, status: "" });
    setBanco(banco);
    atualizarTela();

    evento.target.value = "";
  }
};

const atualizarTela = () => {
  limparTarefas();
  const banco = getBanco();
  banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
};

const atualizarItem = (indice) => {
  const banco = getBanco();
  banco[indice].status = banco[indice].status === "" ? "checked" : "";
  setBanco(banco);
  atualizarTela();
};

const clickItem = (evento) => {
  const elemento = evento.target;
  if (elemento.type === "button") {
    const indice = elemento.dataset.indice;
    removerItem(indice);
  } else if (elemento.type === "checkbox") {
    const indice = elemento.dataset.indice;
    atualizarItem(indice);
  }
};

const removerItem = (indice) => {
  const banco = getBanco();
  banco.splice(indice, 1);
  setBanco(banco);
  atualizarTela();
};

document.getElementById("newItem").addEventListener("keypress", inserirItem);
document.getElementById("todoList").addEventListener("click", clickItem);

atualizarTela();
