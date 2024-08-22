import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js'; // Import book routes

dotenv.config();

const app = express();
app.use(express.json());

// Middleware
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

// Mongoose connection
mongoose.connect(process.env.DBURL)
    .then(() => console.log("Database Connected!"))
    .catch(err => console.error("Database connection error: ", err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/book', bookRoutes); // Use book routes
app.get("/",(req,resp)=>{
  resp.send("Anything")
})
const port = 8800;
app.listen(port, () => {
  console.log("Server Started on " + port);
});
