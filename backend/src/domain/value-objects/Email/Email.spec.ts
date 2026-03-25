import { describe, expect, it } from "vitest";
import { InvalidEmailError } from "@/domain/errors";
import Email from "./Email";

describe("Email", () => {
  it("Should reject a email without @", () => {
    const arrange = "test";
    const act = () => new Email(arrange);
    expect(act).toThrow(InvalidEmailError);
  });

  it("Should reject a email without .", () => {
    const arrange = "test@";
    const act = () => new Email(arrange);
    expect(act).toThrow(InvalidEmailError);
  });

  it("Should reject a email without a domain", () => {
    const arrange = "test@.com";
    const act = () => new Email(arrange);
    expect(act).toThrow(InvalidEmailError);
  });

  it("Should create a valid email", () => {
    const arrange = "test@example.com";
    const act = new Email(arrange);
    expect(act.value).toBe(arrange);
  });
});
