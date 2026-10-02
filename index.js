function add(){
    let task = document.getElementById("todo")
    let ta = task.value.trim()
    if(ta === ""){
        alert("please enter a task!")
        return;
    }
    let ul = document.getElementById("task-list")
    let li = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "task-checkbox"
    let span = document.createElement("span")
    span.textContent = ta
    span.className = "task-text"
    let del = document.createElement("button")
    del.textContent="🗑️"
    del.className="delete-btn"
    
    
    ul.appendChild(li)
    li.appendChild(checkbox)
    li.appendChild(span)
    li.appendChild(del)
    del.addEventListener("click",function(){
        ul.removeChild(li)
    })
    checkbox.addEventListener("change",function(){
        if(checkbox.checked){
            li.classList.add("completed")
        } else {
            li.classList.remove("completed")
        }
    })
    

    task.value=""
    task.focus()
}
