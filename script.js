const taskInput = document.getElementById("task-input"); // input for new task
const tasks = document.getElementById("tasks"); // tasks container ul
const addTaskBtn = document.getElementById("add-task-btn"); // obvious

// add task
function addTask(){
    if(taskInput.value === ''){
        return;
    }else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    saveData();
    taskInput.value = "";
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        event.preventDefault(); // Prevent form submission
        addTask();
    }
});

// tasks func
tasks.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");        
    }
    if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
    saveData();
}, false);


function saveData(){
    localStorage.setItem("data", tasks.innerHTML);
}

function showTasks(){
    tasks.innerHTML = localStorage.getItem("data");
}

showTasks();