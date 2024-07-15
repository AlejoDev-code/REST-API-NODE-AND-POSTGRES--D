import { Router } from 'express';

const router = new Router();
import { getUsers, getUsersById, insertUsers, deleteUser, updateUser } from '../controllers/users.controllers.js';

router.get('/users', getUsers);

router.get('/users/:id', getUsersById);

router.post('/users', insertUsers);

router.delete('/users/:id', deleteUser);

router.put('/users/:id', updateUser);

export default router;
