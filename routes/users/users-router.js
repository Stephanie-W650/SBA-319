import express from 'express';
import * as usersController from '../../controllers/users/users-controller.js'

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('I am a user')
// })

// Routes / API Endpoints

// All user routes (INDUCES) and their corresponding controller functions (CRUD)

///Seed///
router.get('/seed', usersController.seedUsers)

// INDUCES

//Index
router.get('/', usersController.getUsers)
    
//New
//Delete
//Update
//Create
router.post('/', usersController.createUsers)

router.delete('/:id', usersController.deleteUsers)

router.put('/:id', usersController.updateUsers)

export default router;

