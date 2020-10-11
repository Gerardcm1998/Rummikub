 //TODO in console: npm install sqlite3
 const sqlite3 = require('sqlite3').verbose();
 //Verify connection
 let db = new sqlite3.Database(':memory:', (err) => {
     if (err) {
       return console.error(err.message);
     }
     console.log('Connected to the in-memory SQlite database.');
 });