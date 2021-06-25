import { Request, Response } from 'express'

import ListUserReceiveComplimentsService from '../services/ListUserReceiveComplimentsService'

class ListUserSendComplimentsControle {
  async handle(request: Request, response: Response) {
    const { user_id } = request

    const compliments = await ListUserReceiveComplimentsService.execute(user_id)

    return response.json(compliments)
  }
}

export default new ListUserSendComplimentsControle()