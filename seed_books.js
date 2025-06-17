const mongoose = require('mongoose');
const Book = require('./bookModel');
const books = require('./bookData');
const connectDb = require('./booksDb.js');

async function insertBooks() {
  try {
    // Connect to MongoDB
    await connectDb();
    
    // Clear existing books
    await Book.deleteMany({});
    console.log('Cleared existing books');
    
    // Insert books
    const result = await Book.insertMany(books);
    console.log(`${result.length} books inserted successfully`);

    // Display inserted books
    const insertedBooks = await Book.find();
    insertedBooks.forEach((book, index) => {
      console.log(
        `${index + 1}. "${book.title}" by ${book.author} (${
          book.published_year
        })`
      );
    });
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close connection
    await mongoose.disconnect();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks();