import { Request, Response } from 'express'

import ListUserService from '../services/ListUsersService'

class ListUserController {
  async handle(request: Request, response: Response) {

    const users = await ListUserService.execute()

    return response.json(users)

  }
}

export default new ListUserController()