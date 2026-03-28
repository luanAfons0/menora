import { describe, expect, it } from "vitest";
import InvalidCheckoutStatusError from "@/domain/errors/validation/InvalidCheckoutStatusError";
import CheckoutStatus from "./CheckoutStatus";

describe("CheckoutStatus", () => {
  it("Should create a valid CheckoutStatus", () => {
    const arrange1 = "PAID";
    const arrange2 = "IN_PROGRESS";
    const arrange3 = "FINISHED";

    const act1 = new CheckoutStatus(arrange1);
    const act2 = new CheckoutStatus(arrange2);
    const act3 = new CheckoutStatus(arrange3);

    expect(act1.value).toBe("PAID");
    expect(act2.value).toBe("IN_PROGRESS");
    expect(act3.value).toBe("FINISHED");
  });

  it("Should reject invalid CheckoutStatus", () => {
    const arrange = "ERROR_EXAMPLE";
    const act = () => new CheckoutStatus(arrange);
    expect(act).toThrow(InvalidCheckoutStatusError);
  });
});
