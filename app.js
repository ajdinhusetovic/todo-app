const addTodoButton = document.querySelector('#add-todo');
const todoContainer = document.querySelector('.todo-container');
const leftSide = document.querySelector('.left-side');


// event listener for add todo button
addTodoButton.addEventListener('click', () => {
    // hides the button, input shows
    addTodoButton.hidden = true;
    let todoInput = document.createElement('input');
    leftSide.appendChild(todoInput);
    // listens for enter key in input field
    todoInput.addEventListener('keyup', (e) => {
        if (todoInput.value === "") {
            alert("Please enter your todo");
        } else {
            if (e.keyCode === 13){
                let todo = document.createElement('li');
                todo.textContent = todoInput.value;
                todo.innerHTML = `${todo.textContent} <i class="fa-regular fa-trash-can"></i>`
                todo.classList.add('todo');
                todoContainer.appendChild(todo);
                // shows button, hides input
                addTodoButton.hidden = false;
                todoInput.hidden = true;
            }
        }
    });
});



