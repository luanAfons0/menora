import { AddressNotFoundError } from "@/domain/errors";
import { Email, PasswordHash } from "@/domain/value-objects";
import Address from "@/domain/entities/Address/Address";
import CustomerLimitAddressError from "@/domain/errors/logical/CustomerLimitAddressError";

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
    if (this.addresses.length >= 5) {
      throw new CustomerLimitAddressError();
    }

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
