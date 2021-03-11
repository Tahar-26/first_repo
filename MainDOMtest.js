var container = document.querySelector(".container");
var inputTodo = document.querySelector(".input-todo");
var btnAdd = document.querySelector(".btn-add");

btnAdd.addEventListener('click', function(){
    var row = document.createElement("div");
    row.classList.add("row");

    var col = document.createElement("div");
    col.classList.add("col");
    col.classList.add("d-flex");
    /* creating delete, done and text */ 
    var btnDelete = document.createElement("button");
    btnDelete.className =  "btn-delete btn-danger";
    btnDelete.innerHTML = "DELETE";
    var btnDone = document.createElement("button");
    btnDone.className = "btn-done btn-warning" ;
    btnDone.innerHTML = "DONE";
    var textInput = document.createElement("div");
    textInput.className = "text-todo";
    textInput.innerHTML = inputTodo.value; 
    /* appending element */ 
    col.appendChild(textInput);
    col.appendChild(btnDelete);
    col.appendChild(btnDone);
    row.append(col);
    container.appendChild(row); 
});

// ADD EVENT 
inputTodo.addEventListener("input", function (e){
        textInput.innerHTML = e.target.value;
        btnAdd.addEventListener('click',function(){
        col.appendChild(textInput);
        col.appendChild(btnDelete);
        col.appendChild(btnDone);
        row.append(col);
        container.appendChild(row);
        inputTodo.value = "";
        btnDelete.addEventListener('click', function(){
        row.remove();
      });
      bntDone.addEventListener('click',function(){
        inputTodo.classList.toggle('done-style');
         
      })
 });
});