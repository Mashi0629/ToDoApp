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