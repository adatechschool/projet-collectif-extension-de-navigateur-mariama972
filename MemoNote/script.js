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
        input.type= "text";
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
let notesArray= localStorage.getItem("data");
console.log(notesArray);
    
function saveData(){
    let spans = document.querySelectorAll("#listcontainer span");
    let contentsArray = [];
    spans.forEach(function(span) {
        contentsArray.push(span.innerText);
    })
    localStorage.setItem("data", JSON.stringify(contentsArray));
     
}

function showNote(){
    let noteList = localStorage.getItem("data");
    console.log(JSON.parse(noteList));
    listContainer.innerHTML= JSON.parse(noteList);

}
showNote();

/* fonction qui permet de modifier la note, 
on peut en cliquant directement sur la note la modifier */
const listLi = document.querySelectorAll("#listcontainer li span ");
for (i=0; i<listLi.length; i++){
    listLi[i].addEventListener("click", change)
}
function change(event){
    event.target.classList.remove("show");
    event.target.classList.add("hide");
    event.target.nextSibling.classList.remove("hide");
    event.target.nextSibling.classList.add("show");
    

}
