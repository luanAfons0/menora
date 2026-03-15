import AddressNumber from "../AddressNumber/AddressNumber";
import ZipCode from "../ZipCode/ZipCode";

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
