import { Email, PasswordHash } from "@/domain/value-objects";
import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import User from "./User";

const USER_MOCK_DEFAULTS = {
  id: new Uuid(UUID_MOCK_VALUE),
  email: new Email("test@example.com"),
  password: PasswordHash.from("somehashedvaluehere"),
  firstName: "Test",
  lastName: "Example",
};

function createUserMock(customValues?: Partial<User>) {
  const mergedValues = {
    id: USER_MOCK_DEFAULTS.id,
    email: USER_MOCK_DEFAULTS.email,
    password: USER_MOCK_DEFAULTS.password,
    firstName: USER_MOCK_DEFAULTS.firstName,
    lastName: USER_MOCK_DEFAULTS.lastName,
    ...customValues,
  };

  return new User(
    mergedValues.id,
    mergedValues.firstName,
    mergedValues.lastName,
    mergedValues.email,
    mergedValues.password,
  );
}

export { createUserMock, USER_MOCK_DEFAULTS };
