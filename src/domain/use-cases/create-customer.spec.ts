import { Customer } from "../entities/customer";

import { CreateCustomerUseCase } from "./create-customer";

import { DomainEvents } from "@/core/events/domain-events";
import { InMemoryCustomersRepository } from "@/tests/in-memory/in-memory-customers-repository";

let inMemoryCustomersRepository: InMemoryCustomersRepository;
let useCase: CreateCustomerUseCase;

describe("Create Customer", () => {
  beforeEach(() => {
    DomainEvents.shouldRun = false;

    inMemoryCustomersRepository = new InMemoryCustomersRepository();
    useCase = new CreateCustomerUseCase(inMemoryCustomersRepository);
  });

  it("should be able to create a new customer", async () => {
    const { customer } = await useCase.execute({
      name: "John Doe",
      email: "johndoe@email.com",
    });

    expect(customer).toBeInstanceOf(Customer);

    expect(inMemoryCustomersRepository.items[0]).toEqual(customer);
  });
});
