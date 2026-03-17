import { Email, PasswordHash } from "@/domain/value-objects";

class User {
  constructor(
    public readonly id: string,
    public firstName: string,
    public lastName: string,
    public email: Email,
    public password: PasswordHash,
  ) {}
}

export default User;
