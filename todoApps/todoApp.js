const paragraphs = document.querySelectorAll('p')

// removed tag the contain 'the'
paragraphs.forEach(function (paragraphs) {
    if (paragraphs.textContent.includes('the')) {
        paragraphs.remove()
    }
})