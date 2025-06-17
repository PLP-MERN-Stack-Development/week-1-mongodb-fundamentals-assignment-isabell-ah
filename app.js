const express = require('express');
const app = express();
const port = 3000;
const connectDb = require('./booksDb.js');
const bookRoutes = require('./books_crud.js');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/books', bookRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Book API. Go to /books to see all books.');
});

// Connect to database and start server
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to database:', err);
  });