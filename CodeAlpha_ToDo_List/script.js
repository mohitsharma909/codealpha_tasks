const inputt = document.querySelector('.textarea')
const buttont = document.querySelector('.buttoninput')
const listt = document.querySelector('.todolist')

function clickButton(e) {
    e.preventDefault()
    addTodo()
}

// adding todoList
function addTodo() {
    const itemall = document.createElement('div')
    itemall.classList.add('itemall')

    const item = document.createElement('p')
    item.classList.add('item')
    item.innerText = inputt.value
    itemall.appendChild(item)

    if (inputt.value === '') return

    const checkbutton = document.createElement("button")
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add("check-button")
    itemall.appendChild(checkbutton)

    const trashbutton = document.createElement("button")
    trashbutton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashbutton.classList.add("trash-button")
    itemall.appendChild(trashbutton)

    listt.appendChild(itemall)
    inputt.value = ''
}

// checking and delete todoList 
function okdel(e) {
    const item = e.target

    // check
    if (item.classList[0] === 'check-button') {
        const todolist = item.parentElement
        todolist.classList.toggle('checklist')
    }

    // delete
    if (item.classList[0] === 'trash-button') {
        const todolist = item.parentElement
        todolist.remove()
    }
}

buttont.addEventListener('click', clickButton)
listt.addEventListener('click', okdel)