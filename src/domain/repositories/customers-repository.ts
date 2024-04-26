import { Customer } from "../entities/customer";

export interface CustomersRepository {
  create(customer: Customer): Promise<void>;
  save(customer: Customer): Promise<void>;
}
