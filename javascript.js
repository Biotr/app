let baza = [

]

const root = document.getElementById('root');
const divActive = document.createElement("div");
const divNotActive = document.createElement("div");
const inputTask = document.createElement("input");
const inputDate = document.createElement("input");
const submit = document.createElement("button")
inputTask.setAttribute("type", "text")
inputDate.setAttribute("type", "date")
divActive.className = "divactive";
divNotActive.className = "divnotactive"
submit.innerHTML = "Dodaj"
submit.addEventListener("click", () => { handleAddTask(inputTask.value, inputDate.value) })
root.appendChild(inputTask);
root.appendChild(inputDate);
root.appendChild(submit)
root.appendChild(divActive);
root.appendChild(divNotActive);

const getDate = () => {
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let fullDate = [day < 10 ? "0" + day : day] + "." + [month + 1] + "." + year;
    return fullDate;
}
const handleAddTask = (taskText, taskDate) => {
    if (taskText != "" && taskDate != null) {
        handleClear();
        baza.push({ tekst: taskText, isActive: true, data: taskDate })
        inputTask.value = ""
        handleCreate();
    }
}

const handleRemoveTask = (id) => {
    handleClear();
    baza.splice(id, 1);
    handleCreate();
}
const handleTaskDone = (id) => {
    handleClear();

    let date = getDate();
    console.log(date);
    const newdb = baza.map(element => {

        if (id == element || element.isActive == false) {
            return ({
                tekst: element.tekst,
                isActive: false,
                data: date
            })
        }
        else {
            return ({
                tekst: element.tekst,
                isActive: true,
                data: element.data
            })
        }
    })
    baza = newdb
    handleCreate();
}

const handleCreate = () => {
    baza.forEach(elemDB => {
        const p = document.createElement("p")
        const button = document.createElement("BUTTON")
        const button2 = document.createElement("BUTTON")

        button2.innerHTML = "zrobione";
        button.innerHTML = "X";
        button.addEventListener('click', () => { handleRemoveTask(baza.indexOf(elemDB)) })
        button2.addEventListener('click', () => { handleTaskDone(elemDB) })

        p.classList.add((elemDB.isActive) ? "active" : "notactive");
        if (elemDB.isActive == true) {
            p.innerHTML = elemDB.tekst + "</i> | <b> Czas do: " + elemDB.data + "</b>";
            p.appendChild(button)
            p.appendChild(button2)
            divActive.appendChild(p);
        }
        else {
            p.innerHTML = elemDB.tekst + " <b>Zakończone:</b>" + elemDB.data;
            p.appendChild(button)
            divNotActive.appendChild(p);
        }

    })
}
const handleClear = () => {
    let element = document.getElementsByTagName("p"), index;
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

}