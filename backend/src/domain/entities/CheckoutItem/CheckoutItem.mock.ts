import Money from "@/domain/value-objects/Money/Money";
import Quantity from "@/domain/value-objects/Quantity/Quantity";
import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import CheckoutItem from "./CheckoutItem";

const CHECKOUT_ITEM_MOCK_DEFAULT = {
  id: new Uuid(UUID_MOCK_VALUE),
  productId: new Uuid(UUID_MOCK_VALUE),
  checkoutId: new Uuid(UUID_MOCK_VALUE),
  quantity: new Quantity(10),
  unitPrice: new Money(100, "BRL"),
};

function createCheckoutItemMock(customValues?: Partial<CheckoutItem>) {
  const mergedValues = {
    checkoutId: CHECKOUT_ITEM_MOCK_DEFAULT.checkoutId,
    productId: CHECKOUT_ITEM_MOCK_DEFAULT.productId,
    id: CHECKOUT_ITEM_MOCK_DEFAULT.id,
    quantity: CHECKOUT_ITEM_MOCK_DEFAULT.quantity,
    unitPrice: CHECKOUT_ITEM_MOCK_DEFAULT.unitPrice,
    ...customValues,
  };

  return new CheckoutItem(
    mergedValues.id,
    mergedValues.productId,
    mergedValues.checkoutId,
    mergedValues.quantity,
    mergedValues.unitPrice,
  );
}

export { CHECKOUT_ITEM_MOCK_DEFAULT, createCheckoutItemMock };
