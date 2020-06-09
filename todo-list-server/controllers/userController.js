const userModel = require('../models/userModel');
const mysql = require('mysql');

const login = async (req, res) => {
  const user = req.body;
  //console.log(user);
  var con = mysql.createConnection({
    host: "18.136.20.141",
    user: "newuser",
    password: "thang123456",
    database: 'dan_aohoa'
  });
  const sql = "select * from user where username='"+user.username+"'and password='"+user.password+"'";
  con.connect(err=>{
    if(err) throw err;
    con.query(sql, (err, result, abc)=>{
      // if(err)throw err;
      // console.log(result);
      if(!err){
        result
        ? res.send({ _id: result._id, username: result.username })
        : res
            .status(404)
            .send({ statusCode: 404, message: 'wrong username or password' });
      }
      else{
        res.send(err);
      }
    })
  })
};

const post = (req, res) => {
  const user = req.body;
  userModel.create(user, (err, result) => {
    err ? res.send(err) : res.send(result);
  });
};

module.exports = { login, post };
