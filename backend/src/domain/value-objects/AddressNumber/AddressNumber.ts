import { InvalidAddressNumberError } from "@/domain/errors";

class AddressNumber {
  public readonly value: string;

  constructor(raw: string) {
    if (/[a-zA-Z]/.test(raw)) {
      throw new InvalidAddressNumberError(
        "The address number can't have any letters",
      );
    }

    this.value = raw;
  }
}

export default AddressNumber;
