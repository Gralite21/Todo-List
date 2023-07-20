const todoList=[];

renderTodoList();

function renderTodoList(){
    let todoListHtml='';

    for (let i=0;i< todoList.length;i++){
        const toDO = todoList[i];
        const html = `<p>${toDO}</p>`
        todoListHtml += html;
    }
    console.log(todoListHtml);

    document.querySelector('.displayList').innerHTML=todoListHtml;
}

function addTodo(){
    const inputElement =document.querySelector('.todoInput');
    const name=inputElement.value

    todoList.push(name)
    console.log(todoList)
    inputElement.value='';
    renderTodoList();
}
