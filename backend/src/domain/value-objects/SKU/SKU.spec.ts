import { describe, expect, it } from "vitest";
import SKU from "./SKU";
import InvalidSKUError from "@/domain/errors/validation/InvalidSKUError";

describe("SKU", () => {
  it("should create a valid SKU", () => {
    const arrange = "SHOE-RED-42";
    const act = new SKU(arrange);
    expect(act.value).toBe(arrange);
  });

  it("should accept a SKU with only uppercase letters", () => {
    const act = new SKU("SHOES");
    expect(act.value).toBe("SHOES");
  });

  it("should accept a SKU with only digits", () => {
    const act = new SKU("12345");
    expect(act.value).toBe("12345");
  });

  it("should reject a SKU with lowercase letters", () => {
    expect(() => new SKU("shoe-red-42")).toThrow(InvalidSKUError);
  });

  it("should reject a SKU with spaces", () => {
    expect(() => new SKU("SHOE RED 42")).toThrow(InvalidSKUError);
  });

  it("should reject a SKU with special characters", () => {
    expect(() => new SKU("SHOE_RED@42")).toThrow(InvalidSKUError);
  });

  it("should reject an empty SKU", () => {
    expect(() => new SKU("")).toThrow(InvalidSKUError);
  });
});
