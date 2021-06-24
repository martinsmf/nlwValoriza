//Biblioteca
import { Request, Response } from 'express'
//Class
import CreateComplimentService from '../services/CreateComplimentService'
class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_sender, user_receiver, message } = request.body

    const compliment = await CreateComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message
    });

    return response.json(compliment)
  }
}

export default new CreateComplimentController()