import express from 'express';
import { createUser, updateUser, getUser, getUsers, deleteUser } from '../controllers/user.js';

const router = express.Router();

// GET all users
router.get('/', getUsers);

// POST a new user
router.post('/', createUser);

// GET a user by ID
router.get('/:id', getUser);

// DELETE a user by ID
router.delete('/:id', deleteUser);

//UPDATE a user
router.patch('/:id', updateUser);

export default router;
