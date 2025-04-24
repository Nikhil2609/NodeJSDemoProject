import express from 'express';
import router from './routes';
import { connectDatabase } from './db';
import dotenv from 'dotenv';
import { requestLogger } from './middleware/logger';

dotenv.config();

const app = express();

// middleware
app.use(express.json());

app.use(requestLogger);

// routes
app.use('/api', router);

connectDatabase();

// no route found
app.use('/', (req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(process.env.PORT, () => {
  console.log('server running on port', process.env.PORT);
});
