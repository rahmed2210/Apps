// DOM -> Document Object Model


// Query and remove
/*
const p = document.querySelector('p')
p.remove()
*/

//-------------------------------------------------------------------------------

// .forEach -> allows us to iterate over each thing 
// (Function) -> we pass in our callback functions
// () { })  -> like for arrays - we get access to the individual item

// Query all and remove
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    console.log(p.textContent)
    p.remove()
})

// Query all and rewrite
/*  
const ps = document.querySelectorAll('p')
ps.forEach(function (p) {
    p.textContent = '*****'
})
*/

// .forEach -> allows us to iterate over each thing 
// (Function) -> we pass in our callback functions
// () { })  -> like for arrays - we get access to the individual item