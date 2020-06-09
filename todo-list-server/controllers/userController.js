const userModel = require('../models/userModel');

const login = async (req, res) => {
  const user = req.body;
  const data = await userModel.data("select * from user where username='" + user.username + "' and password='" + user.password + "'");
  if (data[0] != null) {
    res.send({ _id: data[0].id, username: data[0].username })
  } else {
    res
      .status(404)
      .send({ statusCode: 404, message: 'wrong username or password' });
  }
  
};

const post = (req, res) => {
  const user = req.body;
  userModel.create(user, (err, result) => {
    err ? res.send(err) : res.send(result);
  });
};

module.exports = { login, post };
