const notes = getSavedNotes()

// Rendering Our Filtered Data
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    // want to push the new item on to the notes array
    notes.push({
        id: id,
        title: '',
        body: ''
    }) 
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)

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
