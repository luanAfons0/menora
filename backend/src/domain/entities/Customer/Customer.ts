import { Email, PasswordHash } from "../../value-objects";
import { AddressNotFoundError } from "../../errors";
import Address from "../Address/Address";

class Customer {
  constructor(
    public readonly id: string,
    public firstName: string,
    public lastName: string,
    public email: Email,
    public password: PasswordHash,
    public addresses: Array<Address> = [],
  ) {}

  public addAddress(address: Address): void {
    this.addresses.push(address);
  }

  public removeAddress(id: string): void {
    const index = this.addresses.findIndex((address) => address.id === id);
    if (index === -1) throw new AddressNotFoundError();
    this.addresses.splice(index, 1);
  }
}

export default Customer;
