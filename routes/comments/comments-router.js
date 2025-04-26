import express from 'express';
import * as commentsController from '../../controllers/comments/comments-controller.js'

const router = express.Router();


///Seed///
router.get('/seed', commentsController.seedComments)

// INDUCES

//Index
router.get('/', commentsController.getComments)
    
//New
//Delete
//Update
//Create
router.post('/', commentsController.createComments)

router.put('/:id', commentsController.updateComments)

export default router;

