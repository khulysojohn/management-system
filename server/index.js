const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "Khuljohn-studi0",
        database: "register",
    });

app.post('/create',(req,res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const age = req.body.age;
    const grade = req.body.grade;
    const gender = req.body.gender;

    db.query(
    "INSERT INTO students (name, surname, email, age, grade, gender) Values(?,?,?,?,?,?)",
    [name, surname, email, age, grade, gender],
    (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send("values inserted");
        }
    }
    );
});
app.listen(3001, () =>{
    console.log("hey your server is running at port 3001");
})