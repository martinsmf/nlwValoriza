import { getCustomRepository } from "typeorm"
import { ComplimentsRepositores } from "../repositories/ComplimentsRepositories"
import { Err } from "../err"
import { UserRepositories } from "../repositories/UserRepositories"

interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

class CreateComplimentService {
  async execute({ tag_id, user_sender, user_receiver, message }: IComplimentRequest) {
    const complimentsRepositories = getCustomRepository(ComplimentsRepositores)
    const userRepositories = getCustomRepository(UserRepositories)

    if (user_sender === user_receiver)
      throw new Err(400, 'Incorrect User REceiver')

    const userReceiverExists = await userRepositories.findOne(user_receiver)

    if (!userReceiverExists)
      throw new Err(404, 'User Receiver does not exists!')

    const compliment = complimentsRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export default new CreateComplimentService()