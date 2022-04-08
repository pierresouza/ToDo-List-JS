const criarTarefa = (evento) => {
  evento.preventDefault();

  const lista = document.querySelector("[data-lista]");
  const input = document.querySelector("[data-input]");
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
  botaoConclui.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="6" cy="6" r="5.5" stroke="#CBCBCB"/>
  </svg>
  `;
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
  botaoDeleta.innerHTML = `
  <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="9" cy="8.99999" r="5.5" transform="rotate(45 9 8.99999)" stroke="#EB3D3D"/>
  <rect x="10.6971" y="6.73724" width="0.8" height="5.6" rx="0.4" transform="rotate(45 10.6971 6.73724)" fill="#EB3D3D"/>
  <rect x="6.73726" y="7.30292" width="0.8" height="5.6" rx="0.4" transform="rotate(-45 6.73726 7.30292)" fill="#EB3D3D"/>
  </svg>`;
  botaoDeleta.addEventListener("click", deletarTarefa);
  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;
  const tarefaCompleta = botaoDeleta.parentElement;

  tarefaCompleta.remove();
  return botaoDeleta;
};

const novaTarefa = document.querySelector("[data-button]");
novaTarefa.addEventListener("click", criarTarefa);
