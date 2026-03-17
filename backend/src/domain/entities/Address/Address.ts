import AddressNumber from "@/domain/value-objects/AddressNumber/AddressNumber";
import ZipCode from "@/domain/value-objects/ZipCode/ZipCode";

class Address {
  constructor(
    public readonly id: string,
    public street: string,
    public city: string,
    public state: string,
    public country: string,
    public zipCode: ZipCode,
    public number: AddressNumber,
  ) {}
}

export default Address;
