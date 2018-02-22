//store data in object so that user can come back and find the todos
var data = {
    todo: [],
    completed: []
};


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
    completeButton.classList.add('uncompleted')
    completeButton.innerHTML = completeIcon;
    //adding eventlistener
    completeButton.addEventListener('click', completeOrUncompleteTodo);

    newLi.appendChild(deleteTodoButton);
    newLi.appendChild(completeButton);

    document.getElementById('todoList').appendChild(newLi);
    //value put to empty string so input field is empty when user clicked on add button
    document.getElementById("addTodoInput").value = "";
}





function deleteOneTodo(){
    var parentToRemove = this.parentNode;
    parentToRemoveFrom = parentToRemove.parentNode;

    parentToRemoveFrom.removeChild(parentToRemove);
}




function completeOrUncompleteTodo(){
    parentToMove = this.parentNode;
    parentToMoveFrom = parentToMove.parentNode;
    //storing the value from the data.array so we can delete and store it in data object
    var valueToMove = parentToMoveFrom.innerText;
        if(parentToMoveFrom.id === 'todoList')
            {
            //delete from todo array and push to completed in data object
            data.todo.splice(data.todo.indexOf(valueToMove, 1));
            data.completed.push(valueToMove);
            document.getElementById('completedTodoList').appendChild(parentToMove);
            this.classList.remove('uncompleted');
            this.classList.add('completed');
            } else {
                //delete from completed array and push to todo in data object
                data.completed.splice(data.completed.indexOf(valueToMove, 1));
                data.todo.push(valueToMove);
                document.getElementById('todoList').appendChild(parentToMove);
                this.classList.remove('completed');
                this.classList.add('uncompleted');
                    }
    console.log(data);
}


//EVENTLISTENERS
//*TO MAKE*so user can't make the same todo twice, maybe ask
addTodoButton.addEventListener('click', function(){
    var addTodoInputValue = document.getElementById('addTodoInput').value;
    //if user try to add empty string show messge
    if(addTodoInputValue == ""){
                            document.getElementById('emptyStringMessage').style.display = "block";
                                }
    else{
        document.getElementById('emptyStringMessage').style.display = "none";
        //stores added string in todo array so user can see it also after reloading the page
        data.todo.push(addTodoInputValue);
        addNewTodo(addTodoInputValue);
        }
});




//Delete all Todos





//TOGGLE, REMOVE, ADD CLASS FUNCTIONS FOR STYLE CHANGES





//ANIMATION TO "ALERT" USER THAT THEY MADE SOME CHANGES AND SO THE TRANSFORMATION LOOKS SMOOTH
//some animation when a todo is completed

//some animation/transition when new todo is added





/**TO DO **/
/*
new todo on top
erase all todos
*/


//EXTRAS
/*
transition/animate when completed
press enter to add
*/