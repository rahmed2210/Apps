let notes = getSavedNotes()

// Rendering Our Filtered Data
const filters = {
    searchText: ''
}

renderNotes(notes, filters)

// User Interaction
document.querySelector('#create-note').addEventListener('click', function (e) {
    const id = uuidv4()
    // want to push the new item on to the notes array
    notes.push({
        id: id,
        title: '',
        body: ''
    }) 
    saveNotes(notes)
    location.assign(`./edit.html#${id}`)

})

// text Input and Data Filtering
document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

// Dropdowns menu
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function (e) {
    if (e.key === 'notes') {
        // 1. Parse the new data and update notes
        notes = JSON.parse(e.newValue)
        // 2. rerender the notes
        renderNotes(notes, filters)
    }
})

// Unix Epoch = January 1st 1970 00:00:00
const now = new Date()
const timeStamp = now.getTime()

const myDate = new Date(timeStamp)
console.log(myDate.getFullYear())


console.log(`Year: ${now.getFullYear()}`)
console.log(`Month: ${now.getMonth()}`)
console.log(`Dat of month: ${now.getDate()}`)
console.log(`Hour: ${now.getHours()}`)
console.log(`Minute: ${now.getMinutes()}`)
console.log(`Second: ${now.getSeconds()}`)


// 1. Create two dates in the past (using String for date)
// 2. Get timeStamps for both
// Figure out which is first and print its time (use toString)

const dateOne = new Date('March 1 2023 12:00:00')
const dateTwo = new Date()
const dateOneTimeStamp = dateOne.getTime()
const dateTwoTimeStamp = dateTwo.getTime()

if (dateOneTimeStamp < dateTwoTimeStamp) {
    console.log(dateOne.toString())
} else if (dateTwoTimeStamp < dateOneTimeStamp) {
    console.log(dateTwo.toString())
}
