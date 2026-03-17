import { Email, PasswordHash } from "@/domain/value-objects";
import Customer from "./Customer";

const CUSTOMER_MOCK_DEFAULTS = {
  id: "mock-uuid-example",
  email: new Email("test@example.com"),
  passwordHash: PasswordHash.from("somehashedvaluehere"),
  firstName: "Test",
  lastName: "Example",
};

function createCustomerMock(customValues?: Partial<Customer>) {
  const mergedValues = {
    id: CUSTOMER_MOCK_DEFAULTS.id,
    email: CUSTOMER_MOCK_DEFAULTS.email,
    password: CUSTOMER_MOCK_DEFAULTS.passwordHash,
    firstName: CUSTOMER_MOCK_DEFAULTS.firstName,
    lastName: CUSTOMER_MOCK_DEFAULTS.lastName,
    ...customValues,
  };

  return new Customer(
    mergedValues.id,
    mergedValues.firstName,
    mergedValues.lastName,
    mergedValues.email,
    mergedValues.password,
  );
}

export { createCustomerMock, CUSTOMER_MOCK_DEFAULTS };
