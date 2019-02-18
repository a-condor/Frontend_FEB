window.onload = function(){

// current display date and time
var d = new Date();
document.querySelector("#date").innerHTML = d.toDateString();
var t = new Date();
document.querySelector("#time").innerHTML = t.toLocaleTimeString();

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
if(date === ""){ date = date} else {date = "(" + date + ")"}
var time = document.querySelector(".time2").value;

if (task === ""){alert("Please enter a task!")}
else if (time == ""){alert("Please enter task's due time!")}
else {
    let p = document.createElement("p");
    p.className = "list";
    document.querySelector("#todolist").appendChild(p);
    p.innerHTML = '<span class="check"><input class="checkers" onclick="mark()" type="checkbox"></span>'+ '<span class="titles">' + task + "  " + '</span>' + '<span class="descriptions">' + description + "  " + '</span>' + '<span class="times">' + time + "  " + '</span>' + '<span class="dates">' + date + "  " + '</span>'  + '<span class="deletes" onclick="deletion()">' + "  " + 'delete' + '<input  class="del" type="radio">' +'</span>';

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

// show an alert when the time is due
window.setInterval(function(){
    var rT = new Date();
    //date
    var yr = rT.getFullYear(); var mn = rT.getMonth()+1 ; 
    var d = rT.getDate();
    if(mn < 10){ mn = '0' + mn };  if(d < 10){ d = '0' + d };
    var realDate = "(" + yr + "-" + mn + "-" + d + ")";
    //time
    var h = rT.getHours(); var m = rT.getMinutes();
    if(m < 10){ m = '0' + m };
    var realTime = h + ":" + m;
    //
    var dueDate = document.getElementsByClassName("dates");

    for (i = 0 ; i < dueDate.length; i++){
       if(dueDate[i].innerText == ""){
            if(dueDate[i].parentElement.getElementsByClassName("times").item(0).innerText == realTime){
                alert("The time is" + " " + realTime + "." + " " + "You have a task to do :" + " " + dueDate[i].parentElement.getElementsByClassName("titles").item(0).innerText );
            } 
            // else { console.log(realTime) }
       } 
       else if(dueDate[i].innerText !== realDate){
        //    console.log("not today")
       }
       else if(dueDate[i].innerText == realDate){
            if(dueDate[i].parentElement.getElementsByClassName("times").item(0).innerText == realTime){
                alert("The time is" + " " + realTime + "." + " " + "You have a task to do :" + " " + dueDate[i].parentElement.getElementsByClassName("titles").item(0).innerText );
            } 
            // else { console.log(realTime) } 
       }
    }   
}, 60000)

// remove marked todos and show remainder
function relist() {
    var x = document.getElementsByClassName("checkers"); 
    for (var i = 0; i < x.length; i++){ 
        if(x[i].checked){
            x[i].parentElement.parentElement.classList.toggle("hide-show-list");
        } 
    };
}

// mark todo
function mark(){
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

// delete todo
function deletion(){
    var d = document.getElementsByClassName("del"); 
for (var i = 0; i < d.length; i++){ 
    if(d[i].checked){
        d[i].parentElement.parentElement.style.display = "none";
    }
};
}