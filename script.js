document.addEventListener('DOMContentLoaded', loadTasks);
const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const task = {
        text: taskText,
        completed: false
    };

    addTaskToDOM(task);
    saveTask(task);
    taskInput.value = '';
}

function addTaskToDOM(task) {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
        li.classList.add('completed');
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => deleteTask(task, li));

    li.addEventListener('click', () => toggleTaskCompletion(task, li));
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}

function deleteTask(task, listItem) {
    taskList.removeChild(listItem);
    removeTaskFromStorage(task);
}

function toggleTaskCompletion(task, listItem) {
    task.completed = !task.completed;
    listItem.classList.toggle('completed');
    updateTaskInStorage(task);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function removeTaskFromStorage(taskToRemove) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskToRemove.text);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function updateTaskInStorage(updatedTask) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.map(task => task.text === updatedTask.text ? updatedTask : task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}
