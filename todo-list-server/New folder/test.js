var mysql = require('mysql');
var con = mysql.createConnection({
    host: "18.136.20.141",
    user: "newuser",
    password: "thang123456",
    database: 'dan_aohoa'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("INSERT INTO `user` (`id`, `username`, `password`) VALUES (NULL, 'thangtran', '123')", (err, result, abc)=>{
      if(err) throw err;
      console.log('tao thanh cong')
    })
  });