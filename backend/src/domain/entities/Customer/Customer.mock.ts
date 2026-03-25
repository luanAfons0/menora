import { Email, PasswordHash } from "@/domain/value-objects";
import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import Customer from "./Customer";

const CUSTOMER_MOCK_DEFAULTS = {
  id: new Uuid(UUID_MOCK_VALUE),
  email: new Email("test@example.com"),
  password: PasswordHash.from("somehashedvaluehere"),
  firstName: "Test",
  lastName: "Example",
};

function createCustomerMock(customValues?: Partial<Customer>) {
  const mergedValues = {
    id: CUSTOMER_MOCK_DEFAULTS.id,
    email: CUSTOMER_MOCK_DEFAULTS.email,
    password: CUSTOMER_MOCK_DEFAULTS.password,
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

export { CUSTOMER_MOCK_DEFAULTS, createCustomerMock };
