const fs = require("fs")
const chalk = require("chalk")

const getNotes = function() {
  return "Your notes..."
}

const addNote = function(title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title
  })

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    })

    savedNotes(notes)
    console.log(chalk.bgGreen("New note added!"))
  } else {
    console.log(chalk.bgRed("Note title taken!"))
  }
}

const removeNote = function(title) {
  const notes = loadNotes()
  const filteredNotes = notes.filter(function(note) {
    return note.title !== title
  })

  if (filteredNotes.length < notes.length) {
    savedNotes(filteredNotes)
    console.log(chalk.bgGreen("Note removed!"))
  } else {
    console.log(chalk.bgRed("No note found!"))
  }
}

const savedNotes = function(notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync("notes.json", dataJSON)
}

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync("notes.json")
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
}
