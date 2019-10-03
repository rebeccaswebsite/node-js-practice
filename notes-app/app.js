const chalk = require("chalk")
const yargs = require("yargs")
const notes = require("./notes.js")

// Customise yargs version
yargs.version("1.1.0")

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: "remove",
  describe: "Removing the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.removeNote(argv.title)
  }
})

// Create read command
yargs.command({
  command: "read",
  describe: "Reading the note",
  handler: function() {
    console.log("Reading a note")
  }
})

// Create list command
yargs.command({
  command: "list",
  describe: "Listing out all notes",
  handler: function() {
    console.log("Listing out all notes")
  }
})

yargs.parse()
