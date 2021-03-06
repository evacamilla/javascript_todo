
//Icons HTML
const deleteIcon = '<i class="far fa-trash-alt"></i>';
const completeIcon = '<i class="far fa-check-circle"></i>';

//check if there is any data stored since before using localStorage
if(localStorage.getItem('todoList')){
    //since its strinified make it as an object again using JSON.parse
    var data = JSON.parse(localStorage.getItem('todoList'));
    //loop out data to DOM
    loopOutTodoList();
} else {
    //else set arrays to be empty
    var data = {
    todoArray: [],
    completedArray: []
}};

//Getting buttons already in html
const addTodoButton = document.getElementById('addTodoButton');
const deleteAllTodosButton = document.getElementById('deleteAllTodos');






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
        data.todoArray.push(addTodoInputValue);
        addNewTodo(addTodoInputValue);
        }
});


deleteAllTodosButton.addEventListener('click', deleteAllTodos);



/* F u n c t i o n s */


function deleteAllTodos(){
    //before make user confirm that they want to delete for function to run
    if(confirm("Do you want to delete all your Todos? This is permanent")){
        //delete stored data
        localStorage.clear();

        //delete from both lists also from DOM
        while (todoList.hasChildNodes()) 
        { 
            todoList = document.getElementById('todoList'); 
            todoList.removeChild(todoList.firstChild);
        } 

        while (completedTodoList.hasChildNodes()) 
        { 
            completedTodoList = document.getElementById('completedTodoList'); 
            completedTodoList.removeChild(completedTodoList.firstChild);
        } 
    }
        
    //if user didnt confirm
    else {
        return;
        }
}



function addNewTodo(value, completed){
    var newDiv = document.createElement('div');
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

    newDiv.appendChild(deleteTodoButton);
    newDiv.appendChild(completeButton);
    
    newLi.appendChild(newDiv);

    if(completed === true){
        completeButton.classList.add('completed');
        list = document.getElementById('completedTodoList');
        //insertBefore so that the newest added ends up at the top
        list.insertBefore(newLi, list.childNodes[0]);
        } else {
                list = document.getElementById('todoList');
                list.insertBefore(newLi, list.childNodes[0]);
                }

    //value put to empty string so input field is empty when user clicked on add button
    document.getElementById("addTodoInput").value = "";
    
    updateDataObject();
}




function deleteOneTodo(){
    var parentToRemove = this.parentNode.parentNode;
    parentToRemoveFrom = parentToRemove.parentNode;
    valueToRemove = parentToRemove.innerText;
    console.log(parentToRemoveFrom);
    if (parentToRemoveFrom.id === 'todoList'){
        data.todoArray.splice(data.todoArray.indexOf(valueToRemove), 1);
    } else {
        data.completedArray.splice(data.completedArray.indexOf(valueToRemove), 1);
    }

    parentToRemoveFrom.removeChild(parentToRemove);
    
    updateDataObject();
}




function completeOrUncompleteTodo(){
    //to grab the todo we must reach the div element(parent of parent of the button clicked) 
    parentToMove = this.parentNode.parentNode;
    //and then that parent we want to move it from = the ul element
    parentToMoveFrom = parentToMove.parentNode;

    //storing the value from the data.array so we can delete and store it in data object
    var valueToMove = parentToMoveFrom.innerText;

        if(parentToMoveFrom.id === 'todoList')
            {
            var completedTodoList = document.getElementById('completedTodoList');

            //delete from todo array and push to completed in data object
            data.todoArray.splice(data.todoArray.indexOf(valueToMove), 1);
            data.completedArray.push(valueToMove);

            //add to top of ul li arrray in DOM
            completedTodoList.insertBefore(parentToMove, completedTodoList.childNodes[0]);

            //change styling
            this.classList.remove('uncompleted');
            this.classList.add('completed');
            } else {
                var todoList = document.getElementById('todoList');

                //delete from completed array and push to todo in data object
                data.completedArray.splice(data.completedArray.indexOf(valueToMove), 1);
                data.todoArray.push(valueToMove);

                //add to top of ul li array in DOM
                todoList.insertBefore(parentToMove, todoList.childNodes[0]);

                //change styling
                this.classList.remove('completed');
                this.classList.add('uncompleted');
                    }
            
    updateDataObject();
}


//store data in object so that user can come back and find the todos
//this should run whenever user adds, moves or delete and item
function updateDataObject(){
    //convert object into text because localStorage cannot store objects, only text.
    localStorage.setItem('todoList', JSON.stringify(data));
}


//this runs if something is stored in localStorage
function loopOutTodoList(){
    for(var i = 0; i < data.todoArray.length; i++){
        todoValue = data.todoArray[i];
        addNewTodo(todoValue, false);
    }

    for(var i = 0; i < data.completedArray.length; i++){
        completedValue = data.completedArray[i];
        addNewTodo(completedValue, true);
    }
}



//EXTRAS
/*
transition/animate when completed
press enter to add
DELETEBUTTON:
when deleting: check if there is any data
or hide/show button depending on if there is data
*/