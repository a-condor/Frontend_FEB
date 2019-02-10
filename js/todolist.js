window.onload = function(){

var d = new Date();
document.querySelector("#date").innerHTML = d.toDateString();
var t = new Date();
document.querySelector("#time").innerHTML = d.toLocaleTimeString();

document.querySelector(".addtodo").addEventListener("click", function(){

var task = document.querySelector(".task").value;
var description = document.querySelector(".description").value;
var time = document.querySelector(".time").value;

if (task === ""){alert("Please enter a task!")}
else if (time === ""){alert("Please enter task's due time!")}
else {
    let newTask  = task + " | " + description + " | " + time;  
    let p = document.createElement("p");
    p.className = "list";
    p.innerHTML = newTask;
    document.body.appendChild(p);
}
})

document.querySelector("#addTask").addEventListener("click", function(){
    
})


}
