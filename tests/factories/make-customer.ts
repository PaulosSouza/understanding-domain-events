import { faker } from "@faker-js/faker/locale/pt_BR";

import { CustomerProps, Customer } from "@/domain/entities/customer";

export function makeCustomer(
  override: Partial<CustomerProps> = {},
  id?: string,
) {
  const customer = Customer.create(
    {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      ...override,
    },
    id,
  );

  return customer;
}
