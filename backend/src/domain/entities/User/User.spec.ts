import { describe, expect, it } from "vitest";
import { createUserMock, USER_MOCK_DEFAULTS } from "./User.mock";

describe("User", () => {
  it("Should create a valid user", () => {
    const act = createUserMock();

    expect(act.id).toBe(USER_MOCK_DEFAULTS.id);
    expect(act.firstName).toBe(USER_MOCK_DEFAULTS.firstName);
    expect(act.lastName).toBe(USER_MOCK_DEFAULTS.lastName);
    expect(act.email.value).toBe(USER_MOCK_DEFAULTS.email.value);
    expect(act.password.hash).toBe(USER_MOCK_DEFAULTS.password.hash);
  });
});
