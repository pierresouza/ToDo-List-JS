function adicionar() {
  let text = document.getElementById("texto").value;

  let list = document.getElementById("lista").innerHTML;

  list += "<li> " + text + "</li>";

  document.getElementById("lista").innerHTML = list;
}
