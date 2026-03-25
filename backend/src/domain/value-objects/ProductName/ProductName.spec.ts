import { describe, expect, it } from "vitest";
import InvalidProductNameError from "@/domain/errors/validation/InvalidProductNameError";
import ProductName from "./ProductName";

describe("ProductName", () => {
  it("should create a valid product name", () => {
    const arrange = "Running Shoes";
    const act = new ProductName(arrange);
    expect(act.value).toBe(arrange);
  });

  it("should reject an empty name", () => {
    expect(() => new ProductName("")).toThrow(InvalidProductNameError);
  });

  it("should reject a name shorter than 3 characters", () => {
    expect(() => new ProductName("AB")).toThrow(InvalidProductNameError);
  });

  it("should accept a name with exactly 3 characters", () => {
    const act = new ProductName("ABC");
    expect(act.value).toBe("ABC");
  });

  it("should reject a name with only whitespace", () => {
    expect(() => new ProductName("   ")).toThrow(InvalidProductNameError);
  });
});
