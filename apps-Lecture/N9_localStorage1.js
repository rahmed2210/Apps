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
const filters = {
    searchText: ''
}
/*
Saving Data in LocalStorage
CRUD Operations --> Stands for Create, Read, Update and delete

--> Create
localStorage.setItem('location', 'Paterson')

--> Read
console.log(localStorage.getItem('location'))

--> Delete
localStorage.removeItem('location')

Delete all --> of the data stored in local storage
localStorage.clear()
*/
/* local storage only supports strings  */

/*
const user = {
    name: 'rubal',
    age: 43
}
/* store this object in local storage = JSON -->JavaScript Object notation is going to be a 
way for us to convert our objects into a string */
/* Stringify - takes in object or array or what else and it returns a string so  *//*
const userJSON = JSON.stringify(user)
console.log(userJSON)
localStorage.setItem('user', userJSON)
*/

const userJSON = localStorage.getItem('user')
const user = JSON.parse(userJSON)
console.log(`${user.name} is ${user.age}`)


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

// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
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