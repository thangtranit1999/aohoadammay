const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routers/userRouter');
const cors = require('cors');
const PORT = 5000;

mongoose.connect(process.env.DB_URL || 'mongodb://localhost/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('ok');
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}...`);
});
