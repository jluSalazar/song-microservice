import express from 'express';
import cors from 'cors';
import { connectDB } from './config/database';
import songRoutes from './routes/songRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/songs', songRoutes);

// Connect to database
connectDB();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
