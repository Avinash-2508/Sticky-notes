function addNote() {
    let noteContainer = document.getElementById("noteContainer")
    let note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
        <button class="delete-btn" onclick="deleteNote(this)">X</button>
        <textarea placeholder="Write your note..."></textarea>
    `;
    noteContainer.appendChild(note)
    saveNotes()
}

function deleteNote(button) {
    button.parentElement.remove()
    saveNotes()
}

function saveNotes() {
    let notes = []
    document.querySelectorAll(".note textarea").forEach(textarea => {
        notes.push(textarea.value)
    })
    localStorage.setItem("stickyNotes", JSON.stringify(notes))
}

function loadNotes() {
    let notes = JSON.parse(localStorage.getItem("stickyNotes")) || [];
    notes.forEach(text => {
        let noteContainer = document.getElementById("noteContainer");
        let note = document.createElement("div")
        note.classList.add("note")
        note.innerHTML = `
            <button class="delete-btn" onclick="deleteNote(this)">X</button>
            <textarea placeholder="Write your note...">${text}</textarea>
        `;
        noteContainer.appendChild(note);
    });
}

window.onload = loadNotes;
