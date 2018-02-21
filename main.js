//Getting buttons already in html
const addTodoButton = document.getElementById('addTodoButton');
const deleteAllTodos = document.getElementById('deleteAllTodos');

//Icons HTML
const deleteIcon = '<i class="fas fa-times"></i>';
const completeIcon = '<i class="fas fa-check"></i>';





function addNewTodo(value){
    var newLi = document.createElement('li');
    var newValue = value;
    var newTextNode = document.createTextNode(newValue);
    newLi.appendChild(newTextNode);

    //creating the delete button
    var deleteTodoButton = document.createElement('button');
    deleteTodoButton.classList.add('deleteTodoButton');
    deleteTodoButton.innerHTML = deleteIcon;
    //adding eventlistener
    deleteTodoButton.addEventListener('click', deleteOneTodo);

    //creating complete button
    var completeButton = document.createElement('button');
    completeButton.classList.add('complete')
    completeButton.innerHTML = completeIcon;

    newLi.appendChild(deleteTodoButton);
    newLi.appendChild(completeButton);

    document.getElementById('todoList').appendChild(newLi);
    //value put to empty string so input field is empty when user clicked on add button
    document.getElementById("addTodoInput").value = "";
}





//Delete functions
function deleteOneTodo(){
    var parentToRemove = this.parentNode;
    parentToRemoveFrom = parentToRemove.parentNode;

    parentToRemoveFrom.removeChild(parentToRemove);
}

//delete all todos

//delete one completed
//??better to make this function the same as -delete one todo- but with different parameters???



//TOGGLE, REMOVE, ADD CLASS FUNCTIONS FOR STYLE CHANGES



//ANIMATION TO "ALERT" USER THAT THEY MADE SOME CHANGES AND SO THE TRANSFORMATION LOOKS SMOOTH
//some animation when a todo is completed

//some animation/transition when new todo is added



//EVENTLISTENERS
//*TO MAKE*so user can't make the same todo twice, maybe ask
addTodoButton.addEventListener('click', function(){
    var addTodoInputValue = document.getElementById('addTodoInput').value;
    //so user cant add empty string. something more should happen though..?
    if(addTodoInputValue == ""){
    }
    else{
    addNewTodo(addTodoInputValue);}
});


//EXTRAS
/*
- want newTodo to be first or last???
- be able to put completed back in Todos.. or only delete?
*/
