document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  let newTaskInput=document.getElementById("new-task-description").value;
  taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
  let li = document.createElement("li");
  let button=document.createElement("button");
  document.getElementById("tasks").appendChild(li).innerHTML=newTaskInput
  document.getElementById("tasks").appendChild(button).innerHTML="X";
  });
  newTaskInput.addEventListener("click", (e) => {
        e.preventDefault();
    if (e.target.nodeName === "BUTTON") {
     li.remove();
     button.remove();
      
 //   taskList.deleteTask(e.target.dataset.description);
 //   renderApp();
    }
  });
 

})