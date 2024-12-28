const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: '',
  database: 'cec_sinhvientam'
})

app.get('/', (req, res)=> {
  return res.json("Server dang chay....");
})

app.get('/sinhvien', (req, res)=> {
  const sql = "SELECT * FROM cec_sinhvientam limit 100";
  db.query(sql, (err, data)=> {
    if(err) return res.json(err);
    return res.json(data);
  })
})

app.listen(8081, ()=> {
  console.log("Server dang chay cong: 8081");
})