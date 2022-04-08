const criarTarefa = (evento) => {
  console.log(criarTarefa);
  evento.preventDefault();

  const lista = document.querySelector("#data-lista");
  const input = document.querySelector("#data-input");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = <p class="content">${valor}</p>;

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());
  lista.appendChild(tarefa);
  input.value = "";
};

//
