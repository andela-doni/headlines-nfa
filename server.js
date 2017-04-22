import express from 'express';
import path from 'path';

// Create new app
const app = express();
const port = process.env.PORT || 3030;

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Express server is up on port ${port}`);
});
