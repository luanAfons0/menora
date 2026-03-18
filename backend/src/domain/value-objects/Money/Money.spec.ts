import { describe, expect, it } from "vitest";
import Money from "./Money";
import InvalidMoneyError from "@/domain/errors/validation/InvalidMoneyError";

describe("Money", () => {
  it("should create a valid money with default currency", () => {
    const act = new Money(10.99);
    expect(act.amount).toBe(10.99);
    expect(act.currency).toBe("BRL");
  });

  it("should create a valid money with a custom currency", () => {
    const act = new Money(10.99, "USD");
    expect(act.amount).toBe(10.99);
    expect(act.currency).toBe("USD");
  });

  it("should accept zero as amount", () => {
    const act = new Money(0);
    expect(act.amount).toBe(0);
  });

  it("should reject a negative amount", () => {
    expect(() => new Money(-1)).toThrow(InvalidMoneyError);
  });

  it("should reject NaN as amount", () => {
    expect(() => new Money(NaN)).toThrow(InvalidMoneyError);
  });

  it("should reject Infinity as amount", () => {
    expect(() => new Money(Infinity)).toThrow(InvalidMoneyError);
  });

  it("should reject an amount with more than two decimal places", () => {
    expect(() => new Money(10.999)).toThrow(InvalidMoneyError);
  });

  it("should reject a lowercase currency code", () => {
    expect(() => new Money(10, "usd")).toThrow(InvalidMoneyError);
  });

  it("should reject a currency code shorter than 3 characters", () => {
    expect(() => new Money(10, "US")).toThrow(InvalidMoneyError);
  });

  it("should reject a currency code longer than 3 characters", () => {
    expect(() => new Money(10, "USDD")).toThrow(InvalidMoneyError);
  });
});
