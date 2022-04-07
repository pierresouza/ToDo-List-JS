document.querySelector("#push").onclick = function () {
  if (document.querySelector("#input-container", input).value.length == 0) {
    alert("por favor adicione uma tarefa");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class="task">
    <span id="taskname">
      ${document.querySelector("#newtask input").value}
    </span>
    </div>`;
  }
};
