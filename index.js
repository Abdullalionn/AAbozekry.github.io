function addTodo() {
  var todoInput = document.getElementById("todoInput");
  var todoList = document.getElementById("todoList");

  if (todoInput.value.trim() === "") {
    return;
  }

  var li = document.createElement("li");
  li.textContent = todoInput.value;

  var div = document.createElement("div");
  div.className = "button-group";

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-ellipsis-v menu-icon"></i>';
  deleteButton.classList.add("actions");

  var dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown-content";
  var deleteOption = document.createElement("button");
  deleteOption.innerHTML = "Delete";
  deleteOption.onclick = function () {
    li.remove();
  };
  var disableOption = document.createElement("button");
  disableOption.innerHTML = "Disable";
  disableOption.onclick = function () {
    // Add your code for disabling here
    alert("Task disabled!");
  };

  dropdownContent.appendChild(deleteOption);
  dropdownContent.appendChild(disableOption);

  div.appendChild(deleteButton);
  div.appendChild(dropdownContent);

  li.appendChild(div);
  todoInput.value = "";
  todoList.appendChild(li);
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
// Get references to the button and pop-up widget
const toggleButton = document.getElementById("toggleButton");
const popupWidget = document.getElementById("popupWidget");
const closeButton = document.getElementById("closeButton");
var body = document.getElementById("body");

// Function to toggle the visibility of the pop-up widget
function togglePopup() {
  if (popupWidget.style.display === "none") {
    popupWidget.style.display = "block";
  } else {
    popupWidget.style.display = "none";
  }
}

// Add event listeners to the toggle button and close button
toggleButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", togglePopup);

var themebutton = document.getElementById("theme");

function themechange() {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    themebutton.textContent = "Light☀️";
  } else {
    body.classList.add("dark-theme");
    themebutton.textContent = "Dark🌙";
  }
}

themebutton.addEventListener("click", themechange);
