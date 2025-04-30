import express from 'express';
import 'express-async-errors'; // handle async errors without try-catch
import router from './routes';
import { connectDatabase } from './db';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { requestLogger } from './middleware/logger';
import { errorHandler } from './middleware/errorHandler';
import { setupAssociations } from './models/associations';
import helmet from 'helmet';

dotenv.config();

const app = express();

// render engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(helmet()); // security middleware

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
