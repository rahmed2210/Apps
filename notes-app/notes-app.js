let notes = []

// Rendering Our Filtered Data
const filters = {
    searchText: ''
}

// check for existing saved data
const notesJSON = localStorage.getItem('notes')

if (notesJSON !== null) {
    notes = JSON.parse(notes)
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Duplicate Notes (filtering) --clear div entirely when adding new notes
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')

        if (note.title.length > 0) {
            noteEl.textContent = note.title
        } else {
            noteEl.textContent = 'Unamed note'
        }
        
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    // want to push the new item on to the notes array
    notes.push({
        title: '',
        body: ''
    }) 
    // save the new notes array to local storage
    localStorage.setItem('notes', JSON.stringify(notes))
    // rerender things
    renderNotes(notes, filters)

})

// text Input and Data Filtering
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// Dropdowns menu
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})