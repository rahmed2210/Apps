const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better.'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]

// Rendering Our Filtered Data

// setting up a filters objects to store the latest filters
const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    // Duplicate Notes (filtering) --clear div entirely when adding new notes
    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach(function (note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)


// ---
// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

// ID and Class elements
document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function( note) {
        note.remove()
    })
})

// text Input and Data Filtering
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})



/*
// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

// ID and Class elements
document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function( note) {
        note.remove()
    })
})

// text Input and Data Filtering
document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

*/