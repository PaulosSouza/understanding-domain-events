import { User } from "@/domain/entities/user";
import { IUsersRepository } from "@/domain/repositories/users-repository";

export class InMemoryUsersRepository implements IUsersRepository {
  public items: User[] = [];

  async create(user: User): Promise<void> {
    this.items.push(user);
  }
}
