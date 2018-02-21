//Button for making new todo
const newTodoButton = document.getElementById('newTodoButton');

//Button for deleting all todos
const deleteAllTodos = document.getElementById('deleteAllTodos');

//ADD FUNCTIONS
//add new todo
function addNewTodo(){
    var newLi = document.createElement('li');
    var newTodoInputValue = document.getElementById('newTodoInput').value;
    var newTextNode = document.createTextNode(newTodoInputValue);
    newLi.appendChild(newTextNode);

    var newDeleteButton = document.createElement('button');
    newDeleteButton.setAttribute('id', 'deleteTodoButton');
    newDeleteButton.innerText = 'D';

    var newCompleteButton = document.createElement('button');
    newCompleteButton.setAttribute('id', 'completeButton');
    newCompleteButton.innerText = 'C';

    newLi.appendChild(newDeleteButton);
    newLi.appendChild(newCompleteButton);

    document.getElementById('todoList').appendChild(newLi);
    //value put to empty string so input field is empty when user clicked on add button
    document.getElementById("newTodoInput").value = "";
}


//DELETE FUNCTIONS
//delete one todo

//delete all todos

//delete one completed
//??better to make this function the same as -delete one todo- but with different parameters???



//TOGGLE, REMOVE, ADD CLASS FUNCTIONS FOR STYLE CHANGES



//ANIMATION TO "ALERT" USER THAT THEY MADE SOME CHANGES AND SO THE TRANSFORMATION LOOKS SMOOTH
//some animation when a todo is completed

//some animation/transition when new todo is added



//EVENTLISTENERS
//*TO MAKE*so user cant add empty string
//so user can't make the same todo twice, maybe ask
newTodoButton.addEventListener('click', addNewTodo);


//EXTRAS
/*
- want newTodo to be first or last???
- be able to put completed in Todos?
*/
