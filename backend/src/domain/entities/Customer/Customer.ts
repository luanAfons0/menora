import { AddressNotFoundError } from "../../errors";
import { Email, PasswordHash } from "../../value-objects";
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

  public updateAddress(newInfos: Address) {
    const index = this.addresses.findIndex(
      (address) => address.id === newInfos.id,
    );

    if (index === -1) throw new AddressNotFoundError();

    this.addresses[index] = newInfos;
  }
}

export default Customer;
