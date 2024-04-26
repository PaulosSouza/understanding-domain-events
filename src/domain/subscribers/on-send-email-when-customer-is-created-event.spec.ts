import { CustomerCreatedEvent } from "../events/customer-created-event";

import { OnSendEmailWhenCustomerIsCreatedEvent } from "./on-send-email-when-customer-is-created-event";

import { DomainEvents } from "@/core/events/domain-events";
import { makeCustomer } from "@/tests/factories/make-customer";
import { InMemoryCustomersRepository } from "@/tests/in-memory/in-memory-customers-repository";

let inMemoryCustomersRepository: InMemoryCustomersRepository;

describe("On send email when customer is created event", () => {
  beforeEach(() => {
    inMemoryCustomersRepository = new InMemoryCustomersRepository();

    new OnSendEmailWhenCustomerIsCreatedEvent(inMemoryCustomersRepository);
  });

  it("should be able to mark email as sent when an event is dispatched", async () => {
    const customer = makeCustomer();

    inMemoryCustomersRepository.items.push(customer);

    const useCreatedEvent = new CustomerCreatedEvent(customer);

    DomainEvents.notify(useCreatedEvent);

    expect(inMemoryCustomersRepository.items[0].emailAlreadySent).toBeTruthy();
  });
});
