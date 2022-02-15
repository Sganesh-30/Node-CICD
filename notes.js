
const fs = require('fs');

var fetchNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.txt'));
  } catch (err) {
    return [];
  }
}

var addNote = (title, body) => {
  var notes = fetchNotes();

  var note = {
    title,
    body
  };

  var double = notes.filter((note) => note.title === title);

  if(double.length === 0){
    notes.push(note);

    fs.writeFileSync("notes.txt", JSON.stringify(notes));

    logNote(note);
  } else {
    console.log("STOP: Title already exists.");
  }
}

var remove = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title !== title);

  fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
}

var read = (title) => {
  var notes = fetchNotes();

  var filteredNotes = notes.filter((note) => note.title === title);

  logNote(filteredNotes[0]);
}

var get = () => {
  var notes = fetchNotes();

  notes.forEach((note) => logNote(note));
}

var logNote = (note) => {

  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}


module.exports = {
  addNote,
  remove,
  read,
  get
}
