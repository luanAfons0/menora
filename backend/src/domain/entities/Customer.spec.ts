import { describe, it, expect } from "vitest";
import Customer from "./Customer";
import Email from "../value-objects/Email";
import PasswordHash from "../value-objects/PasswordHash";

describe("Customer", () => {
  it("Should create a valid customer", () => {
    const email = new Email("test@example.com");
    const passwordHash = PasswordHash.from("somehashedvaluehere");
    const act = new Customer(1, "Test", "Example", email, passwordHash);

    expect(act.id).toBe(1);
    expect(act.firstName).toBe("Test");
    expect(act.lastName).toBe("Example");
    expect(act.email.value).toBe(email.value);
    expect(act.password.hash).toBe(passwordHash.hash);
  });
});
