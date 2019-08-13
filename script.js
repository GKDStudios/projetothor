(function() {

  'use strict';

  var lastId = 0;
  var taskWrapper = document.getElementById("task_wrapper");
  var btnSave = document.getElementById("save_task");
  var removeIcon;
  var updateIcon;
  var taskList;

  // Initialize taskList 
  // Add event to save button
  // Render the list

  function init() {

    if (!!(window.localStorage.getItem('taskList'))) {
      taskList = JSON.parse(window.localStorage.getItem('taskList'));
    } else {
      taskList = [];
    }
    btnSave.addEventListener('click', saveTask);
    showList();
  }
  //End Init

  //CRUD task

  function showList() {

    if (!!taskList.length) {
      getLastTaskId();
      for (var item in taskList) {
        var task = taskList[item];
        addTaskToList(task);
      }
      syncEvents();
    }
    
  }

  function saveTask(event) {

    var task = {
      taskId: lastId,
      taskDes: document.getElementById("task_des").value,
      taskState: document.getElementById("task_state").value,
      taskHora: document.getElementById("task_hora").value,
      taskFeita: document.getElementById("task_feita").value,
    };
    taskList.push(task);
    syncTask();
    addTaskToList(task);
    syncEvents();
    lastId++;
  }

  function addTaskToList(task) {

    var removeIcon = document.createElement('span');
    var element = document.createElement('li');
    var updateIcon = document.createElement('span');

    removeIcon.innerHTML = "X ";
    removeIcon.className = "remove_item clickeable";
    removeIcon.setAttribute("title", "Remove");

    updateIcon.innerHTML = "U  ";
    updateIcon.className = "update_icon clickeable";
    updateIcon.setAttribute("title", "Update");


    element.appendChild(removeIcon);
    element.appendChild(updateIcon);
    element.setAttribute("id", task.taskId);
    element.innerHTML +='| ' + task.taskDes + ' | ';
    element.innerHTML += task.taskState + ' | ';
    element.innerHTML += task.taskHora + ' | ';
    element.innerHTML += task.taskFeita + ' | ';
    taskWrapper.appendChild(element);
  }

  function updateTask(event) {

    var taskTag = event.currentTarget.parentNode;
    var taskId = taskTag.id;
    var taskToUpdate = findTask(taskId).task;
    var pos = findTask(taskId).pos;
    if (!!taskToUpdate) {
      var des = prompt("Alterar tarefa", taskToUpdate.taskDes);
      var state = prompt("Alterar data", taskToUpdate.taskState);
      //var hora = prompt ("Alterar hora", taskToUpdate.taskHora);
      //var feita = prompt ("Informe se está feita", taskToUpdate.taskFeita);
      taskToUpdate.taskDes = des;
      taskToUpdate.taskState = state;
      //taskToUpdate.taskHora = hora; 
      //taskToUpdate.taskFeita = feita;
      taskList[pos] = taskToUpdate;
      taskTag.lastChild.textContent = taskToUpdate.taskDes;
      taskTag.lastChild.textContent = taskToUpdate.taskState;
      //taskTag.lastChild.textContent = taskToUpdate.taskHora;
      //taskTag.lastChild.textContent = taskToUpdate.taskFeita;
      syncTask();
    }
  }

  function removeTask(event) {

    var taskToRemove = event.currentTarget.parentNode;
    var taskId = taskToRemove.id;
    taskWrapper.removeChild(taskToRemove);
    taskList.forEach(function(value, i) {
      if (value.taskId == taskId) {
        taskList.splice(i, 1);
      }
    })

    syncTask();
  }

  // End CRUD


  //Common

  function syncTask() {

    window.localStorage.setItem('taskList', JSON.stringify(taskList));
    taskList = JSON.parse(window.localStorage.getItem('taskList'));
  }

  function getLastTaskId() {
    var lastTask = taskList[taskList.length - 1];
    lastId = lastTask.taskId + 1;
  }

  function syncEvents() {

    updateIcon = document.getElementsByClassName("update_icon");
    removeIcon = document.getElementsByClassName("remove_item");
    if (!!removeIcon.length) {
      for (var i = 0; i < removeIcon.length; i++) {
        removeIcon[i].addEventListener('click', removeTask);
      }
    }
    if (!!updateIcon.length) {
      for (var j = 0; j < updateIcon.length; j++) {
        updateIcon[j].addEventListener('click', updateTask);
      }
    }
  }

  function findTask(id) {

    var response = {
      task: '',
      pos: 0
    };
    taskList.forEach(function(value, i) {
      if (value.taskId == id) {
        response.task = value;
        response.pos = i;
      }
    });

    return response;
  }

  function verTarefas(){
    var btnVer = document.getElementById("btnVer");
    btnVer.addEventListener('click', vertask);
    window.localStorage.getItem()
  }

  //End Common


  init();


})();