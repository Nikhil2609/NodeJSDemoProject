import express from 'express';

const authRouter = express.Router();

authRouter.post('/login', (req, res) => {
  const body = req.body;
  console.log('body=>', body);
  // res.status(200).json({ message: 'Get all customer' });
});

authRouter.post('/register', (req, res) => {
  const body = req.body;
  console.log('body=>', body);
  res.status(201).json({ message: 'Create a new customer' });
});

export default authRouter;
