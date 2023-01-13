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
                
                let todoRow = document.createElement('div');
                todoRow.classList.add('todo-row');

                let todo = document.createElement('div');
                todo.innerHTML = todoInput.value;
                todo.classList.add('todo');

                let icon = document.createElement('div');
                icon.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
                icon.classList.add('icon');

                todoRow.appendChild(todo);
                todoRow.appendChild(icon);
                todoContainer.appendChild(todoRow);

            }
        }
    });
});



