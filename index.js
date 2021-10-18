// Define your Book class here:
class Book {
  constructor(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded) {
    this.title = title;
    this.author = author;
    this.copyrightDate = copyrightDate;
    this.ISBN = ISBN;
    this.numberPages = numberPages;
    this.numberTimesCheckedOut = numberTimesCheckedOut;
    this.isDiscarded = isDiscarded;
  }

  checkout(uses = 1) {
    this.numberTimesCheckedOut += uses;
  }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded);
  }

  isTooOld(currentYear) {
    if ((currentYear - this.copyrightDate) > 5) {
      this.isDiscarded = 'Yes';
    }
  }
}

class Novel extends Book {
  constructor(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded);
  }

  isReadyForRetirement() {
    if (this.numberTimesCheckedOut > 100) {
      this.isDiscarded = 'Yes';
    }
  }
}

// Declare the objects for exercises 2 and 3 here:
let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32, 'No');

let shuttleBuilding = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, 0000000000000, 1147, 1, 'No');

// Code exercises 4 & 5 here:
shuttleBuilding.isTooOld(2021);

prideAndPrejudice.checkout(5);

