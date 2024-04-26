import { Entity } from "@/core/entities/entity";
import { Optional } from "@/core/types/optional";

export interface CustomerProps {
  name: string;
  email: string;
  emailAlreadySent: boolean;
}

export class Customer extends Entity<CustomerProps> {
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get emailAlreadySent() {
    return this.props.emailAlreadySent;
  }

  static create(
    props: Optional<CustomerProps, "emailAlreadySent">,
    id?: string,
  ) {
    const customer = new Customer(
      {
        ...props,
        emailAlreadySent: props.emailAlreadySent ?? false,
      },
      id,
    );

    return customer;
  }

  markEmailAsAlreadySent() {
    this.props.emailAlreadySent = true;
  }
}
