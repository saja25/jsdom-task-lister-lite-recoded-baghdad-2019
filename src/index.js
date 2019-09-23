document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let taskForm = document.getElementById("create-task-form");
  let newTaskInput=document.getElementById("new-task-description").value;
  taskForm.addEventListener("submit",(e)=>{
    e.preventDefault();
  let li = document.createElement("li");
  document.getElementById("tasks").appendChild(li).innerHTML=newTaskInput ;
  });
 
})