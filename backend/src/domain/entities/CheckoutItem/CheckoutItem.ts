import Money from "@/domain/value-objects/Money/Money";
import Quantity from "@/domain/value-objects/Quantity/Quantity";
import Uuid from "@/domain/value-objects/Uuid/Uuid";

class CheckoutItem {
  constructor(
    public readonly id: Uuid,
    public readonly productId: Uuid,
    public readonly checkoutId: Uuid,
    public readonly quantity: Quantity,
    public readonly unitPrice: Money,
  ) {}
}

export default CheckoutItem;
