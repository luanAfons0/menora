import { describe, expect, it } from "vitest";
import InvalidQuantityError from "@/domain/errors/validation/InvalidQuantityError";
import Quantity from "./Quantity";

describe("Quantity", () => {
  it("should create a valid Quantity", () => {
    const arrange = 10;
    const act = new Quantity(arrange);
    expect(act.value).toBe(arrange);
  });

  it("should reject a quantity lower to or equal than zero", () => {
    const arrange = 0;
    const act = () => new Quantity(arrange);
    expect(act).toThrow(InvalidQuantityError);
  });
});
