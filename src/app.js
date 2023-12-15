import express from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/users.routes.js';

const PORT = 8080;

const app = express();

const MONGO = `mongodb+srv://mjoaquind:22-Mjdz-81@cluster0.b1iupjq.mongodb.net/practicaintegradora1`;

const connection = mongoose.connect(MONGO);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.use('/api/users', userRoutes);