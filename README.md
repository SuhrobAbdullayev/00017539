About the App:
- This web application is made to list reviewed books. Users can create reviewed books list, if they want, they can edit and also delete those which is not needed in the list.
- It is connected to MongoDB Atlas which stores data in cloud. Users can access their data eveywhere even if they are running the code in their local servers. 

Follow these steps to run the app locally:

1. Clone the repository: `https://github.com/SuhrobAbdullayev/00017539.git`
2. Install the dependencies: npm install
3. Start the application: node app.js
4. Open your browser and go to `http://localhost:3000` to access the app.

Link to GitHub repository: `https://github.com/SuhrobAbdullayev/00017539.git`
Link to hosted website: `https://zero0017539.onrender.com`

Project structure:

00017539/
│
├── controllers/            Controller files
│   └── books.js            Logic for handling book-reviewing routes
│
├── public/                 Public folders
│   └── styles/             Folder for styles
│       └── style.css       Main CSS style
│
├── routes/                 Route files
│   └── books.js            Routes for book-reviewing requests (CRUD operations)
│
├── views/                  Template views
│   ├── books/              Book-reviwing views
│   │   ├── edit.pug        Edit book information page
│   │   ├── index.pug       List of reviwed books
│   │   └── new.pug         Add new book-review page (almost the same as editing page)
│   └── index.pug           Main index page (home page)
│
├── .gitignore              Specifies files and directories to ignore in Git
├── app.js                  Main Express application file
├── package.json            Project dependencies and scripts
├── README.md               Project documentation

