var library = [
    {
        author: 'George Martin',
        title: 'Game of Thrones',
        readingStatus: true,
        rating: 4.0,
        notes: ['Read page','20 again']
    },
    {
        author: 'Adam Lambert',
        title: 'Moking Jay',
        readingStatus: true,
        rating: 3.0,
        notes: ['Read page 20 again','Okay Thanks']
    },
    {
        author: 'JK Rowling',
        title: 'Harry Potter',
        readingStatus: false,
        rating: undefined
    }
]

function CreateBook(author, title, readingStatus, rating, notes) {

  this.author = author;
  this.title= title;
  this.readingStatus = readingStatus;
  this.rating = rating;
  this.notes = notes;
  this.getNotes = function() {
    return this.notes;
  };
  this.setRating =function(rating) {
    this.rating = rating;
  };
  library.push(this);
  return this;
}

function getActiveBooks(library) {
  return library.filter(item => item.readingStatus === true);
}

function searchByTitle(library, title) {
  return library.find(item => item.title === title);
}

function addNotes(title, note) {
  var book = searchTitle(title);
  if(book['notes'] == undefined){
    notes = new Object(note);
    book['notes'] = notes;
  }
  else{
    book.notes.push(note);
  }
}

function showAllNotesOfBook(title) {
  var bookItem = searchTitle(title);
  return bookItem == undefined ? 'Not Found' : bookItem.getNotes(); 
}


// var activeBooks = getActiveBooks(library);
// var searchedBook = searchByTitle(library, 'Game of Thrones');
// var isSet = setRating('Moking Jay', 2.5);
// addNotes('Game of Thrones', ['New Notes', 'Next Note']);
// var notes = showAllNotesOfBook('Game of Thrones');
// console.log(notes);
// var book = {
//   author: 'Munaem Rudab',
//   title: 'JS',
//   rating: 3.0,
//   readingStatus: false,
//   notes: ['Patari','Shazam']
// }
// var book = new CreateBook('Munaem Rudab1', 'JS', 3.0, false, ['Patari', 'Shazam']);
// console.log();
// searchedBook.setRating(15.0);
// console.log(searchedBook.rating);
