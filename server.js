import { config } from 'dotenv'; config();
import './database/database.js';
import express from 'express';
import userRouter from './routes/users/users-router.js'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/users', userRouter);

app.get('/', (req, res) => {
    res.send('Welcome to API')
})

app.listen(PORT, (req, res) => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
