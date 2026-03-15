import { describe, expect, it } from "vitest";
import {
  AddressNumber,
  Email,
  PasswordHash,
  ZipCode,
} from "../../value-objects";
import Customer from "./Customer";
import Address from "../Address/Address";
import { AddressNotFoundError } from "../../errors";

describe("Customer", () => {
  const id = "mock-uuid-example";
  const email = new Email("test@example.com");
  const passwordHash = PasswordHash.from("somehashedvaluehere");

  it("Should create a valid customer", () => {
    const act = new Customer(id, "Test", "Example", email, passwordHash);

    expect(act.id).toBe(id);
    expect(act.firstName).toBe("Test");
    expect(act.lastName).toBe("Example");
    expect(act.email.value).toBe(email.value);
    expect(act.password.hash).toBe(passwordHash.hash);
  });

  it("Should add a address to the customer", () => {
    const act = new Customer(id, "Test", "Example", email, passwordHash);

    const addressId = "mock-uuid";
    const zipCode = new ZipCode("12345-678");
    const addressNumber = new AddressNumber("123");
    const address = new Address(
      addressId,
      "street",
      "city",
      "state",
      "country",
      zipCode,
      addressNumber,
    );

    act.addAddress(address);
    expect(act.addresses).toHaveLength(1);
    expect(act.addresses[0].id).toBe(addressId);
    expect(act.addresses[0].street).toBe("street");
    expect(act.addresses[0].city).toBe("city");
    expect(act.addresses[0].country).toBe("country");
    expect(act.addresses[0].number.value).toBe("123");
    expect(act.addresses[0].state).toBe("state");
    expect(act.addresses[0].zipCode.value).toBe(zipCode.value);
  });

  it("Should remove a address to the customer", () => {
    const act = new Customer(id, "Test", "Example", email, passwordHash);

    const addressId = "mock-uuid";
    const zipCode = new ZipCode("12345-678");
    const addressNumber = new AddressNumber("123");
    const address = new Address(
      addressId,
      "street",
      "city",
      "state",
      "country",
      zipCode,
      addressNumber,
    );

    act.addAddress(address);
    act.removeAddress(addressId);
    expect(act.addresses).toHaveLength(0);
  });

  it("should throw when removing a non-existing address", () => {
    const customer = new Customer(id, "Test", "Example", email, passwordHash);
    expect(() => customer.removeAddress("non-existing-id")).toThrow(AddressNotFoundError);
  });
});
