const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listcontainer");

document.getElementById("btn").addEventListener("click", addNote)
function addNote(){
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose!");
    }
    else{
        let li = document.createElement("li");
        let input = document.createElement("input");
        input.classList.add("hide");    /* création d'une classe hide */
        let span = document.createElement("span"); 
        span.classList.add("show")    /* création d'une classe show  */
        span.innerHTML = inputBox.value;
        input.value= inputBox.value;
        li.appendChild(span);
        li.appendChild(input);
        listContainer.appendChild(li);
    }
    inputBox.value = "";
    saveData();
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showNote(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showNote();

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);






/* fonction qui permet de modifier la note, 
on peut en cliquant directement sur la note la modifier */
const listLi = document.querySelectorAll("#listcontainer li");
for (i=0; i<listLi.length; i++){
    listLi[i].addEventListener("click", change)
}
function change(event){

    alert ("ecriver")
}
