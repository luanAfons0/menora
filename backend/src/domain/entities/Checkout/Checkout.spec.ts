import { describe, expect, it } from "vitest";
import CheckoutItemNotFoundError from "@/domain/errors/not-found/CheckoutItemNotFoundError";
import CheckoutStatus from "@/domain/value-objects/CheckoutStatus/CheckoutStatus";
import Quantity from "@/domain/value-objects/Quantity/Quantity";
import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import { createCheckoutItemMock } from "../CheckoutItem/CheckoutItem.mock";
import { CHECKOUT_MOCK_DEFAULTS, createCheckoutMock } from "./Checkout.mock";

describe("Checkout", () => {
  it("should create a valid checkout", () => {
    const act = createCheckoutMock();

    expect(act.id.value).toBe(CHECKOUT_MOCK_DEFAULTS.id.value);
    expect(act.customerId.value).toBe(CHECKOUT_MOCK_DEFAULTS.customerId.value);
    expect(act.status.value).toBe(CHECKOUT_MOCK_DEFAULTS.status.value);
    expect(act.checkoutItems).toHaveLength(0);
    expect(act.total.amount).toBe(0);
    expect(act.orderId).toBeUndefined();
  });

  describe("addCheckoutItem", () => {
    it("should add a new item and recalculate total", () => {
      const checkout = createCheckoutMock();
      const item = createCheckoutItemMock();

      checkout.addCheckoutItem(item);

      expect(checkout.checkoutItems).toHaveLength(1);
      expect(checkout.total.amount).toBe(
        item.unitPrice.amount * item.quantity.value,
      );
    });

    it("should merge quantities when adding the same product twice", () => {
      const checkout = createCheckoutMock();
      const item = createCheckoutItemMock();

      checkout.addCheckoutItem(item);
      checkout.addCheckoutItem(item);

      expect(checkout.checkoutItems).toHaveLength(1);
      expect(checkout.checkoutItems[0].quantity.value).toBe(
        item.quantity.value * 2,
      );
    });

    it("should add two different products as separate items", () => {
      const checkout = createCheckoutMock();
      const itemA = createCheckoutItemMock();
      const itemB = createCheckoutItemMock({
        id: new Uuid("a1b2c3d4-e5f6-7890-abcd-ef1234567890"),
        productId: new Uuid("a1b2c3d4-e5f6-7890-abcd-ef1234567890"),
      });

      checkout.addCheckoutItem(itemA);
      checkout.addCheckoutItem(itemB);

      expect(checkout.checkoutItems).toHaveLength(2);
    });
  });

  describe("removeCheckoutItem", () => {
    it("should remove an item and recalculate total", () => {
      const checkout = createCheckoutMock();
      const item = createCheckoutItemMock();

      checkout.addCheckoutItem(item);
      checkout.removeCheckoutItem(item.id);

      expect(checkout.checkoutItems).toHaveLength(0);
      expect(checkout.total.amount).toBe(0);
    });

    it("should throw when removing a non-existing item", () => {
      const checkout = createCheckoutMock();

      expect(() =>
        checkout.removeCheckoutItem(new Uuid(UUID_MOCK_VALUE)),
      ).toThrow(CheckoutItemNotFoundError);
    });
  });

  describe("updateCheckoutItem", () => {
    it("should update an existing item and recalculate total", () => {
      const checkout = createCheckoutMock();
      const item = createCheckoutItemMock();

      checkout.addCheckoutItem(item);

      const updatedItem = createCheckoutItemMock({
        quantity: new Quantity(5),
      });

      checkout.updateCheckoutItem(updatedItem);

      expect(checkout.checkoutItems[0].quantity.value).toBe(5);
      expect(checkout.total.amount).toBe(
        updatedItem.unitPrice.amount * updatedItem.quantity.value,
      );
    });

    it("should throw when updating a non-existing item", () => {
      const checkout = createCheckoutMock();
      const item = createCheckoutItemMock({
        id: new Uuid("a1b2c3d4-e5f6-7890-abcd-ef1234567890"),
      });

      expect(() => checkout.updateCheckoutItem(item)).toThrow(
        CheckoutItemNotFoundError,
      );
    });
  });

  describe("updateStatus", () => {
    it("should update the checkout status", () => {
      const checkout = createCheckoutMock();
      const newStatus = new CheckoutStatus("FINISHED");

      checkout.updateStatus(newStatus);

      expect(checkout.status.value).toBe("FINISHED");
    });
  });

  describe("setOrderId", () => {
    it("should set the order id", () => {
      const checkout = createCheckoutMock();
      const orderId = new Uuid(UUID_MOCK_VALUE);

      checkout.setOrderId(orderId);

      expect(checkout.orderId?.value).toBe(orderId.value);
    });
  });
});
