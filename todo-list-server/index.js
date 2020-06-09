const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require('cors');
const PORT = 5000;

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
