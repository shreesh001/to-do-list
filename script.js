let input = document.querySelector("#inputbox");
const parentElement = document.querySelector("#list-container");

function addtask() {
    if (input.value.trim() === '') {
        alert("you must write something");
    }
    else {
        let newlist = document.createElement("li");
        newlist.textContent = input.value; // safer than innerHTML
        parentElement.appendChild(newlist);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        newlist.appendChild(span);
    }
    input.value = "";
    savedata();
}
let addbut = document.querySelector("button");
addbut.addEventListener("click", addtask);

let listitem=document.querySelector("li");
parentElement.addEventListener("click",function(e){
    if (e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if (e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",parentElement.innerHTML);
}
function showdata(){
    parentElement.innerHTML=localStorage.getItem("data");
}
showdata();
