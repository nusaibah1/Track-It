import express from 'express';
import path from 'path';
import { userRouter } from './controller/userController.js';
import { itemRouter } from './controller/itemController.js';

const app = express();
const port = +process.env.PORT || 4000;

// Middleware
app.use(express.static('./static'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});

// Routes
app.use('/user', userRouter);
app.use('/item', itemRouter);

// Root route
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve('./static/html/index.html'));
});

// 404 route
app.use((req, res, next) => {
  res.status(404).json({ status: 404, msg: 'Resource not found' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ status: 500, msg: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});