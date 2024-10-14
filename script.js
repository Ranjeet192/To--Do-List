document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input').value;
    const taskDate = document.getElementById('task-date').value;
    const taskTime = document.getElementById('task-time').value;

    if (taskInput === '' || taskDate === '' || taskTime === '') {
        alert('Please fill out all fields.');
        return;
    }

    const taskList = document.getElementById('task-list');

    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';

    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';
    taskInfo.innerHTML = `<p><strong>${taskInput}</strong></p><p>${taskDate} at ${taskTime}</p>`;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function () {
        taskList.removeChild(taskItem);
    };

    taskItem.appendChild(taskInfo);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Clear input fields after adding task
    document.getElementById('task-input').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-time').value = '';
}
