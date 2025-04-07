const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books');

router.get('/', async (req, res) => {
    try {
        await bookController.list(req, res);
    } catch (err) {
        console.error(err); // Log the error for debugging
        res.status(500).send({ message: 'There is no books to list' });
    }
});

// Show the new book form
router.get('/new', async (req, res) => {
    try {
        await bookController.newForm(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Error occured while loading the new book form.' });
    }
});

// Create a new book
router.post('/', async (req, res) => {
    try {
        await bookController.create(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'There is an error while creating the book.' });
    }
});

// Show the edit book form
router.get('/:id/edit', async (req, res) => {
    try {
        await bookController.editForm(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Something went wrong while loading the edit book form.' });
    }
});

// Update book information
router.post('/:id', async (req, res) => {
    try {
        await bookController.update(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Something went wrong while updating the book.' });
    }
});

// Delete a book
router.post('/:id/delete', async (req, res) => {
    try {
        await bookController.delete(req, res);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'There is an error while deleting the book' });
    }
});

module.exports = router;
