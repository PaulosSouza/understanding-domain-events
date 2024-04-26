import { UserCreatedEvent } from "../events/user-created-event";

import { OnSendEmailWhenUserIsCreatedEvent } from "./on-send-email-when-user-is-created-event";

import { DomainEvents } from "@/core/events/domain-events";
import { makeUser } from "@/tests/factories/make-user";
import { InMemoryUsersRepository } from "@/tests/in-memory/in-memory-users-repository";

let inMemoryUsersRepository: InMemoryUsersRepository;

describe("On send email when user is created event", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();

    new OnSendEmailWhenUserIsCreatedEvent(inMemoryUsersRepository);
  });

  it("should be able to mark email as sent when an event is dispatched", async () => {
    const user = makeUser();

    inMemoryUsersRepository.items.push(user);

    const useCreatedEvent = new UserCreatedEvent(user);

    DomainEvents.notify(useCreatedEvent);

    expect(inMemoryUsersRepository.items[0].emailAlreadySent).toBeTruthy();
  });
});
