import { UserCreatedEvent } from "../events/user-created-event";
import { IUsersRepository } from "../repositories/users-repository";

import { DomainEvents } from "@/core/events/domain-events";
import { EventHandler } from "@/core/events/event-handler";

export class OnUserCreated implements EventHandler {
  constructor(private readonly usersRepository: IUsersRepository) {
    this.setupSubscriptions();
  }

  setupSubscriptions(): void {
    DomainEvents.register(UserCreatedEvent.name, this.handler.bind(this));
  }

  async handler({ eventData: { user } }: UserCreatedEvent) {
    await this.usersRepository.create(user);
  }
}
