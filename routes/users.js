import express from 'express'
import { createUser, deleteUser, getUsers, updateUser } from '../handlers/users.js';
const usersRouter = express.Router();

// I want to handle my endpoints here:
usersRouter.get('/', getUsers)
usersRouter.post('/', createUser)
usersRouter.patch('/', updateUser)
usersRouter.delete('/', deleteUser)

export default usersRouter;