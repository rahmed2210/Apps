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

// Query Selector --> is typically used with IDs because there's just one query selector
// Query Selector All --> typically used with classes because that has multiple query