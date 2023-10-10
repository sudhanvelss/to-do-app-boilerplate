var inputdata = document.getElementById("input")
var addbutton = document.getElementById("button")
var todo = document.getElementById("todolist") 

var data = []

addbutton.addEventListener("click", addData);

function addData(){
    data.push(inputdata.value);
    console.log(data)

    inputdata.value = " "
    toShowData();
}

function toShowData(){
    todo.innerHTML = ""

    data.forEach(function(item, index){
        console.log(item)
        todo.innerHTML += `<li>${item}<a onclick="editItem(${index})">Edit</a> <a onclick="deleteItem(${index})">x| </a><li>`
    })
} 

function deleteItem(i){
    data.splice(i, 1)
    toShowData()
}
function editItem(index){
    var newValue = prompt("enter the new value")
    data.splice(index, 1 , newValue)
    toShowData();
}