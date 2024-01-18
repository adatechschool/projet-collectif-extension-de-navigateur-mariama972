
//FONCTION DE CHARGEMENT
window.addEventListener('load', () => {
    const form = document.querySelector("#new-note-form");
    const input = document.querySelector("#new-note-input");
    const list_el = document.querySelector("#notes");
    
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const note = input.value;

        if (!note) {
            alert("Entrez un message !");
            return;
        }

        const note_el = document.createElement("div");
        note_el.classList.add("note");

        const note_content_el = document.createElement("div");
        note_content_el.classList.add("contenu");
        

        note_el.appendChild(note_content_el);

        //CREATION DES NOTES EN MODE READ-ONLY
        const note_input_el = document.createElement("input");
        note_content_el.classList.add("text");
        note_input_el.type = "text";
        note_input_el.value = note;
        note_input_el.setAttribute("readonly", "readonly");
    
        note_content_el.appendChild(note_input_el);

        const note_actions_el = document.createElement("div");
        note_actions_el.classList.add("actions");

        //BOUTON MODIFIER
        const note_modifier_el = document.createElement("button");
        note_modifier_el.classList.add("Modifier");
        note_modifier_el.innerHTML = "Modifier";

        // BOUTON SUPPRIMER
        const note_supprimer_el = document.createElement("button");
        note_supprimer_el.classList.add("Supprimer");
        note_supprimer_el.innerHTML = "Supprimer";

        note_actions_el.appendChild(note_modifier_el);
        note_actions_el.appendChild(note_supprimer_el);

        note_el.appendChild(note_actions_el);
        list_el.appendChild(note_el);

        //REMET LA VALEUR DE L'INPUT A 0 QUAND NOTRE TEXTE EST ENTRE 
        input.value ="";

        //FONCTION QUI PERMET DE FAIRE DES MODIFICATIONS DE TEXTE AVEC LE BOUTON
        //PERMET DE PASSER DE READONLY A MODIFIER ET DE MODIFIER A ENREGISTRER
        note_modifier_el.addEventListener("click", () => {
            if (note_modifier_el.innerText.toLowerCase() == "modifier") {
                    note_input_el.removeAttribute("readonly");
                    note_input_el.focus();
                    note_modifier_el.innerText = "Enregistrer";
            } else {
                    note_input_el.setAttribute("readonly", "readonly");
                    note_modifier_el.innerText = "Modifier";
            }
        });

        //FONCTION DE SUPRESSION GRACE AU BOUTON
        note_supprimer_el.addEventListener("click", () => {
            list_el.removeChild(note_el);
        });
    });
});