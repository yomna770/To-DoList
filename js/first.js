var todoItem = document.getElementById("todoItem");
var add = document.getElementById("add");
var update = document.getElementById("update");
var todoContainer = document.getElementById("todoContainer");
var toDoShow = document.getElementById("todoShow");
var btn = document.getElementById("btn1")
var btnTwo = document.getElementById("btn2")
var currentindex = "";
if (JSON.parse(localStorage.getItem("items")) == null) {
    toDoList = [];
} else {

    toDoList = JSON.parse(localStorage.getItem("items"));
    displayitem();
}


add.onclick = function () {
    if (todoItem.value.trim() != 0) {
        additem();
        displayitem();
        clearList()
    }
}
btnUpdate.onclick = function () {
    if (todoItem.value.trim() != 0) {
        updatelist()
    }
}
function additem() {
    var item = {
        name: todoItem.value
    }
    toDoList.push(item)
    localStorage.setItem("items", JSON.stringify(toDoList))


    console.log("yes")
}

function displayitem() {
    box = "";
    for (var i = 0; i < toDoList.length; i++) {
        box += `<div class="item-todo " onclick="addupdatelist(${i})">
<p>${toDoList[i].name}</p>

<i class="fa-sharp fa-solid fa-trash icon  icon2" onclick="clearitem(${i})"></i>
</div>
`
    }

    todoContainer.innerHTML = box;
    toDoShow.innerHTML = `<p class="pGraph"> you have ${i} pending task</p>
    <button class="btn " onclick="clearAll()"> Clear All</button>
`


}
function addupdatelist(index) {
    currentindex = index;
    var item = toDoList[index];
    todoItem.value = item.name;

}
function updatelist() {

    var item = {
        name: todoItem.value
    }
    toDoList[currentindex].name = todoItem.value;
    localStorage.setItem("items", JSON.stringify(toDoList))
    displayitem()
    clearList()
}


function clearList() {
    todoItem.value = "";
}
function clearitem(index) {
    toDoList.splice(index, 1);
    displayitem();
    localStorage.setItem("items", JSON.stringify(toDoList))
}
function clearAll() {
    toDoList = [];
    displayitem();
    localStorage.setItem("items", JSON.stringify(toDoList))
}

