import type { Email, PasswordHash } from "@/domain/value-objects";
import type Uuid from "@/domain/value-objects/Uuid/Uuid";

class User {
  constructor(
    public readonly id: Uuid,
    public firstName: string,
    public lastName: string,
    private _email: Email,
    private _password: PasswordHash,
  ) {}

  get email() {
    return this._email;
  }

  public updateEmail(email: Email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  public updatePassword(password: PasswordHash) {
    this._password = password;
  }
}

export default User;
