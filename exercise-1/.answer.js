
function addTodoItem(event) {
  event.preventDefault();
  var todolist    = document.getElementById("todolist");
  var item        = document.getElementById("item");
  var li          = document.createElement("li");
  var label       = document.createElement("label");
  var checkbox    = document.createElement("input");
  checkbox.type   = "checkbox";
  label.appendChild(checkbox)
  label.appendChild(document.createTextNode(item.value));
  li.appendChild(label)
  todolist.appendChild(li);
  item.value = "";
}


button = document.getElementById("button");
// button.addEventListener("click", addTodoItem);

form = document.getElementById("the-form");
form.addEventListener("submit", addTodoItem);

