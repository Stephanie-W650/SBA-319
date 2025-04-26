import { config } from 'dotenv'; config();
import './database/database.js';
import express from 'express';
import userRouter from './routes/users/users-router.js'
import postRouter from './routes/posts/posts-router.js'
import commentRouter from './routes/comments/comments-router.js'

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.get('/', (req, res) => {
    res.send('Welcome to API')
})

app.listen(PORT, (req, res) => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
