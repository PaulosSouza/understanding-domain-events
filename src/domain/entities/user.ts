import { Entity } from '@/core/entities/entity'

export interface IUserProps {
  name: string
  email: string
}

export class User extends Entity<IUserProps> {
  get name() {
    return this.props.name
  }

  get email() {
    return this.props.email
  }

  static create(props: IUserProps, id?: string) {
    const user = new User(props, id)

    return user
  }
}
