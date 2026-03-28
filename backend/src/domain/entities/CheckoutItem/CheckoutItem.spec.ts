import { describe, expect, it } from "vitest";
import {
  CHECKOUT_ITEM_MOCK_DEFAULT,
  createCheckoutItemMock,
} from "./CheckoutItem.mock";

describe("CheckoutItem", () => {
  it("Should create a valid checkout item", () => {
    const act = createCheckoutItemMock();

    expect(act.checkoutId.value).toBe(
      CHECKOUT_ITEM_MOCK_DEFAULT.checkoutId.value,
    );
    expect(act.id.value).toBe(CHECKOUT_ITEM_MOCK_DEFAULT.id.value);
    expect(act.productId.value).toBe(
      CHECKOUT_ITEM_MOCK_DEFAULT.productId.value,
    );
    expect(act.quantity.value).toBe(CHECKOUT_ITEM_MOCK_DEFAULT.quantity.value);
    expect(act.unitPrice.amount).toBe(
      CHECKOUT_ITEM_MOCK_DEFAULT.unitPrice.amount,
    );
    expect(act.unitPrice.currency).toBe(
      CHECKOUT_ITEM_MOCK_DEFAULT.unitPrice.currency,
    );
  });
});
