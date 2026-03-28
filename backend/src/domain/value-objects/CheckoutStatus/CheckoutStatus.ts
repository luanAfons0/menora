import InvalidCheckoutStatusError from "@/domain/errors/validation/InvalidCheckoutStatusError";

class CheckoutStatus {
  public readonly value: "PAID" | "IN_PROGRESS" | "FINISHED";

  constructor(raw: string) {
    if (raw !== "PAID" && raw !== "IN_PROGRESS" && raw !== "FINISHED") {
      throw new InvalidCheckoutStatusError(
        "Expected 'PAID', 'IN_PROGRESS' or 'FINISHED'",
      );
    }

    this.value = raw;
  }
}

export default CheckoutStatus;
