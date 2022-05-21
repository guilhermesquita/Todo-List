let newTodo = document.getElementById('new-todo')
let todoNew = document.getElementById('todonew')

let data = [
    {'tarefa': 'Estudar'}
]

function colorChange(){
    newTodo.style.background = "#151515";
    todoNew.style.background = "#151515";
}

function colorBack(){
    newTodo.style.background = "#1b1a1b";
    todoNew.style.background = "#1b1a1b";
}

const createItem = (tarefa, status='') => {
    const item = document.createElement('label');
    item.classList.add("todo-item");
    item.innerHTML = `<input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="X">`

    document.getElementById('todoList').appendChild(item)
}