import { UserCreatedEvent } from "../events/user-created-event";
import { UsersRepository } from "../repositories/users-repository";

import { DomainEvents } from "@/core/events/domain-events";
import { EventHandler } from "@/core/events/event-handler";

export class OnSendEmailWhenUserIsCreatedEvent
  implements EventHandler<UserCreatedEvent>
{
  constructor(private readonly usersRepository: UsersRepository) {
    DomainEvents.register(UserCreatedEvent.name, this);
  }

  async handler({ eventData: { user } }: UserCreatedEvent) {
    user.markEmailAsAlreadySent();

    await this.usersRepository.save(user);
  }
}
