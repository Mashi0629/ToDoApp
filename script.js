const taskForm =document.getElementById('task-form');
const taskInput=document.getElementById('task-input');
const taskList= document.getElementById('task-List');

//add task
taskForm.addEventListener('submit',function(event) {
event.preventDefault();
const taskText = taskInput.ariaValueMax.trim();
if (taskText==='')return;

const li= document.createElement('li');
li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
taskList.appendChild(li);
taskInput.value='';
});

//delete task
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      event.target.parentElement.remove();
    }
  });

  //add task to DOM
  function addTask(taskText){
    const li = document.createElement('li');
    li.innerHTML=`${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
  }

  //save task to local storage
  function saveTaskToLocalStorage(taskText){
    let tasks = getTasksFromLocalStorage();
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //remove tasks from local storage
  function removeTaskFromLocalStorage(taskText){
    let tasks = getTasksFromLocalStorage();
    tasks= tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  //get tasks from local storage
  function getTasksFromLocalStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  }

  //load tasks from local storage
  function loadTasks(){
    const tasks =getTasksFromLocalStorage();
    tasks.forEach(task => addTask(task));
  }


  taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = taskInput.value.trim();
    console.log('Task Input:', taskText); // Debugging line
    if (taskText === '') {
      console.error('No task entered');
      return;
    }
    addTask(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = '';
    console.log('Task added successfully'); // Debugging line
  });
  