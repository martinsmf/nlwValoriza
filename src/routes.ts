import { Router } from 'express'

import AuthenticateUserController from './controllers/AuthenticateUserController'
import CreateComplimentController from './controllers/CreateComplimentController'
import CreateTagController from './controllers/CreateTagController'
import CreateUserController from './controllers/CreateUserController'
import ensureAuthenticated from './middlewares/ensureAuthenticated'
import ListUserReceiveComplimentsController from './controllers/ListUserReceiveComplimentsController'
import ListUserSendComplimentsController from './controllers/ListUserSendComplimentsController'
import ListTagController from './controllers/ListTagController'
import unsureAdmin from './middlewares/ensureAdmin'
import ListUsersController from './controllers/ListUsersController'

const router = Router();

router.post('/compliments',
  ensureAuthenticated,
  CreateComplimentController.handle
)
router.post('/session', AuthenticateUserController.handle)
router.post('/tags',
  ensureAuthenticated,
  unsureAdmin,
  CreateTagController.handle
)
router.post('/users', CreateUserController.handle)

router.get('/users',
  ensureAuthenticated,
  unsureAdmin,
  ListUsersController.handle
)
router.get('/users/compliments/send',
  ensureAuthenticated,
  ListUserSendComplimentsController.handle
)
router.get('/users/compliments/receive',
  ensureAuthenticated,
  ListUserReceiveComplimentsController.handle
)
router.get('/tags',
  ensureAuthenticated,
  ListTagController.handle)

export { router }