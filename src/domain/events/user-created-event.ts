import { IDomainEvent } from '@/core/events/domain-event'
import { User } from '../entities/user'

export interface IUserCreatedEvent {
  user: User
}

export class UserCreatedEvent implements IDomainEvent<IUserCreatedEvent> {
  public occuredAt: Date
  public eventData: IUserCreatedEvent

  constructor(eventData: IUserCreatedEvent) {
    this.eventData = eventData
    this.occuredAt = new Date()
  }
}
