//Button for making new todo
const newTodoButton = document.getElementById('newTodoButton');

//Buttons for deleting todos
const deleteAllTodos = document.getElementById('deleteAllTodos');
const deleteTodo = document.getElementById('deleteTodo');

//Button for deleting completed todos
const deleteCompleted = document.getElementById('deleteCompleted');

//ADD FUNCTIONS
//add new todo
function addNewTodo(){
    newTodoInput.value
    var newLi = document.createElement('li');
    var newTodoInputValue = document.getElementById('newTodoInput').value;
    var newTextNode = document.createTextNode(newTodoInputValue);
    newLi.appendChild(newTextNode);
    document.getElementById('todoList').appendChild(newLi);
}

//check if new todo is already existing


//DELETE FUNCTIONS
//delete one todo

//delete all todos

//delete one completed
//??better to make this function the same as -delete one todo- but with different parameters???



//TOGGLE, REMOVE, ADD CLASS FUNCTIONS



//ANIMATION
//some animation when a todo is completed

//some animation/transition when new todo is added



//EVENTLISTENERS
newTodoButton.addEventListener('click', addNewTodo);
