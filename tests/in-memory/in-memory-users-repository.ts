import { User } from "@/domain/entities/user";
import { UsersRepository } from "@/domain/repositories/users-repository";

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(user: User): Promise<void> {
    this.items.push(user);
  }

  async save(user: User): Promise<void> {
    const userIndex = this.items.findIndex(
      (userItem) => userItem.id === user.id,
    );

    this.items[userIndex] = user;
  }
}
