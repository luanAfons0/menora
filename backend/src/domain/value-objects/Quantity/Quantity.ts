import InvalidQuantityError from "@/domain/errors/validation/InvalidQuantityError";

class Quantity {
  public readonly value: number;

  constructor(raw: number) {
    if (raw <= 0) {
      throw new InvalidQuantityError(
        "Quantity can't be equal to or lower than zero",
      );
    }

    this.value = raw;
  }
}

export default Quantity;
