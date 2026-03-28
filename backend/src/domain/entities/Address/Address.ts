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
    public readonly zipCode: ZipCode,
    public readonly number: AddressNumber,
  ) {}
}

export default Address;
