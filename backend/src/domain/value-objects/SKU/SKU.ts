import InvalidSKUError from "@/domain/errors/validation/InvalidSKUError";

class SKU {
  public readonly value: string;

  constructor(raw: string) {
    if (!/^[A-Z0-9-]+$/.test(raw)) {
      throw new InvalidSKUError("Invalid SKU format");
    }

    this.value = raw;
  }
}

export default SKU;
