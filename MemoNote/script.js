const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listcontainer");

document.getElementById("btn").addEventListener("click", addNote)
function addNote(){
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
