import express from 'express';
import * as postsController from '../../controllers/posts/posts-controller.js'

const router = express.Router();


///Seed///
router.get('/seed',postsController.seedPosts)

// INDUCES

//Index
router.get('/', postsController.getPosts)
    

router.post('/', postsController.createPosts)



export default router;

