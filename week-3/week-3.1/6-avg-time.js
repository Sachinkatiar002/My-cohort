const express = require('express');
const app = express();
const PORT = 3000;

let requestCount = 0;
let totalTime = 0;

app.use((req, res, next) => {
  const startTime = Date.now();

  // “The `on` method is used to attach event listeners to the response object. This allows you to execute code in response to specific events occurring on the `res` object.”

  //“Attaching a listener to the `'finish'` event allows you to perform actions right after the response has been completely processed and sent”

  res.on('finish', () => {
    const endTime = Date.now();
    const duration = endTime - startTime;
    totalTime += duration;
    requestCount++;
    console.log(`Request to ${req.path} took ${duration}ms`); // “**`req.path`*It contains the path part of the URL of the request.*Ex: `/stats`”
  });

  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/stats', (req, res) => {
  const averageTime = requestCount === 0 ? 0 : totalTime / requestCount;
  res.json({
    averageTime: `${averageTime.toFixed(2)}ms`,
    requestCount
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
