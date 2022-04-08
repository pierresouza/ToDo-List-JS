function adicionar() {
  let text = document.getElementById("texto").value;
  let list = document.getElementById("lista").innerHTML;

  list += "<p>" + text + "</p>";
  document.getElementById("lista").innerHTML = list;
  document.getElementById("texto").value = null;
}
