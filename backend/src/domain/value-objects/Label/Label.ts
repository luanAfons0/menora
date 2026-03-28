import { ValidationError } from "@/domain/errors";

class Label {
  public readonly value: string;

  constructor(raw: string) {
    if (!/^[\w&.-]+$/.test(raw)) {
      throw new ValidationError(
        "The category label can't have special characters",
      );
    }

    this.value = raw;
  }
}

export default Label;
