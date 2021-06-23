import { Router } from 'express'
import CreateUserController from './controllers/CreateUserController';
import CreateTagController from './controllers/CreateTagController'
import unsureAdmin from './middlewares/ensureAdmin'

const router = Router();

router.post('/users', CreateUserController.handle)
router.post('/tags', unsureAdmin, CreateTagController.handle)

export { router }