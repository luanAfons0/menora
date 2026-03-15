import { describe, expect, it } from "vitest";
import { AddressNotFoundError } from "../../errors";
import {
  createAddressMock,
  ADDRESS_MOCK_DEFAULTS,
} from "../Address/Address.mock";
import { createCustomerMock, CUSTOMER_MOCK_DEFAULTS } from "./Customer.mock";

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

    expect(act.addresses[0].id).toBe(ADDRESS_MOCK_DEFAULTS.id);
    expect(act.addresses[0].street).toBe(ADDRESS_MOCK_DEFAULTS.street);
    expect(act.addresses[0].city).toBe(ADDRESS_MOCK_DEFAULTS.city);
    expect(act.addresses[0].state).toBe(ADDRESS_MOCK_DEFAULTS.state);
    expect(act.addresses[0].country).toBe(ADDRESS_MOCK_DEFAULTS.country);
    expect(act.addresses[0].zipCode.value).toBe(
      ADDRESS_MOCK_DEFAULTS.zipCode.value,
    );
    expect(act.addresses[0].number.value).toBe(
      ADDRESS_MOCK_DEFAULTS.number.value,
    );
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
