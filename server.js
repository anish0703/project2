const express =  require("express");
const mysql = require('mysql');
const cors = require('cors');


const app= express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database:"resgister"

})

app.post('/Register',(req,res) =>{
    const sql = "INSERT INTO login (`firstname`,`lastname`,`email`,`password`) VALUES(?)";
    const values = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.password,

    ];
    db.query(sql,[values], (err,data) => 
        {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/Login', (req,res) =>{
    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    
    db.query(sql,[req.body.email,req.body.password], (err,data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            const username = data[0].firstname;
            return res.json ({status:'success', username:username})
        }else {
            return res.json("Fail");
        }
    });
});

app.listen(8081,()=>{
    console.log("listening");
})