import { User } from "../entities/user";
import { UserCreatedEvent } from "../events/user-created-event";
import { UsersRepository } from "../repositories/users-repository";
import { OnSendEmailWhenUserIsCreatedEvent } from "../subscribers/on-send-email-when-user-is-created-event";

import { DomainEvents } from "@/core/events/domain-events";

interface CreateUserUseCaseInput {
  name: string;
  email: string;
}

interface CreateUserUseCaseOutput {
  user: User;
}

export class CreateUserUseCase {
  constructor(private readonly usersRepository: UsersRepository) {}

  async execute({
    email,
    name,
  }: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
    const user = User.create({
      name,
      email,
    });

    await this.usersRepository.create(user);

    DomainEvents.notify(new UserCreatedEvent(user));

    return {
      user,
    };
  }
}
