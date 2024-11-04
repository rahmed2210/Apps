// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// 1. setup a root div
// 2. setup and append a checkbox (set type attribute)
//  someNode.setAttribute('type', 'checkBox')
// 3. setup and append a span (set text)
// 4. setup and append a button (set text)

// Get the DOM elements for an individual note 
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkBox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

 //   const removeButton = document.createElement('button')

    // Setup todo checkBox
    checkBox.setAttribute('type', 'checkbox')
    todoEl.appendChild(checkBox)

    // setup the todo text
    todoText.textContent = todo.text
    todoEl.appendChild(todoText)

    // setup the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton)

    return todoEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}