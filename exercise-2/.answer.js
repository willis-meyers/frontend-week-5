
var addTodoItem = (function () {

  var count = 0;

  function addTodoItemInner (event) {
    event.preventDefault(); // necessary to prevent the submitting of a form
    var todolist    = document.getElementById("todolist");
    var item        = document.getElementById("item");
    var li          = document.createElement("li");

    // Step 1
    li.id = "item-" + count;
    count++;

    var label       = document.createElement("label");
    var checkbox    = document.createElement("input");
    checkbox.type   = "checkbox";

    // Step 2
    checkbox.addEventListener("change", function(event){
      var cb = event.target;
      // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
      var li = cb.closest("li")
      if(cb.checked){

        li.className = "done";
        console.log(li.id)
      } else {
        li.className = "";
      }
    })

    label.appendChild(checkbox)
    label.appendChild(document.createTextNode(item.value));
    li.appendChild(label)

    // BONUS 2
    deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function(event){
      var btn = event.target;
      var li = btn.closest("li");

      // http://stackoverflow.com/questions/3387427/remove-element-by-id
      li.parentNode.removeChild(li);
    })
    li.appendChild(deleteButton);



    todolist.appendChild(li);
    item.value = "";
  }
  return addTodoItemInner;
})();

form = document.getElementById("the-form");
form.addEventListener("submit", addTodoItem);


// BONUS 1

buttonShowDoneOnly     = document.getElementById("show-done-only")
buttonShowNotDoneOnly  = document.getElementById("show-not-done-only")
buttonShowAll          = document.getElementById("show-all")


function hideAllLis(){
  var lis = document.getElementsByTagName("li");
  var li;
  for(var i = 0; i < lis.length; i++){
    li = lis[i];
    li.style.display = "none";
  }
}

function showAllLis(){
  var lis = document.getElementsByTagName("li");
  var li;
  for(var i = 0; i < lis.length; i++){
    li = lis[i];
    li.style.display = "block";
  }
}



buttonShowDoneOnly.addEventListener("click", function(){
  hideAllLis();
  var doneLis = document.getElementsByClassName("done");
  for(var i = 0; i < doneLis.length; i++){
    doneLis[i].style.display = "block";
  }
});

buttonShowNotDoneOnly.addEventListener("click", function(){
  showAllLis();
  var doneLis = document.getElementsByClassName("done");
  for(var i = 0; i < doneLis.length; i++){
    doneLis[i].style.display = "none";
  }
});

buttonShowAll.addEventListener("click", showAllLis);

