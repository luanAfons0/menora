import { Email, PasswordHash } from "@/domain/value-objects";
import Uuid from "@/domain/value-objects/Uuid/Uuid";

class User {
  constructor(
    public readonly id: Uuid,
    public firstName: string,
    public lastName: string,
    public email: Email,
    public password: PasswordHash,
  ) {}
}

export default User;
