const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/sum', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send('Invalid numbers');
  }
  res.send((a + b).toString());
});

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000');
});
