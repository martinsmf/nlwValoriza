import { Request, Response } from 'express'

import ListUserSendComplimentsService from '../services/ListuserSendComplimentsService'

class ListUserSendComplimentsControle {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const compliments = await ListUserSendComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export default new ListUserSendComplimentsControle()