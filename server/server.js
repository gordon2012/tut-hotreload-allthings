import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.send({
    message: 'Hello WORLD'
  });
});

export default app;
