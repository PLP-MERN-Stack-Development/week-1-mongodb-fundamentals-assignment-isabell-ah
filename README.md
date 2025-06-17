# MongoDB Fundamentals Assignment

This repository contains my solution for the Week 1 MongoDB Fundamentals Assignment.

## Setup Instructions

### Prerequisites

- MongoDB installed locally or MongoDB Atlas account
- Node.js and npm installed

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install mongoose mongodb express
   ```

### Running the Scripts

#### 1. Insert Books

To populate the database with sample book data:

```
node insert_books.js
```

This script will:

- Connect to MongoDB
- Create a database called `plp_bookstore`
- Create a collection called `books`
- Insert 12 book documents with the required fields

#### 2. Running Queries

The `queries.js` file contains all the MongoDB queries for the assignment tasks. You can run these queries in:

- MongoDB Shell (mongosh)
- MongoDB Compass
- Or execute them programmatically using a Node.js script

To run a specific query in MongoDB Shell:

1. Open MongoDB Shell: `mongosh`
2. Connect to the database: `use plp_bookstore`
3. Copy and paste the query from `queries.js`

## Project Structure

- `insert_books.js`: Script to populate the database with book data
- `bookModel.js`: Mongoose schema for the book model
- `bookData.js`: Sample book data
- `queries.js`: MongoDB queries for all assignment tasks
- `booksDb.js`: Database connection utilitt
- `books_crud.js`: CRUD Operations

## Screenshots

![MongoDB Compass Screenshot](mongodb_screenshot.png)

## Assignment Tasks Completed

- [x] Task 1: MongoDB Setup
- [x] Task 2: Basic CRUD Operations
- [x] Task 3: Advanced Queries
- [x] Task 4: Aggregation Pipeline
- [x] Task 5: Indexing
