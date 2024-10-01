const express= require("express");// to use express in your app
const mysql = require("mysql"); // to create a connection in database
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database : 'login_crud'
})
app.post('/signup', (req,res) =>{
    const sql = "INSERT INTO signup(`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password

    ]
    db.query(sql,[values], (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})
app.listen(8081, ()=>{
    console.log("App listening...");
})
 