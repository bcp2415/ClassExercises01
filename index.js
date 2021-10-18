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
}


// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor() {
    super();
  }
  this.isTooOld = function(this.copyrightDate) {
    const currentYear = 2021;
    return (currentYear - copyrightDate) > 5;
  }
};

class Novel extends Book {
  constructor() {
    super();
  }
  this.isReadyForRetirement(this.numberTimesCheckedOut) {
    return (this.numberTimesCheckedOut > 100);
  }
};


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
