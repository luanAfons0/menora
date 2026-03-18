import InvalidUuidError from "@/domain/errors/validation/InvalidUuid";

class Uuid {
  public value: string;

  constructor(raw: string) {
    if (
      !/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/.test(raw)
    ) {
      throw new InvalidUuidError("Invalid UUID");
    }

    this.value = raw;
  }
}

export default Uuid;
