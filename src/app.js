import express from 'express';
import mongoose from 'mongoose';
import { engine } from 'express-handlebars';
import __dirname from './utils.js';
import userRoutes from './routes/users.routes.js';
import viewRoutes from './routes/views.routes.js';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = 8080;

const app = express();

const MONGO = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_CLUSTER}.mongodb.net/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority`;

const connection = mongoose.connect(MONGO);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

const httpServer = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')
app.set('views', __dirname + '/views');

app.use('/api/users', userRoutes);
app.use('/', viewRoutes);