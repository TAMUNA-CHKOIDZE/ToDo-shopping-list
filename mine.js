let title = document.querySelector(".title");
let inputText = document.querySelector(".inputText");
let toDoContainer = document.querySelector(".toDoContainer");
let buttonAdd = document.querySelector(".buttonAdd");
buttonAdd.addEventListener("click", function (){
   let paragraph = document.createElement("p");
   paragraph.classList.add("paragraph_styling")
   paragraph.innerHTML = inputText.value;       
   toDoContainer.appendChild(paragraph);
   inputText.value = "";
   paragraph.addEventListener("click", function(){
       paragraph.style.textDecoration = "line_through"
   })
   paragraph.addEventListener("dblclick", function(){
    paragraph.parentNode.removeChild(paragraph);
   })
})
