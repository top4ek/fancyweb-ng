import express from 'express';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

app.use(express.static(`${__dirname}/dist/main/`));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname}/dist/main/`);
});

app.listen(3000, () => console.log('We are on port 3000'));
