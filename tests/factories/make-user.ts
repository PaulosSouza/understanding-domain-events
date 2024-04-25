import { faker } from "@faker-js/faker/locale/pt_BR";

import { IUserProps, User } from "@/domain/entities/user";

export function makeUser(override: Partial<IUserProps> = {}, id?: string) {
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
