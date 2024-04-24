import { User } from '../entities/user'

export interface IUsersRepository {
  create(user: User): Promise<void>
}
