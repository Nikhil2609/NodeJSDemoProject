import express from 'express';
import 'express-async-errors'; // handle async errors without try-catch
import router from './routes';
import { connectDatabase } from './db';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { requestLogger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import { setupAssociations } from './models/associations';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();

const app = express();

// render engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const corsOptions = {
  origin: ['http://localhost:3002', 'http://localhost:3000']
};

// middleware
app.use(helmet()); // security middleware
app.use(cors(corsOptions)); // allow api access to valid FE URL only

app.use(express.json()); // parse JSON
app.use(morgan()); // log requests
app.use(requestLogger); // custom request logger

// routes
app.use('/api', router);

// connect to database
connectDatabase();

// setup database associations
setupAssociations();

// no route found
app.use('/', (req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('server running on port', process.env.PORT);
});
