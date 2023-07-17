const todoList=[];

function addTodo(){
    const inputElement =document.querySelector('.todoInput');
    const name=inputElement.value

    todoList.push(name)
    inputElement.value='';
}
