const criarTarefa = (evento) => {
  console.log(criarTarefa);
  evento.preventDefault();

  const lista = document.querySelector("#data-lista");
  const input = document.querySelector("#data-input");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`;
  console.log(valor);

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);
  input.value = "";
};

const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "Concluir";
  botaoConclui.addEventListener("click", concluirTarefa);
  return botaoConclui;
};

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaCompleta = botaoConclui.parentElement;

  tarefaCompleta.classList.toggle("done");
};

const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");
  botaoDeleta.innerText = "deletar";
  botaoDeleta.addEventListener("click", deletarTarefa);
  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;
  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.remove();
  return botaoDeleta;
};

const novaTarefa = document.querySelector("#data-button");
novaTarefa.addEventListener("click", criarTarefa);
