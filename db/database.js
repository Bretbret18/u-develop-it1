// require sqlite3 .. sets execution mode to verbose -> to produce messages in terminal
// regarding runtime state. Can help explain what SQLite app is doing.
const sqlite3 = require('sqlite3').verbose();

// Connect to database
const db = new sqlite3.Database('./db/election.db', err => {
    if (err) {
        return console.log.error(err.message);
    }

    console.log('Connected to the election database. ');
});

module.exports = db;