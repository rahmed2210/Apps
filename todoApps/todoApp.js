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

// Summary Message
const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})

const Summary = document.createElement('h2')
Summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(Summary)


// ---> forEach  <----
// Print a new paragraph for each todos (use text value)
todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})