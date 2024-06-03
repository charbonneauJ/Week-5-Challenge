// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {

return Math.round(math.random() *99);

}

// Todo: create a function to create a task card
function createTaskCard(task) {



$("taskCard")


}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){
event.preventDefault()
    console.log("Form Submitted")
console.log("Payload:\n",event)
// step 1 - get form values to build task, check console log
document.getElementById("taskTitle").value
//document.getElementById("taskDate").value
document.getElementById("taskDesc").value
var taskTitle = document.getElementById('taskTitle').value;
//var taskDate = document.getElementById('taskDate').value;
var taskDate = document.getElementById('taskDesc').value;
console.log("Task Title:", taskTitle)
//console.log("Task Date:", taskDate)
console.log("Task Title:", taskDesc)
// step 2 - save task to local storage*
// step 3 - call create task card with task (line 13) createTaskCard(task)

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    const form = document.getElementById("addTask")
    form.addEventListener("submit", handleAddTask)

});
