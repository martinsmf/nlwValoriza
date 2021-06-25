import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";
import { classToPlain } from 'class-transformer'

class ListUserService {
  async execute() {
    const listUserRepositories = getCustomRepository(UserRepositories)

    const users = await listUserRepositories.find()

    return classToPlain(users)
  }
}

export default new ListUserService()