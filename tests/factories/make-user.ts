import { faker } from "@faker-js/faker/locale/pt_BR";

import { UserProps, User } from "@/domain/entities/user";

export function makeUser(override: Partial<UserProps> = {}, id?: string) {
  const user = User.create(
    {
      email: faker.internet.email(),
      name: faker.person.fullName(),
      ...override,
    },
    id,
  );

  return user;
}
