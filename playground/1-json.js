const fs = require("fs")
// const book = {
//  title: "Ego is the Enemy",
//   author: "Ryan Holiday"
// }

// // Turn JavaScript object into JSON
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync("1-json.json", bookJSON)

// // Convert JSON back to original JS object
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData)

const dataBuffer = fs.readFileSync("./1-json.json")
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Rebecca"
user.age = 24

const userJSON = JSON.stringify(user)

fs.writeFileSync("1-json.json", userJSON)
