let baza = [

]

const getDate = (liczba) => {
    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if (liczba == 2) {
        let fullDate = [day < 10 ? "0" + day : day] + "." + [month + 1] + "." + year;
        return fullDate;
    }
    else if (liczba == 1) {
        let fullDate = year + "-" + [month + 1] + "-" + [day < 10 ? "0" + day : day];
        return fullDate;
    }
}
inputDate.value = getDate(1);
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

    let date = getDate(2);
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
            p.innerHTML = elemDB.tekst + "</i> | <b> Ends on: " + elemDB.data + "</b>";
            p.appendChild(button)
            p.appendChild(button2)
            containerActive.appendChild(p);
        }
        else {
            p.innerHTML = elemDB.tekst + " | <b>Done: " + elemDB.data + " </b> ";
            p.appendChild(button)
            containerDone.appendChild(p);
        }

    })
}
const handleClear = () => {
    let element = document.getElementsByTagName("p"), index;
    for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
    }

}