import { InvalidZipCodeError } from "@/domain/errors";

class ZipCode {
  public readonly value: string;

  constructor(raw: string) {
    if (!/^\d{5}-\d{3}$/.test(raw)) {
      throw new InvalidZipCodeError("ZipCode must follow the format 00000-000");
    }

    this.value = raw;
  }
}

export default ZipCode;
