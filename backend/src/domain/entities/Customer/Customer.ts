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
    private _email: Email,
    private _password: PasswordHash,
    private _addresses: Array<Address> = [],
  ) {}

  get email() {
    return this._email;
  }

  public updateEmail(email: Email) {
    this._email = email;
  }

  get password() {
    return this._password;
  }

  public updatePassword(password: PasswordHash) {
    this._password = password;
  }

  get addresses(): ReadonlyArray<Address> {
    return this._addresses;
  }

  public addAddress(address: Address): void {
    if (this._addresses.length >= 5) {
      throw new CustomerLimitAddressError();
    }

    this._addresses.push(address);
  }

  public removeAddress(id: Uuid): void {
    const index = this._addresses.findIndex(
      (address) => address.id.value === id.value,
    );

    if (index === -1) throw new AddressNotFoundError();

    this._addresses.splice(index, 1);
  }

  public updateAddress(newInfos: Address) {
    const index = this._addresses.findIndex(
      (address) => address.id.value === newInfos.id.value,
    );

    if (index === -1) throw new AddressNotFoundError();

    this._addresses[index] = newInfos;
  }
}

export default Customer;
