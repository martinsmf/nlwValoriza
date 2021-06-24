import { EntityRepository, Repository } from 'typeorm'
import { Compliment } from '../entities/Compliments'

@EntityRepository(Compliment)
class ComplimentsRepositores extends Repository<Compliment>{ }

export { ComplimentsRepositores }