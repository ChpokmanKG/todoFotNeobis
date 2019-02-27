var count = 0;
(function(){
  var firstGreenButton = document.getElementById('firstGreenButton');
  var defeatButton = document.getElementById('defeat');
  var succesButton = document.getElementById('succes');

  var blackScreen = document.getElementById('black-screen');
  var modalBlock = document.getElementById('modal-block');
  var modalBlockBodys = document.getElementById('modal-content');

  var addButton = document.getElementById('addButton');
  var newTaskWrap = document.getElementById('new-task-wrap');
  var showTaskModal = document.getElementById('show-task');

  var taskTitle = document.getElementById('task-title');
  var taskDiscription = document.getElementById('task-discription');
  var modalHeader = document.getElementById('modal-header');

  var succesed = document.getElementById('succesed');
  var defeated = document.getElementById('defeated');
  var mainContent = document.getElementById('main-content');

  var toDo = document.getElementById('all');

  var activeElements = document.getElementsByClassName('activeTask');
  var succesElements = document.getElementsByClassName('inactiveTask');

  var taskName = [];
  var taskText = [];
  var succesArray = [];



    firstGreenButton.addEventListener('click',modalShow);
    blackScreen.addEventListener('click',modalShowReverse);
    addButton.addEventListener('click',addTask);
    document.addEventListener('click',show);

    function noUI(el){
      succesButton.style.display = `${el}`;
      defeatButton.style.display = `${el}`;
    }

    function show(e){
      var target = e.target;
      var attrName = target.getAttribute('taskname');
      if(attrName){
        showModalContent(attrName);
        modalShow();
      }
    }

    function showModalContent(el){
      newTaskWrap.classList.add('Inactive2');
      showTaskModal.classList.remove('Inactive2');

      taskTitle.innerHTML = `Задача: ${taskName[el]}`;
      taskDiscription.innerHTML = taskText[el];
      modalHeader.innerHTML = "Chpokman To-Do";

      succesTask(el);
    }

    function succesTask(el){
      succesButton.addEventListener('click',()=>{
        var succesBlock = document.getElementById(`Chpokman${el}`)
          succesBlock.className += ' Chpok';
            console.clear();
          var suc = succesBlock.getAttribute('taskname');
      modalShowReverse();
      succesTasks();
      });
    }

    function succesTasks() {
      var tasks = document.getElementsByClassName("Chpok");
      for(var i = 0; i < tasks.length; i++){
        tasks[i].style.background = "#455A64";
      }
    }


    function modalShow(){
      blackScreen.classList.remove('Inactive');
      setTimeout(() => {
        modalBlock.classList.remove('Inactive');
      },300);
      setTimeout(()=>{
        modalBlock.style.top = "6%";
      },350);
    }

    function modalShowReverse() {
      modalBlock.style.top = "3%";
      setTimeout(()=>{
        modalBlock.classList.add('Inactive');
      },100);
      setTimeout(()=>{
        blackScreen.classList.add('Inactive');
      },300);

      classCheck();

    }

    function classCheck() {
      if(newTaskWrap.className == 'Inactive2') {
        setTimeout(()=>{
          newTaskWrap.classList.remove('Inactive2');
        showTaskModal.classList.add('Inactive2');
        },300)
      }
      if(modalHeader.innerHTML == "Chpokman To-Do"){
        setTimeout(()=>{
          modalHeader.innerHTML = "Добавить новую задачу";
        },300);
      }
    }

    function addTask(){
      var taskH1 = document.getElementById('taskH1');
      var taskP = document.getElementById('taskP');

      taskName.push(taskH1.value);
      taskText.push(taskP.value);

      taskH1.value = "";
      taskP.value = "";

      count++;
      createNewElement(count,'activeTask');
      setTimeout(modalShowReverse,100);
    }

    function createNewElement(el,classs = ""){
      var div2 = document.createElement('div');
      var p = document.createElement('p');

      div2.className  = "main-wrap-block-body-block all-center " + classs;
      div2.title = `Нажмите что бы посмотреть описание задачи ${taskName[el - 1]}`;
      div2.setAttribute('taskname',el - 1);
      p.innerHTML = taskName[el - 1];
      p.setAttribute('taskname',el - 1);
      div2.id = `Chpokman${el - 1}`

      div2.appendChild(p);
      mainContent.appendChild(div2);
    }

    
})();