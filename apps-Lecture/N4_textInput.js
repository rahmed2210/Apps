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


// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was click'
})

// ID and Class elements
document.querySelector('#remove-all').addEventListener('click', function () {
    document.querySelectorAll('.note').forEach(function( note) {
        note.remove()
    })
})


//text Input and Data Filtering
document.querySelector('#search-text').addEventListener('input', function (e) {
    console.log(e.target.value)
})

// INPUT --> event is going to fire on every single character change
// using INPUT event with text based inputs, allowing to access that latest information

