const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// task type
type Task = {
  description: string,
  isCompleted: boolean
};

const tasks: Task[] = loadTasks() ? loadTasks() : [];

tasks.forEach(renderTask)

function loadTasks():Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks): [];
}

taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = formInput?.value.trim();
    if (taskDescription) {
        //console.log(taskDescription)

        const task: Task = {
            description: taskDescription,
            isCompleted: false
        }
        //add task
        addTask(task)
        //render task
        renderTask(task)
        //update localstorage
        updateStorage()

        formInput.value = ''
        return;
    } else {
        alert('Please enter a task description');
    }
    //alert('Please enter task description!...')
});

function addTask(task: Task): void{
    tasks.push(task)
    console.log(tasks);
}

function renderTask(task: Task):void {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;

    //checkbox
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.checked = task.isCompleted;
    taskElement.appendChild(taskCheckBox) //added

    //toggle checkbox
    taskCheckBox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    })
    
    taskListElement?.appendChild(taskElement);
}

function updateStorage():void{
    localStorage.setItem('tasks', JSON.stringify(tasks));
}








/* 
//resorted
const taskForm = document.querySelector<HTMLFormElement>('.form');
const formInput = document.querySelector<HTMLInputElement>('.form-input');
const taskListElement = document.querySelector<HTMLUListElement>('.list');

// task type
type Task = {
  description: string,
  isCompleted: boolean
};

const tasks: Task[] = loadTasks();

tasks.reverse().forEach(renderTask);

function loadTasks(): Task[] {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

taskForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskDescription = formInput?.value.trim();

    if (taskDescription) {
        const task: Task = {
            description: taskDescription,
            isCompleted: false
        }
        // add task
        addTask(task);
        // render task
        renderTask(task);
        // update localStorage
        updateStorage();

        formInput.value = '';
    } else {
        alert('Please enter a task description');
    }
});

function addTask(task: Task): void {
    tasks.unshift(task);
    //console.log(tasks);
}

function renderTask(task: Task): void {
    const taskElement = document.createElement('li');
    taskElement.textContent = task.description;

    // checkbox
    const taskCheckBox = document.createElement('input');
    taskCheckBox.type = 'checkbox';
    taskCheckBox.checked = task.isCompleted;
    taskElement.appendChild(taskCheckBox);

    // toggle checkbox
    taskCheckBox.addEventListener('change', () => {
        task.isCompleted = !task.isCompleted;
        updateStorage();
    });

    // insert at the beginning of the list
    if (taskListElement?.firstChild) {
        taskListElement.insertBefore(taskElement, taskListElement.firstChild);
    } else {
        taskListElement?.appendChild(taskElement);
    }
}

function updateStorage(): void {
    localStorage.setItem('tasks', JSON.stringify(tasks));
} 
*/