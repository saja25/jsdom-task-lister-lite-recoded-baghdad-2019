document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
  let li = document.createElement("li");
  let newTaskInput=document.getElementById("new-task-description").value;
  let button=document.createElement("button");
  document.getElementById("tasks").appendChild(li).innerHTML=newTaskInput
  document.getElementById("tasks").appendChild(button).innerHTML="X";
  });
  newTaskInput.addEventListener("click", (e) => {
    
    if (e.target.nodeName === "BUTTON") {
      
     li.remove();
     button.remove();
      
 //   taskList.deleteTask(e.target.dataset.description);
 //   renderApp();
    }
  });
 

})