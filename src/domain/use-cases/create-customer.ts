import { Customer } from "../entities/customer";
import { CustomerCreatedEvent } from "../events/customer-created-event";
import { CustomersRepository } from "../repositories/customers-repository";

import { DomainEvents } from "@/core/events/domain-events";

interface CreateCustomerUseCaseInput {
  name: string;
  email: string;
}

interface CreateCustomerUseCaseOutput {
  customer: Customer;
}

export class CreateCustomerUseCase {
  constructor(private readonly customersRepository: CustomersRepository) {}

  async execute({
    email,
    name,
  }: CreateCustomerUseCaseInput): Promise<CreateCustomerUseCaseOutput> {
    const customer = Customer.create({
      name,
      email,
    });

    await this.customersRepository.create(customer);

    DomainEvents.notify(new CustomerCreatedEvent(customer));

    return {
      customer,
    };
  }
}
