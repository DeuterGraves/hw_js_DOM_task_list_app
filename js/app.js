// listen for the page to load
document.addEventListener("DOMContentLoaded", () =>{
  // check your head - maybe this will be a beastie boys themed app
  // console.log("js app loaded!");

  // create the form object in javascript and listen for the submit button to be clicked and runs the submit form function.
  const newItemForm = document.querySelector("#new-task-form");
  newItemForm.addEventListener("submit", handleNewTaskSubmit);

  // create a variable to name the delete all button and point it to the delete all button in the html
  const deleteAllButton =
  document.querySelector("#delete-all");
  //  listen for the user to click 'delete all' and then execute the code.
  deleteAllButton.addEventListener("click", handleDeleteAllClick);

});

//
const handleNewTaskSubmit = function(event){
  // keep the default html actions from happening - override with our code
  event.preventDefault();

  // create a new task item by running the code createTaskItem and pass it the content from the form submit (event.target)
  const taskItem = createTaskItem(event.target);
  // name the task list in html "task list" within the javascript - a way to point anything to the task-list id in the html script
  const taskList = document.querySelector("#task-list");
  // add the taskItem to the taskList
  taskList.appendChild(taskItem);

  // clear the form so the next task can be entered.
  event.target.reset();
};

// function to create a task item on the list of task items.
const createTaskItem = function(form){
  // create a list item for the task item.
  const taskItem = document.createElement("tr");
  // class list is given this class so that we can decorate it with the css.
  taskItem.classList.add("task-item");

  // this is where we actually start printing out the new data
  //  I want to merge the importance A,B,C or D with the item number to create a single string like A1 , B3, C10
  // create an html tag for the document and give it a variable name.
  const importance = document.createElement("td");
  // populate that tag with this content.
  importance.textContent = `${ form.importance.value }${ form.priority.value }`;
  // append this item to the parent element - add the task to the list
  taskItem.appendChild(importance);
  /*
  const priority = document.createElement("p");
  priority.textContent = form.priority.value;
  taskItem.appendChild(priority);*/

  // repeat for the rest of the data.
  const taskBody = document.createElement("td");
  taskBody.textContent = form.task.value;
  taskItem.appendChild(taskBody);

  // add a tick box for when the task is completed
  const tickBox = document.createElement("input");
  tickBox.type = "checkbox";
  // tickBox.createElement("input");
  // taskItem.appendChild(tickBox);

  const tdForTick = document.createElement("td");
  tdForTick.appendChild(tickBox);
  taskItem.appendChild(tdForTick);
  // now that it's all bundled up in our taskItem item - output it.
  return taskItem

};

// delete all
const handleDeleteAllClick = function(event){

  const taskList = document.querySelector("#task-list")
  // innerHTML gets or sets the content instide the HTML tags
  taskList.innerHTML = "";

  console.log("table deleted");

};
