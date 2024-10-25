

// Challenge
/*
    1. Create an link a javascript file to the HTML
    2. Remove all p tags that have "the" in the text
    3.
*/

const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function (paragraphs) {
    if (paragraphs.textContent.includes('the')) {
        paragraphs.remove()
    }
})