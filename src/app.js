import express, { json } from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/tasks.routes.js';
import cors from 'cors';
import { FRONTEND_URL } from './config.js';

const app= express();

app.use(cors({
    origin:'https://taskapp-frontend-production.up.railway.app',
    //origin: 'http://localhost:5173',
    //origin: 'http://localhost:4173',
    credentials: true,
    
})
    
);
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use('/api',authRoutes);
app.use('/api',taskRoutes);

export default app;


