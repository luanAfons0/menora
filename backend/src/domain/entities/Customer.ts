import Email from "../value-objects/Email";
import PasswordHash from "../value-objects/PasswordHash";

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
