document.addEventListener("DOMContentLoaded", function () {
	var newTaskInput = document.querySelector("#newtask input[type='text']");
	var addButton = document.querySelector("#newtask button");
	var tasksContainer = document.querySelector("#tasks");
  
	addButton.addEventListener("click", function () {
	  var taskText = newTaskInput.value;
	  if (taskText.trim() !== "") {
		var taskElement = document.createElement("div");
		taskElement.classList.add("task");
		taskElement.innerHTML = `
		  <span>${taskText}</span>
		  <button class="delete">Delete</button>
		`;
		tasksContainer.appendChild(taskElement);
		newTaskInput.value = "";
	  }
	});
  
	tasksContainer.addEventListener("click", function (event) {
	  if (event.target.classList.contains("task")) {
		event.target.classList.toggle("completed");
	  } else if (event.target.classList.contains("delete")) {
		var taskElement = event.target.closest(".task");
		taskElement.remove();
	  }
	});
  });
  
  
  
  
  
  