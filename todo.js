const todoList=[{
    name:'',
    dueDate:''
}, {
    name:'',
    dueDate:'',
    }
];

renderTodoList();

function renderTodoList(){
    let todoListHtml='';

    for (let i=0;i< todoList.length;i++){
        const toDOObject = todoList[i];
        const name=toDOObject.name;
        const dueDate = toDOObject.dueDate;
        const html = `
            <p>
                 ${name} ${dueDate}
                <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
                ">Delete</button>
            </p>`
        todoListHtml += html;
    }

    document.querySelector('.displayList').innerHTML=todoListHtml;
}

function addTodo(){
    const inputElement =document.querySelector('.todoInput');
    const name=inputElement.value

    const dateInputElement = document.querySelector('.inputDate');
    const dueDate = dateInputElement.value;

    todoList.push({
        name:name,
        dueDate:dueDate,
    })
    inputElement.value='';
    renderTodoList();
}
