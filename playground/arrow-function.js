// const square = function(x) {
//   return x * x
// }

// const square = x => {
//   return x * x
// }

// const square = x => x * x

// console.log(square(3))

const event = {
  name: "Birthday Party",
  guestList: ["Rebecca", "Alice", "Zahra"],
  printGuestList() {
    // This is the method definition syntax, an ES6 feature for objects
    console.log("Guest list for " + this.name)
    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name)
    })
  }
}

// Arrow functions don't bind their own this value

event.printGuestList()
