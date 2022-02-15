// Selectors
const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const todoFilter = document.querySelector('.todo-filter');

// Event Listner
todoBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', Buttons);
todoFilter.addEventListener('click', TodoFilter);

// functions
function addTodo(event){
    // alert("hi");
    // console.log("hello world")
    event.preventDefault();
    //todoDiv
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

// create list item
const todoItem = document.createElement('li');
todoItem.innerText = todoInput.value;
todoItem.classList.add("todo-item")
todoDiv.appendChild(todoItem);

//complete Button
const completedBtn = document.createElement('button');
completedBtn.innerHTML = '<i class = "fas fa-check"></i>'
completedBtn.classList.add('completed-Btn')
todoDiv.appendChild(completedBtn);
//trash Button
const trashBtn = document.createElement('button');
trashBtn.innerHTML = '<i class = "fas fa-trash"></i>'
trashBtn.classList.add('trash-Btn')
todoDiv.appendChild(trashBtn);

// append to todoList
todoList.appendChild(todoDiv);

// clear value
todoInput.value="";
}

function Buttons(e){
    const item = e.target;

    // Delete Button
    if(item.classList[0] === 'trash-Btn'){
        const todo = item.parentElement;
        todo.classList.toggle("delete");
        // todo.remove();
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }
    // Check Button
    if(item.classList[0] === 'completed-Btn'){
        const todo = item.parentElement;
        todo.classList.toggle("finished");
    }
}


function TodoFilter(e){
    const todos = todoList.childNodes;
    todos.forEach(function (myList) { 
        const mStyle = myList.style;  
        if(mStyle != undefined && mStyle != null){
            switch (e.target.value) {
                case "a":
                    mStyle.display = "flex";
                    break;
                case "b":
                    if (myList.classList.contains('finished')) {
                        mStyle.display = 'flex';
                    } else {
                        mStyle.display = "none";
                    }
                    break;
                case "c":
                    if (myList.classList.contains('finished')){
                        mStyle.display = 'none';
                    }
                    else{
                        mStyle.display = "flex";
                    }
                    break;
            }
        }
    });
}