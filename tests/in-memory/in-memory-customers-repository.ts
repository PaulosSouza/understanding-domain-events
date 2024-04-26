import { Customer } from "@/domain/entities/customer";
import { CustomersRepository } from "@/domain/repositories/customers-repository";

export class InMemoryCustomersRepository implements CustomersRepository {
  public items: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.items.push(customer);
  }

  async save(customer: Customer): Promise<void> {
    const customerIndex = this.items.findIndex(
      (customerItem) => customerItem.id === customer.id,
    );

    this.items[customerIndex] = customer;
  }
}
