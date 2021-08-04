const input = document.querySelector("#input");
const addButton = document.querySelector("#add-button");
const list = document.querySelector("#list");

addButton.addEventListener("click", addTodo);

function addTodo() {
  const newTodo = input.value;
  const newLi = document.createElement("li");
  const colorbutton = document.createElement("button");
  colorbutton.id = "button";

  newLi.innerText = newTodo;

  list.appendChild(newLi);

  colorbutton.innerText = "make me red";
  newLi.appendChild(colorbutton);

  colorbutton.addEventListener("click", function () {
    newLi.style.color = "red";
  });
}
