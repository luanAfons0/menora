import { describe, expect, it } from "vitest";
import { AddressNotFoundError } from "../../errors";
import {
  createAddressMock,
  ADDRESS_MOCK_DEFAULTS,
} from "../Address/Address.mock";
import { createCustomerMock, CUSTOMER_MOCK_DEFAULTS } from "./Customer.mock";
import { AddressNumber, ZipCode } from "../../value-objects";

describe("Customer", () => {
  it("Should create a valid customer", () => {
    const act = createCustomerMock();

    expect(act.id).toBe(CUSTOMER_MOCK_DEFAULTS.id);
    expect(act.firstName).toBe(CUSTOMER_MOCK_DEFAULTS.firstName);
    expect(act.lastName).toBe(CUSTOMER_MOCK_DEFAULTS.lastName);
    expect(act.email.value).toBe(CUSTOMER_MOCK_DEFAULTS.email.value);
    expect(act.password.hash).toBe(CUSTOMER_MOCK_DEFAULTS.passwordHash.hash);
  });

  it("Should add a address to the customer", () => {
    const act = createCustomerMock();
    const address = createAddressMock();

    act.addAddress(address);
    expect(act.addresses).toHaveLength(1);

    const firstAddress = act.addresses[0];

    expect(firstAddress.id).toBe(ADDRESS_MOCK_DEFAULTS.id);
    expect(firstAddress.street).toBe(ADDRESS_MOCK_DEFAULTS.street);
    expect(firstAddress.city).toBe(ADDRESS_MOCK_DEFAULTS.city);
    expect(firstAddress.state).toBe(ADDRESS_MOCK_DEFAULTS.state);
    expect(firstAddress.country).toBe(ADDRESS_MOCK_DEFAULTS.country);
    expect(firstAddress.zipCode.value).toBe(
      ADDRESS_MOCK_DEFAULTS.zipCode.value,
    );
    expect(firstAddress.number.value).toBe(ADDRESS_MOCK_DEFAULTS.number.value);
  });

  it("Should update a user address", () => {
    const act = createCustomerMock();
    const address = createAddressMock();

    act.addAddress(address);
    expect(act.addresses).toHaveLength(1);

    const changedNumber = new AddressNumber("321");
    const changedZipCode = new ZipCode("98765-432");

    act.updateAddress({
      id: address.id,
      city: "changed-city",
      country: "changed-country",
      number: changedNumber,
      state: "changed-state",
      street: "changed-street",
      zipCode: changedZipCode,
    });

    const firstAddress = act.addresses[0];

    expect(firstAddress.id).toBe(address.id);
    expect(firstAddress.street).toBe("changed-street");
    expect(firstAddress.city).toBe("changed-city");
    expect(firstAddress.state).toBe("changed-state");
    expect(firstAddress.country).toBe("changed-country");
    expect(firstAddress.zipCode.value).toBe(changedZipCode.value);
    expect(firstAddress.number.value).toBe(changedNumber.value);
  });

  it("Should remove a address to the customer", () => {
    const act = createCustomerMock();
    const address = createAddressMock();

    act.addAddress(address);
    act.removeAddress(address.id);
    expect(act.addresses).toHaveLength(0);
  });

  it("should throw when removing a non-existing address", () => {
    const customer = createCustomerMock();
    expect(() => customer.removeAddress("non-existing-id")).toThrow(
      AddressNotFoundError,
    );
  });
});
