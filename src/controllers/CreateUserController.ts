//Biblioteca
import { Request, Response } from 'express'

//class
import CreateUserService from '../services/CreateUserService'

class CreateUserController {
  async handle(request: Request, response: Response) {

    const { name, email, password, admin } = request.body

    const user = await CreateUserService.execute({ name, email, admin, password });

    return response.json(user)
  }
}

export default new CreateUserController()