
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


// .forEach -> allows us to iterate over each thing 
// (Function) -> we pass in our callback functions
// () { })  -> like for arrays - we get access to the individual item
// Query all and rewrite

const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '*****'
})


// Add a new element
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from JavaScript'
document.querySelector('body').appendChild(newParagraph)