import { describe, expect, it } from "vitest";
import PasswordHash from "./PasswordHash";

describe("PasswordHash", () => {
  it("Should create a hash object", () => {
    const arrange = "Abcdefg1@";
    const passwordHash = PasswordHash.from(arrange);
    expect(passwordHash.hash).toBe(arrange);
  });
});
