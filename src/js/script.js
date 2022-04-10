var todoList = [{
    id: 1,
    status: true,
    description: "",
}]

function addNewItem() {
    var inputValue = document.getElementById(`insert`)
    console.log(`Adicionou`, inputValue.value)

    var listItems = document.getElementById(`list-items`)
    var li = document.createElement(`li`)
    var input = document.createElement(`input`)
    var text = document.createElement(`p`)
    var button = document.createElement(`button`)
    var img = document.createElement(`img`)



    input.setAttribute(`type`, `checkbox`)
    button.appendChild(img)

    text.innerHTML = inputValue
    li.appendChild(input)
    li.appendChild(text)
    li.appendChild(button)

    listItems.appendChild(li)

    todoList.push({
        id: Math.random(),
        status: false,
        description: insertInput.value
    })

    console.log(todoList)

    insertInput.value = ''

}

function RemoveItem(id) {
    var newTodoList = todoList.filter(item => item.id != id)
    console.log(`removeu`, id)



}