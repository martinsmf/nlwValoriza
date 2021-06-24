import { Router } from 'express'

import AuthenticateUserController from './controllers/AuthenticateUserController'
import CreateComplimentController from './controllers/CreateComplimentController'
import CreateUserController from './controllers/CreateUserController'
import CreateTagController from './controllers/CreateTagController'
import unsureAdmin from './middlewares/ensureAdmin'

const router = Router();

router.post('/compliments', CreateComplimentController.handle)
router.post('/session', AuthenticateUserController.handle)
router.post('/tags', unsureAdmin, CreateTagController.handle)
router.post('/users', CreateUserController.handle)

export { router }