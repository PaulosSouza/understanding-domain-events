import { User } from "../entities/user";

import { EventInterface } from "@/core/events/event-interface";

interface UserCreatedEventProps {
  user: User;
}

export class UserCreatedEvent implements EventInterface<UserCreatedEventProps> {
  public occuredAt: Date;
  public eventData: UserCreatedEventProps;

  constructor(user: User) {
    this.occuredAt = new Date();
    this.eventData = { user };
  }
}
