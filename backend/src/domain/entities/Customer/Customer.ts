import type Address from "@/domain/entities/Address/Address";
import { AddressNotFoundError } from "@/domain/errors";
import CustomerLimitAddressError from "@/domain/errors/logical/CustomerLimitAddressError";
import type { Email, PasswordHash } from "@/domain/value-objects";
import type Uuid from "@/domain/value-objects/Uuid/Uuid";

class Customer {
  constructor(
    public readonly id: Uuid,
    public firstName: string,
    public lastName: string,
    public readonly email: Email,
    public readonly password: PasswordHash,
    public addresses: Array<Address> = [],
  ) {}

  public addAddress(address: Address): void {
    if (this.addresses.length >= 5) {
      throw new CustomerLimitAddressError();
    }

    this.addresses.push(address);
  }

  public removeAddress(id: Uuid): void {
    const index = this.addresses.findIndex(
      (address) => address.id.value === id.value,
    );

    if (index === -1) throw new AddressNotFoundError();

    this.addresses.splice(index, 1);
  }

  public updateAddress(newInfos: Address) {
    const index = this.addresses.findIndex(
      (address) => address.id.value === newInfos.id.value,
    );

    if (index === -1) throw new AddressNotFoundError();

    this.addresses[index] = newInfos;
  }
}

export default Customer;
