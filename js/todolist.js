window.onload = function(){

// current display date and time
var d = new Date();
document.querySelector("#date").innerHTML = d.toDateString();
var t = new Date();
document.querySelector("#time").innerHTML = d.toLocaleTimeString();

// basic page setting
var toAdd = document.querySelector("#add-list");
toAdd.style.display = "none";
var viewList = document.querySelector("#main-list");
viewList.style.display = "block"; 

// addition of new task
document.querySelector(".addtodo1").addEventListener("click", function(){

var task = document.querySelector(".task").value;
var description = document.querySelector(".description").value;
var date = document.querySelector(".time1").value;
var time = document.querySelector(".time2").value;

if (task === ""){alert("Please enter a task!")}
else if (time === ""){alert("Please enter task's due time!")}
else {
    let p = document.createElement("p");
    p.className = "list";
    document.querySelector("#todolist").appendChild(p);
    p.innerHTML ='<span class="check"><input class="checkers" onclick="mark()" type="checkbox" name="" id=""></span>'+ '<span class="titles">' + task + "  " + '</span>' + '<span class="descriptions">' + description + "  " + '</span>' + '<span class="dates">' + date + "  " + '</span>'  + '<span class="times">' + time + "  " + '</span>' + '<span class="deletes" onclick="deletes()">' + "  " + 'delete' + '</span>';

var toAdd = document.querySelector("#add-list");
toAdd.style.display = "none";

var viewList = document.querySelector("#main-list");
viewList.style.display = "block"; 
}
}) 

// returning to basic page 
document.querySelector(".addtodo2").addEventListener("click", function(){
    var toAdd = document.querySelector("#add-list");
    toAdd.style.display = "none";
    var viewList = document.querySelector("#main-list");
    viewList.style.display = "block";     
})

// creation of new task
document.querySelector("#addTask").addEventListener("click", function(){
    document.querySelector(".task").value = "";
    document.querySelector(".description").value = "";
    document.querySelector(".time1").value = "";
    document.querySelector(".time2").value = "";

    var viewList = document.querySelector("#main-list");
    viewList.style.display = "none"
    var toAdd = document.querySelector("#add-list");
    toAdd.style.display = "block";
})


}

// remove marked todos and show remainder
function relist() {
    var x = document.getElementsByClassName("checkers"); 
    for (var i = 0; i < x.length; i++){ 
        if(x[i].checked){
            x[i].parentElement.parentElement.classList.toggle("hide-show-list");
        } 
    };
}

// delete todo
function deletes(){
    // var del = document.querySelector(".deletes");
    // del.parentElement.remove();
var del = document.querySelector(".deletes");
for (var i = 0; i < del.length; i++){ 
    if(del[i].clicked){
        del.parentElement.remove();
    }
}
}

// mark todo
function mark(){
    // var lists = document.querySelector(".list");
    // lists.classList.toggle("checker");
    var x = document.getElementsByClassName("checkers"); 
    for (var i = 0; i < x.length; i++){ 
        if(x[i].checked){
            x[i].parentElement.parentElement.style.textDecoration = "line-through";
            x[i].parentElement.parentElement.style.opacity = 0.7;
        } else {
            x[i].parentElement.parentElement.style.textDecoration = "none";
            x[i].parentElement.parentElement.style.opacity = 1;
        }
    }
}