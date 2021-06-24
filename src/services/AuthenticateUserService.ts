//Bibliotecas
import { getCustomRepository } from "typeorm"
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

//class
import { UserRepositories } from '../repositories/UserRepositories'
import { Err } from '../err'

interface IAuthenticateRequest {
  email: string
  password: string
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepositories = getCustomRepository(UserRepositories)

    const user = await userRepositories.findOne({ email })

    if (!user) {
      throw new Err(400, 'Email or password incorrect')
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new Err(400, 'Email or password incorrect')
    }

    const token = sign({
      email: user.email
    }, '2e696662906288408bc165abe001c045', {
      subject: user.id,
      expiresIn: '1d'
    })

    return token
  }

}

export default new AuthenticateUserService()