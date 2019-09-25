const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday"
}

// Turn JavaScript object into JSON
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// Convert JSON back to original JS object
const parsedData = JSON.parse(bookJSON)
console.log(parsedData)
