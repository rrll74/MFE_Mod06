import express from 'express';
import path from 'node:path';
import { characterApi } from './api';

const PORT = 3000;
const app = express();
app.use(express.json());

app.use('/', express.static(path.resolve(import.meta.dirname, '../public')));

app.use('/api/characters', characterApi);

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
});
