import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config
const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB and Cloudinary
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS

// API Endpoints
app.use('/api/user', userRouter); // User routes
app.use('/api/product', productRouter); // Product routes

// Default route
app.get('/', (req, res) => {
  res.send('API Working');
});

// Start the server
app.listen(port, () => console.log('Server started on PORT: ' + port));