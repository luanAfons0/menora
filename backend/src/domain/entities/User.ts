import Email from "../value-objects/Email";
import PasswordHash from "../value-objects/PasswordHash";

class User {
  constructor(
    public readonly id: number,
    public name: string,
    public lastName: string,
    public email: Email,
    public password: PasswordHash,
  ) {}
}

export default User;
