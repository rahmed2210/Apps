const todos = [
    {
      text: "Order cat food",
      completed: false,
    }, {
      text: "Clean kitchen",
      completed: true,
    }, {
      text: "Buy food",
      completed: true,
    }, {
      text: "Do work",
      completed: false,
    }, {
      text: "Exercise",
      completed: true,
    }]

const paragraphs = document.querySelectorAll('p')

// removed tag the contain 'the'
paragraphs.forEach(function (paragraphs) {
    if (paragraphs.textContent.includes('the')) {
        paragraphs.remove()
    }
})