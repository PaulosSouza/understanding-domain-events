import { InMemoryUsersRepository } from 'tests/in-memory/in-memory-users-repository'
import { OnUserCreated } from './on-user-created'
import { UserCreatedEvent } from '../events/user-created-event'
import { makeUser } from 'tests/factories/make-user'
import { DomainEvents } from '@/core/events/domain-events'

let inMemoryUsersRepository: InMemoryUsersRepository

describe('On User Created', () => {
  beforeAll(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository()

    new OnUserCreated(inMemoryUsersRepository)
  })

  afterEach(() => {
    inMemoryUsersRepository.items = []
  })

  it('should be able to call users repository create method when event is triggered', async () => {
    const inMemoryUserRepositorySpy = vi.spyOn(
      inMemoryUsersRepository,
      'create',
    )

    const user = makeUser()

    const userCreatedEvent = new UserCreatedEvent({
      user,
    })

    DomainEvents.notify(userCreatedEvent)

    expect(inMemoryUserRepositorySpy).toHaveBeenCalledOnce()
  })

  it('should be able to create an user after its event was called', async () => {
    new OnUserCreated(inMemoryUsersRepository)

    const user = makeUser()

    const userCreatedEvent = new UserCreatedEvent({
      user,
    })

    DomainEvents.notify(userCreatedEvent)

    expect(inMemoryUsersRepository.items[0]).toEqual(user)
  })
})
