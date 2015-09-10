var field = document.querySelector('#newitem');
var form = document.querySelector('form');
var todo = document.querySelector('#todolist');
var check = document.querySelector('#check');


form.addEventListener("submit", function(event){
    event.preventDefault();
    todo.innerHTML += '<li>' + field.value + '</li>';
    field.value = ''+ check;
    field.focus();

    }
)