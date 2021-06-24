import { getCustomRepository } from 'typeorm'
import { UserRepositories } from '../repositories/UserRepositories'
import { hash } from 'bcryptjs'
import { Err } from '../err'

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories)

    if (!email || !password) {
      throw new Err(400, 'Email or password incorrect')
    }

    const userAlreadyExists = await userRepository.findOne({ email })

    if (userAlreadyExists) {
      throw new Err(400, 'User already exists')
    }

    const user = userRepository.create({
      name,
      email,
      admin,
      password: await hash(password, 8),
    })

    await userRepository.save(user)

    return user
  }
}

export default new CreateUserService()