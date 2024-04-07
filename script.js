function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var todoList = document.getElementById("todoList");

  if (todoInput.value.trim() === "") {
    return;
  }

  var li = document.createElement("li");
  li.textContent = todoInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteButton);
  todoList.appendChild(li);

  todoInput.value = "";
}
document
  .getElementById("todoInput")
  .addEventListener("keypress", function (event) {
    // Check if Enter key is pressed
    if (event.key === "Enter") {
      // Log the text from the input to the console
      console.log(this.value);
      addTodo();
    }
  });
