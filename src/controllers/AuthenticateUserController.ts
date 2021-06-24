//Biblioteca
import { Request, Response } from 'express'

//class
import AuthenticateUserService from '../services/AuthenticateUserService'

class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body

    const token = await AuthenticateUserService.execute({ email, password })

    return response.json(token)
  }
}

export default new AuthenticateUserController()