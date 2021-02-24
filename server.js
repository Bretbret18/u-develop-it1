// require express.js mod
const express = require('express');

// PORT designation / app expression
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get (root of directory) response JSON ('What shows up in localhost: 3001) .. test route
// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});


// starts express.js server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});