const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const bookRoutes = require('./routes/books');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://suhroba001:8bYhlHNSserAAF6h@book-review.56csnix.mongodb.net/?retryWrites=true&w=majority&appName=book-review', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Error connecting to MongoDB Atlas:', err));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Book Review App' });
});

app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
