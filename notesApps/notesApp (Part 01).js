
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Bangladesh',
}, {
    title: 'Habbits to work on',
    body: 'Exercise, eat a bit better',
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}]


// DOM -> Document Object Model


// Query and remove

const p = document.querySelector('p')
p.remove()


// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
    console.log(p.textContent)
    p.remove()
})



// .forEach -> allows us to iterate over each thing 
// (Function) -> we pass in our callback functions
// () { })  -> like for arrays - we get access to the individual item

