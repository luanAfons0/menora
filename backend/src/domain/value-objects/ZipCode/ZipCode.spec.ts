import { describe, expect, it } from "vitest";
import ZipCode from "./ZipCode";
import { InvalidZipCodeError } from "@/domain/errors";

describe("ZipCode", () => {
  it("should reject a zipCode without a dash", () => {
    expect(() => new ZipCode("12345678")).toThrow(InvalidZipCodeError);
  });

  it("should reject a wrongly formatted zipCode", () => {
    expect(() => new ZipCode("1234-5678")).toThrow(InvalidZipCodeError);
  });

  it("Should create a valid zipCode", () => {
    const arrange = "12345-678";
    const act = new ZipCode(arrange);
    expect(act.value).toBe(arrange);
  });
});
