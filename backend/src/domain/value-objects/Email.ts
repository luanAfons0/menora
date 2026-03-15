import InvalidEmailError from "../errors/InvalidEmailError";

class Email {
  public value: string;

  constructor(raw: string) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw)) {
      throw new InvalidEmailError(`"${raw}" is not a valid email`);
    }

    this.value = raw;
  }
}

export default Email;
