const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("listcontainer");

function addNote(){
    if(inputBox.value === ''){
        alert("Vous devez écrire quelque chose!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
    }
}
