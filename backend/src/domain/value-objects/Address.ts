import AddressNumber from "../value-objects/AddressNumber";
import ZipCode from "../value-objects/ZipCode";

class Address {
  constructor(
    public street: string,
    public city: string,
    public state: string,
    public country: string,
    public zipCode: ZipCode,
    public number: AddressNumber,
  ) {}
}

export default Address;
