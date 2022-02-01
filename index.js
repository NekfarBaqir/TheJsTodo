const addToDoBtn = document.querySelector("#TodoBtn");
const toDoInput = document.querySelector("#TodoInput");
const toDoList = document.querySelector("#TodoList");

addToDoBtn.addEventListener("click", (e) => {
  const inputValue = toDoInput.value;
  if (inputValue === "") {
    alert("No Empty todo my dear!");
  }
  const newToDo = document.createElement("li");
  const deleteBtn = document.createElement("button");
  // put the button inside the li
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("deleteBtn");
  newToDo.innerText = inputValue;
  newToDo.appendChild(deleteBtn);
  // give newToDo a class
  newToDo.classList.add("todoLi");
  toDoList.appendChild(newToDo);
});

const deleteButtons = document.querySelectorAll(".deleteBtn");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e, "here is the event");
    const li = e.target.parentNode;
    li.remove();
  });
});
