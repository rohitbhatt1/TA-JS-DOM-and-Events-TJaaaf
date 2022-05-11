let task = document.querySelector('#task');
let list = document.querySelector('#todo_list');
let all = document.querySelector('#all_tasks');
let pending = document.querySelector('#pending_tasks');
let completed = document.querySelector('#completed_tasks');
let clear = document.querySelector('#clear_tasks');

let allTasks = [];

function createUI(arr = []) {
    list.innerHTML = ``;
    arr.map((todo)=>{      
       let id = todo.id;
        
        let li = document.createElement('li');
        let para = document.createElement('p');
        para.classList.add('flex');
        let checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.classList.add('check');
        checkbox.checked = todo.isCompleted;
        checkbox.addEventListener('change', ()=>handleChange(id))

        let todoTitle = document.createElement('span');
        todoTitle.innerText = todo.title;
        para.append(checkbox, todoTitle);
        let del = document.createElement('span');
        del.innerText = `❌`;   
        del.addEventListener('click', ()=>handleDelete(id))
        
        li.append(para,del);
        li.classList.add('todo')   

        list.append(li); 
    })
}

function  addTask(event){
if(event.keyCode === 13 && event.target.value !== ""){
    let todo = {};
    todo.id= Date.now();
    todo.title = event.target.value;
    todo.isCompleted = false;
    allTasks.push(todo);
    createUI(allTasks);
    event.target.value='';
}
}

function handleChange(id){
    let ind = allTasks.findIndex((elem)=>{
        return elem.id === id;
    })
   allTasks[ind].isCompleted = !allTasks[ind].isCompleted;
    createUI(allTasks);
}

function handleDelete(id){
    let ind = allTasks.findIndex((elem)=>{
        return elem.id === id;
    })
    allTasks.splice(ind, 1);
    createUI(allTasks);
}

function allTasksList() {
 createUI(allTasks);
}

function pendingList(){
    let newArr = allTasks.filter(task=>{
        return task.isCompleted === false;
    })
    createUI(newArr);
}

function completedList(){
    let newArr = allTasks.filter(task=>{
        return task.isCompleted === true;
    })
    createUI(newArr);
}

function clearList(){
   allTasks.length = 0;
   createUI(allTasks);
}

task.addEventListener('keyup' , addTask);
all.addEventListener("click", ()=>allTasksList())
pending.addEventListener("click", ()=>pendingList())
completed.addEventListener("click", ()=>completedList())
clear.addEventListener("click", ()=>clearList())

createUI(allTasks);