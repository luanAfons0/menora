import InvalidMoneyError from "@/domain/errors/validation/InvalidMoneyError";

class Money {
  public amount: number;
  public currency: string = "BRL";

  constructor(rawAmount: number, rawCurrency?: string) {
    if (!Number.isFinite(rawAmount)) {
      throw new InvalidMoneyError("Amount must be a finite number");
    }

    if (rawAmount < 0) {
      throw new InvalidMoneyError("Price cannot be negative");
    }

    if (/\.\d{3,}/.test(String(rawAmount))) {
      throw new InvalidMoneyError("Value should have two decimal points");
    }

    if (rawCurrency) {
      if (!/^[A-Z]{3}$/.test(rawCurrency)) {
        throw new InvalidMoneyError("Currency must be a valid ISO 4217 code");
      }
      this.currency = rawCurrency;
    }

    this.amount = rawAmount;
  }
}

export default Money;
