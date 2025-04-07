const Review = require('../models/review');

// List all books
exports.list = async (req, res) => {
    try {
        const books = await Review.find();
        res.render('books/index', { title: 'Books', books });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error fetching books' });
    }
};

// Show the form to add a new book
exports.newForm = (req, res) => {
    res.render('books/new', { title: 'Add New Book' });
};

// Create a new book
exports.create = async (req, res) => {
    try {
        const { title, author, genre, insights, rating } = req.body;
        const newBook = new Review({ title, author, genre, insights, rating });
        await newBook.save();
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error creating book' });
    }
};

// Show the edit form for a book
exports.editForm = async (req, res) => {
    try {
        const book = await Review.findById(req.params.id);
        if (!book) {
            return res.status(404).send({ message: 'Book not found' });
        }
        res.render('books/edit', { title: 'Edit Book', book });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error loading edit form' });
    }
};

// Update book details
exports.update = async (req, res) => {
    try {
        const { title, author, genre, insights, rating } = req.body;
        await Review.findByIdAndUpdate(req.params.id, { title, author, genre, insights, rating });
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error updating book' });
    }
};

// Delete a book
exports.delete = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
        res.redirect('/books');
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error deleting book' });
    }
};
