const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Connect to database
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Khuljohn-studi0",
    database: "regstatus",
});

// Request the information from the frontend
app.post('/create', (req, res) => {
    const { name, surname, age, gender, grade } = req.body;

    // Insert information into the table
    db.query(
        "INSERT INTO users (name, surname, age, gender, grade) VALUES (?, ?, ?, ?, ?)",
        [name, surname, age, gender, grade],
        (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send("Error inserting values");
            } else {
                res.send("Values inserted");
            }
        }
    );
});

// Get information from database
app.get('/users', (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error retrieving values");
        } else {
            res.send(result);
        }
    });
});

// Running node server
app.listen(3001, () => {
    console.log("Hey, your server is running at port 3001");
});
