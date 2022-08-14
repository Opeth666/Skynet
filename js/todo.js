const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "todos"

let toDos = [];

function saveToDos(){
    // 셋아이템("키", 밸류)
    // 밸류값에 array인 toDos를 그대로 넣으면 a,b,c로 저장된다
    // toDos는 ['a','b'] 식이지만 저장될떄는 친절?하게 a, b로 저장됨
    // localStorage.setItem("todos", toDos);
    // 밸류값에 JSON.stringify로 toDos를 스트링화하면
    // toDos의 ['a','b']
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    
}

function deleteToDo(event) {
    const parentli = event.target.parentElement;
    toDos = toDos.filter((todo) => todo.id !== parseInt(parentli.id));
    console.log(parentli.id);
    parentli.remove();
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li)
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
    console.log(item);
}

const savedToDos = localStorage.getItem(TODOS_KEY)
if(savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

