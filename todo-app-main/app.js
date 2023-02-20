//take userinput
//validate form
//store data in array
//display data in UI
//delete data
//check data complete
//edit data
//display completed data
//display uncompleted data
//clear all data data

//let tasks = [];
const body = document.body;
const img = document.querySelector(".image");
const createTaskDiv = document.querySelector(".createTask");
const addTaskBtn = document.querySelector(".addTaskBtn");
const tasksDiv = document.querySelector(".tasks");
const task = document.querySelector(".newTask");
const activeBtn = document.querySelector(".active");
const completeTasksBtb = document.querySelector(".completed");
const clearCompleted = document.querySelector(".clearAll");
const themeIcon = document.querySelector(".themeIcon");
const logo = document.querySelector(".logo");
const footer = document.querySelector(".footer");
const newTaskCheck = document.querySelector(".check");
const container = document.querySelector(".container");

let tasks = [];
let taskObj = {};
addTaskBtn.addEventListener("click", () => {
  taskObj = {
    id: Math.floor(Math.random() * 1000),
    task: task.value,
    isComplete: false,
  };

  tasks.push(taskObj);

  console.log(tasks);

  displayTask(tasks);
  resetForm();
});

const displayTask = (...tasks) => {
  tasksDiv.innerHTML += `
         <div class="createTask">
        <input onClick="checkTask(this)" type="checkbox" name="" class="check" check-id=${taskObj.id}>
        <p class="newTask">${taskObj.task}</p>
        <button onClick="editBtn(this)" type="button" class="editTaskBtn" btn-id=${taskObj.id}>EDIT</button>
      </div>
    `;
};

const resetForm = () => {
  task.value = "";
};

const editBtn = (e) => {
  let selectedTask = e.parentElement; //parent element
  task.value = selectedTask.children[1].innerHTML;
  console.log(task);
  e.parentElement.remove();
  //let deleteButtons = document.querySelectorAll(".deleteTaskBtn");

  //   deleteButtons.forEach((button) => {
  //     button.addEventListener("click", (e) => {
  //       let deleteId = button.getAttribute("btn-id");

  //       console.log(deleteId);

  //       //compare the delete btn id and the task id
  //       tasks.forEach((task, index) => {
  //         // console.log(`Task id ${task.id}`);
  //         if (task.id == deleteId) {
  //             task.parentElement.remove;
  //         }

  //       });
  //     });
  //   });
};

//check task complete task 
const checkTask = (e) => {
  const checkBtns = document.querySelectorAll(".check");
  checkBtns.forEach((check) => {
    check.addEventListener("click", (e) => {
      const id = check.getAttribute("check-id");
      console.log(id);

      tasks.forEach((task) => {
        if (id == task.id) {
          if (check.checked) {
            task.isComplete = true;
            console.log(task.isComplete);
            const pr = e.parentElement;
            console.log(pr);
          } else if (!check.checked) {
            task.isComplete = false;
            console.log(task.isComplete);
          }
          }
      });

      //   tasks.forEach((task) => {
      //     if (task.id == id) {
      //       if (task.completed) {
      //         task.completed = false;
      //       } else if (!task.completed) {
      //           task.completed = true;
      //           console.log('task completed');
      //       }
      //     }
      //   });
    });
  });

  const id = e.getAttribute("check-id");

  // const parent = e.parentElement;
  // parent.style.textDecoration="line-through"
  // console.log(id);
  // console.log(parent);
};

//display active tasks
function displayActive(e) {
    e.preventDefault();
  let activeTasks = tasks.filter((task) => {
      task.isComplete === false;
      tasksDiv.innerHTML = `
         <div class="createTask">
        <input onClick="checkTask(this)" type="checkbox" name="" class="check" check-id=${taskObj.id}>
        <p class="newTask">${taskObj.task}</p>
        <button onClick="editBtn(this)" type="button" class="editTaskBtn" btn-id=${taskObj.id}>EDIT</button>
      </div>
      `
    console.log(task);
  });
    
};

activeBtn.addEventListener("click", displayActive);

const clearChecked = () => {
      for (let i = 0; i < tasks.length; i++) {
      const taskItem = tasks[i];
      const checkbox = taskItem.getAttribute("check-id")
      if (checkbox.checked) {
        taskItem.remove();
      }
    }
};
clearCompleted.addEventListener("click", clearChecked);

const toggleTheme = () => {
  body.classList.toggle("lightTheme");
  task.classList.toggle("lightTheme");
  tasksDiv.classList.toggle("lightTheme");
  footer.classList.toggle("lightTheme");
  addTaskBtn.classList.toggle("lightTheme");
  newTaskCheck.classList.toggle("lightTheme");
  createTaskDiv.classList.toggle("lightTheme");
  tasksDiv.classList.toggle("lightTheme");

  console.log("light theme");
};

themeIcon.addEventListener("click", toggleTheme);
