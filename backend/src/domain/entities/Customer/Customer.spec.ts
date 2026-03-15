import { describe, expect, it } from "vitest";
import { Email, PasswordHash } from "../../value-objects";
import Customer from "./Customer";

describe("Customer", () => {
  it("Should create a valid customer", () => {
    const id = "mock-uuid-example";
    const email = new Email("test@example.com");
    const passwordHash = PasswordHash.from("somehashedvaluehere");
    const act = new Customer(id, "Test", "Example", email, passwordHash);

    expect(act.id).toBe(id);
    expect(act.firstName).toBe("Test");
    expect(act.lastName).toBe("Example");
    expect(act.email.value).toBe(email.value);
    expect(act.password.hash).toBe(passwordHash.hash);
  });
});
