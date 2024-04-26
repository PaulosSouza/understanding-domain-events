import { User } from "../entities/user";

export interface UsersRepository {
  create(user: User): Promise<void>;
  save(user: User): Promise<void>;
}
