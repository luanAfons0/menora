import { InvalidPasswordError } from "@/domain/errors";

class Password {
  public value: string;

  constructor(raw: string) {
    if (raw.length < 8) {
      throw new InvalidPasswordError("Password must be at least 8 characters");
    }

    if (!/[A-Z]/.test(raw)) {
      throw new InvalidPasswordError(
        "Password must contain an uppercase letter",
      );
    }

    if (!/[0-9]/.test(raw)) {
      throw new InvalidPasswordError("Password must contain a number");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(raw)) {
      throw new InvalidPasswordError(
        "Password must contain a special character (!@#$%^&*(),.?:{}|<>)",
      );
    }

    this.value = raw;
  }
}

export default Password;
