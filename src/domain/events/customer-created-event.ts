import { Customer } from "../entities/customer";

import { EventInterface } from "@/core/events/event-interface";

interface CustomerCreatedEventProps {
  customer: Customer;
}

export class CustomerCreatedEvent
  implements EventInterface<CustomerCreatedEventProps>
{
  public occuredAt: Date;
  public eventData: CustomerCreatedEventProps;

  constructor(customer: Customer) {
    this.occuredAt = new Date();
    this.eventData = { customer };
  }
}
