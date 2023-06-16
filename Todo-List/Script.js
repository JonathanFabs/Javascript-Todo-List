const inputbox = document.getElementById("input__Box");
const listContainer = document.getElementById("list__container");

//Add task function

function submitTask(){
    if(inputbox.value === ''){
        alert("Please enter a Task")
    }
    
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = '';
    Storage();
}


//deletes and checks element in todoContainer
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        Storage();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        Storage();
    }
    
},false);

function Storage(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTasks(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTasks();