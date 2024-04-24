import { DomainEvents } from '@/core/events/domain-events'
import { IEventHandler } from '@/core/events/event-handler'
import { UserCreatedEvent } from '../events/user-created-event'
import { IUsersRepository } from '../repositories/users-repository'

export class OnUserCreated implements IEventHandler {
  constructor(private readonly usersRepository: IUsersRepository) {
    this.setupSubscriptions()
  }

  setupSubscriptions(): void {
    DomainEvents.register(UserCreatedEvent.name, this.handler.bind(this))
  }

  async handler({ eventData: { user } }: UserCreatedEvent) {
    await this.usersRepository.create(user)
  }
}
