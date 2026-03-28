import CheckoutStatus from "@/domain/value-objects/CheckoutStatus/CheckoutStatus";
import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import Checkout from "./Checkout";

const CHECKOUT_MOCK_DEFAULTS = {
  id: new Uuid(UUID_MOCK_VALUE),
  customerId: new Uuid(UUID_MOCK_VALUE),
  status: new CheckoutStatus("IN_PROGRESS"),
};

function createCheckoutMock(customValues?: Partial<Checkout>) {
  const mergedValues = {
    id: CHECKOUT_MOCK_DEFAULTS.id,
    customerId: CHECKOUT_MOCK_DEFAULTS.customerId,
    status: CHECKOUT_MOCK_DEFAULTS.status,
    ...customValues,
  };

  return new Checkout(
    mergedValues.id,
    mergedValues.customerId,
    mergedValues.status,
  );
}

export { CHECKOUT_MOCK_DEFAULTS, createCheckoutMock };
