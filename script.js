document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    
    taskContent.addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = '&times;';

    
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(taskItem);
    });

    
    taskItem.appendChild(taskContent);
    taskItem.appendChild(deleteBtn);

    
    taskList.appendChild(taskItem);
}
