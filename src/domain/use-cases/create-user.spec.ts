import { User } from "../entities/user";
import { OnSendEmailWhenUserIsCreatedEvent } from "../subscribers/on-send-email-when-user-is-created-event";

import { CreateUserUseCase } from "./create-user";

import { DomainEvents } from "@/core/events/domain-events";
import { InMemoryUsersRepository } from "@/tests/in-memory/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;
let useCase: CreateUserUseCase;

describe("Create User", () => {
  beforeEach(() => {
    DomainEvents.shouldRun = false;

    inMemoryUsersRepository = new InMemoryUsersRepository();
    useCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it("should be able to create a new user", async () => {
    const { user } = await useCase.execute({
      name: "John Doe",
      email: "johndoe@email.com",
    });

    expect(user).toBeInstanceOf(User);

    expect(inMemoryUsersRepository.items[0]).toEqual(user);
  });
});
