import InvalidProductNameError from "@/domain/errors/validation/InvalidProductNameError";

class ProductName {
  public value: string;

  constructor(raw: string) {
    if (!raw || raw.trim().length < 3) {
      throw new InvalidProductNameError("Invalid name");
    }

    this.value = raw;
  }
}

export default ProductName;
