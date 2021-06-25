import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from 'class-transformer'

class ListTagService {

  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories)

    const tags = await tagsRepositories.find()

    //outra forma de customizar a tag, obs: mudar const para let 
    // tags = tags.map(tag => ({ ...tag, nameCustom: `#${tag.name}` }))

    return classToPlain(tags)

  }
}

export default new ListTagService()