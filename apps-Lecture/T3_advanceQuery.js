const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

// incomplete todos
const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed
})

const summary = document.createElement('h2')
summary.textContent =`You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})

/*
// User Interaction  - AddEventListener
// Listen for new todo creation
document.querySelector('button').addEventListener('click', function (e) {
    e.target.textContent = 'Add a new todo'
    console.log('Add a new todo')
})
*/

// ID and Class elements
document.querySelector('#add-todo').addEventListener('click', function (e) {
    console.log('Add a new todo')
})