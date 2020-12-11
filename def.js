const root = document.getElementById('root');
const divActive = document.createElement("div");
const divNotActive = document.createElement("div");
const inputTask = document.createElement("input");
const inputDate = document.createElement("input");
const submit = document.createElement("button")
const headingForActive = document.createElement("h2");
const headingForDone = document.createElement("h2");
const containerActive = document.createElement("div");
const containerDone = document.createElement("div");
headingForActive.innerHTML = "Tasks Active:"
headingForDone.innerHTML = "Tasks Done:"
inputTask.setAttribute("type", "text")
inputDate.setAttribute("type", "date")
divActive.className = "divactive";
divNotActive.className = "divnotactive"
submit.innerHTML = "Add"
containerActive.className = "containerActive"
containerDone.className = "containerDone"
submit.addEventListener("click", () => { handleAddTask(inputTask.value, inputDate.value) })
divActive.appendChild(headingForActive);
divNotActive.appendChild(headingForDone);
root.appendChild(inputTask);
root.appendChild(inputDate);
root.appendChild(submit)
root.appendChild(divActive);
root.appendChild(divNotActive);
divActive.appendChild(containerActive)
divNotActive.appendChild(containerDone)