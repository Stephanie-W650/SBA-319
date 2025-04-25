import express from 'express';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('I am a user')
// })

// Routes / API Endpoints

// All user routes (INDUCES) and their corresponding controller functions (CRUD)

///Seed///
router.get('/seed', userController.seedUsers)

    


export default router;
