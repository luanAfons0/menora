import { describe, expect, it } from "vitest";
import AddressNumber from "./AddressNumber";
import { InvalidAddressNumberError } from "@/domain/errors";

describe("AddressNumber", () => {
  it("should reject a number that contains letters", () => {
    expect(() => new AddressNumber("asd12-123")).toThrow(
      InvalidAddressNumberError,
    );

    expect(() => new AddressNumber("ASD12-123")).toThrow(
      InvalidAddressNumberError,
    );
  });

  it("Should create a valid address number", () => {
    const arrange = "12345-678";
    const act = new AddressNumber(arrange);
    expect(act.value).toBe(arrange);
  });
});
