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
