const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoLane = document.getElementById("todo-lane");

const element = document.getElementById("t1");
element.onclick=function(){ this.parentElement.removeChild(this);}
const elemen = document.getElementById("t2");
elemen.onclick=function(){ this.parentElement.removeChild(this);}
const eleme = document.getElementById("t3");
eleme.onclick=function(){ this.parentElement.removeChild(this);}
const elem = document.getElementById("t4");
elem.onclick=function(){ this.parentElement.removeChild(this);}
const ele = document.getElementById("t5");
ele.onclick=function(){ this.parentElement.removeChild(this);}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("p");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;
  newTask.onclick=function(){
    this.parentElement.removeChild(this);
  };

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);
  input.value = "";
});
