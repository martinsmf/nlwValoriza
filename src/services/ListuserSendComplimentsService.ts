import { getCustomRepository } from 'typeorm'
import { ComplimentsRepositores } from '../repositories/ComplimentsRepositories'

class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositores)

    const compliments = await complimentsRepositories.find({
      where: {
        user_sender: user_id,
      }
    })

    return compliments
  }
}

export default new ListUserSendComplimentsService()