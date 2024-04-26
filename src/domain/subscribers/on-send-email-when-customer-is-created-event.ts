import { CustomerCreatedEvent } from "../events/customer-created-event";
import { CustomersRepository } from "../repositories/customers-repository";

import { DomainEvents } from "@/core/events/domain-events";
import { EventHandler } from "@/core/events/event-handler";

export class OnSendEmailWhenCustomerIsCreatedEvent
  implements EventHandler<CustomerCreatedEvent>
{
  constructor(private readonly customersRepository: CustomersRepository) {
    DomainEvents.register(CustomerCreatedEvent.name, this);
  }

  async handler({ eventData: { customer } }: CustomerCreatedEvent) {
    customer.markEmailAsAlreadySent();

    await this.customersRepository.save(customer);
  }
}
