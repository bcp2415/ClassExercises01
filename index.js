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
  },

  checkout(uses = 1) {
    this.numberTimesCheckedOut += uses;
  }
}


// Define your Manual and Novel classes here:
class Manual extends Book {
  constructor(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded);
  },

  isTooOld(currentYear) {
    if ((currentYear - this.copyrightDate) > 5) {
      this.isDiscarded = true;
  }

};

class Novel extends Book {
  constructor(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded) {
    super(title, author, copyrightDate, ISBN, numberPages, numberTimesCheckedOut, isDiscarded);
  },

  isReadyForRetirement(this.numberTimesCheckedOut) {
    if (this.numberTimesCheckedOut > 100) {
      this.isDiscarded = true;
  }
};


// Declare the objects for exercises 2 and 3 here:


// Code exercises 4 & 5 here:
