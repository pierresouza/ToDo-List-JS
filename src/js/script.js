// const criarItem = () => {
//   const item = document.createElement("label");
//   item.classList.add("todo__item");
//   item.innerHTML = `
//   <input type="radio">
//   <div>teste de item 1</div>
//   <input type="button" value="X">
//   `;

//   document.getElementById("todoList").appendChild(item);
// };

function adicionar() {
  let text = document.getElementById("texto").value;

  let list = document.getElementById("lista").innerHTML;

  list += "<li> " + text + "</li>";

  document.getElementById("lista").innerHTML = list;
}
