// require express.js mod
const express = require('express');
const db = require('./db/database');

// PORT designation / app expression
const PORT = process.env.PORT || 3001;
const app = express();

const apiRoutes = require('./routes/apiRoutes');


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Use apiRoutes
app.use('/api', apiRoutes);


// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


// starts express.js server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});

