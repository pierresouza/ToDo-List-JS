
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list")

//Event Listener
todoButton.addEventListener("click", addTodo)
todoList.addEventListener('click', deleteCheck)

//Functions

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault()
  // Tod
  const todoDiv = document.createElement('div')
  todoDiv.classList.add("todo")
  //CHECKED MARK BUTTON
  const completedButton = document.createElement('button')
  completedButton.innerHTML = '<input type="checkbox">'
  completedButton.classList.add('completed-btn')
  todoDiv.appendChild(completedButton)
  //Create LI
  const newTodo = document.createElement('li')
  newTodo.innerText = todoInput.value
  newTodo.classList.add('todo-item')
  todoDiv.appendChild(newTodo)
  //TRASH MARK BUTTON
  const trashbutton = document.createElement('button')
  trashbutton.innerHTML = '<img src="assets/remove.svg">'
  trashbutton.classList.add('trash-btn')
  todoDiv.appendChild(trashbutton)
  // append to list
  todoList.appendChild(todoDiv)
  //Clear Todo input value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // delete todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove()
  }
}