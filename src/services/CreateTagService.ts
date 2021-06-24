import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { Err } from '../err'

class CreateTagService {
  async execute(name: string) {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    // if (!name)
    //   throw Error('Incorrect name!')

    if (!name)
      throw new Err(400, 'Incorrect name!')

    const tagAlreadyExists = await tagsRepositories.findOne({ name })

    if (tagAlreadyExists)
      throw new Err(400, 'Tag already exists')

    const tag = tagsRepositories.create({
      name,
    })

    await tagsRepositories.save(tag)

    return tag
  }
}

export default new CreateTagService()
