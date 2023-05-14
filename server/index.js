const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

//connect to database
const db = mysql.createConnection({
        user: "root",
        host: "localhost",
        password: "Khuljohn-studi0",
        database: "regstatus",
    });

    //request the infomation from the from frontend
app.post('/create',(req,res) => {
    const name = req.body.name;
    const surname = req.body.surname;
    const email = req.body.email;
    const age = req.body.age;
    const grade = req.body.grade;
    const gender = req.body.gender;
    const contact = req.body.contact;

    //insert information to the table
    db.query(
    "INSERT INTO infomation (name, surname, email, age, grade, gender,contact) Values(?,?,?,?,?,?,?)",
    [name, surname, email, age, grade, gender,contact],
    (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.send("values inserted");
        }
    });
});

app.get('/infomation',(req,res) => {
    db.query("SELECT * FROM infomation", (err, result) =>{
        if (err){
            console.log(err)
        }else{
            res.send(result);
        }
    });
});
app.listen(3001, () =>{
    console.log("hey your server is running at port 3001");
})