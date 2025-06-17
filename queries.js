// MongoDB Queries for Week 1 Assignment

// Task 2: Basic CRUD Operations

db.books.find({ genre: 'Fiction' });

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2000 } });

// Find books by a specific author
db.books.find({ author: 'George Orwell' });

// Update the price of a specific book
db.books.updateOne({ title: 'The Hobbit' }, { $set: { price: 16.99 } });

// Delete a book by its title
db.books.deleteOne({ title: 'Moby Dick' });

// Task 3: Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({
  in_stock: true,
  published_year: { $gt: 2010 },
});

// Use projection to return only the title, author, and price fields
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Implement sorting to display books by price (ascending)
db.books.find().sort({ price: 1 });

// Implement sorting to display books by price (descending)
db.books.find().sort({ price: -1 });

// Implement pagination (5 books per page) - Page 1
db.books.find().limit(5);

// Implement pagination (5 books per page) - Page 2
db.books.find().skip(5).limit(5);

// Task 4: Aggregation Pipeline

// Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: '$genre',
      averagePrice: { $avg: '$price' },
    },
  },
  { $sort: { _id: 1 } },
]);

// Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: '$author',
      bookCount: { $sum: 1 },
    },
  },
  { $sort: { bookCount: -1 } },
  { $limit: 1 },
]);

// Group books by publication decade and count them
db.books.aggregate([
  {
    $addFields: {
      decade: {
        $subtract: ['$published_year', { $mod: ['$published_year', 10] }],
      },
    },
  },
  {
    $group: {
      _id: '$decade',
      count: { $sum: 1 },
    },
  },
  { $sort: { _id: 1 } },
]);

// Task 5: Indexing

// Create an index on the title field
db.books.createIndex({ title: 1 });

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

db.books.find({ title: 'The Hobbit' }).explain('executionStats');
db.books
  .find({ author: 'J.R.R. Tolkien', published_year: { $gt: 1950 } })
  .explain('executionStats');
