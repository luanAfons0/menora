import { describe, expect, it } from "vitest";
import { InvalidPasswordError } from "@/domain/errors";
import Password from "./Password";

describe("Password", () => {
  it("Should reject a password with less that 8 characters", () => {
    const arrange = "1234567";
    const act = () => new Password(arrange);
    expect(act).toThrow(InvalidPasswordError);
  });

  it("Should reject a password without a uppercase letter", () => {
    const arrange = "abcefghijk1@";
    const act = () => new Password(arrange);
    expect(act).toThrow(InvalidPasswordError);
  });

  it("Should reject a password without a number", () => {
    const arrange = "Abcefghijk@";
    const act = () => new Password(arrange);
    expect(act).toThrow(InvalidPasswordError);
  });

  it("Should reject a password without a special character", () => {
    const arrange = "Abcefghijk1";
    const act = () => new Password(arrange);
    expect(act).toThrow(InvalidPasswordError);
  });

  it("Should create a password object", () => {
    const arrange = "Abcefghijk@1";
    const act = new Password(arrange);
    expect(act.value).toBe(arrange);
  });
});
