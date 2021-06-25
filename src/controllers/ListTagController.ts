import { Request, Response } from 'express'
import ListTagService from '../services/ListTagService'

class ListTagController {
  async handle(request: Request, response: Response) {

    const tags = await ListTagService.execute()

    return response.json(tags)
  }
}

export default new ListTagController()