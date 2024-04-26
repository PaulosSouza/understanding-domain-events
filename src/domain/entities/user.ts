import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/types/optional";

export interface UserProps {
  name: string;
  email: string;
  emailAlreadySent: boolean;
}

export class User extends Entity<UserProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get emailAlreadySent() {
    return this.props.emailAlreadySent;
  }

  static create(props: Optional<UserProps, "emailAlreadySent">, id?: string) {
    const user = new User(
      {
        ...props,
        emailAlreadySent: props.emailAlreadySent ?? false,
      },
      id,
    );

    return user;
  }

  markEmailAsAlreadySent() {
    this.props.emailAlreadySent = true;
  }
}
