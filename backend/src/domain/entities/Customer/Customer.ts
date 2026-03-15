import { Email, PasswordHash } from "../../value-objects";

class Customer {
  constructor(
    public readonly id: string,
    public firstName: string,
    public lastName: string,
    public email: Email,
    public password: PasswordHash,
  ) {}
}

export default Customer;
