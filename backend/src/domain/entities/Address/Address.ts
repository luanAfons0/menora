import type AddressNumber from "@/domain/value-objects/AddressNumber/AddressNumber";
import type Uuid from "@/domain/value-objects/Uuid/Uuid";
import type ZipCode from "@/domain/value-objects/ZipCode/ZipCode";

class Address {
  constructor(
    public readonly id: Uuid,
    public street: string,
    public city: string,
    public state: string,
    public country: string,
    private _zipCode: ZipCode,
    private _number: AddressNumber,
  ) {}

  get zipCode() {
    return this._zipCode;
  }

  public updateZipCode(zipCode: ZipCode) {
    this._zipCode = zipCode;
  }

  get number() {
    return this._number;
  }

  public updateNumber(number: AddressNumber) {
    this._number = number;
  }
}

export default Address;
