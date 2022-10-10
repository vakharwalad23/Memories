import express from 'express';
const router = express.Router();


import { signin, signup } from '../controllers/users.js'

// http://localhost:5000/posts

router.post('/signin', signin);
router.post('/signup', signup);

export default router;