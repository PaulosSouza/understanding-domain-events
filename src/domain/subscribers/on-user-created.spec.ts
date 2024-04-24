import { InMemoryUsersRepository } from 'tests/in-memory/in-memory-users-repository'
import { OnUserCreated } from './on-user-created'

let inMemoryUsersRepository: InMemoryUsersRepository

describe('On User Created', () => {
  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()

    new OnUserCreated(inMemoryUsersRepository)
  })
})
