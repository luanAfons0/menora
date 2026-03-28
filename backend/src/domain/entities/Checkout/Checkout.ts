import CheckoutItemNotFoundError from "@/domain/errors/not-found/CheckoutItemNotFoundError";
import type CheckoutStatus from "@/domain/value-objects/CheckoutStatus/CheckoutStatus";
import Money from "@/domain/value-objects/Money/Money";
import Quantity from "@/domain/value-objects/Quantity/Quantity";
import type Uuid from "@/domain/value-objects/Uuid/Uuid";
import CheckoutItem from "../CheckoutItem/CheckoutItem";

class Checkout {
  private _total: Money = new Money(0, "BRL");

  constructor(
    public readonly id: Uuid,
    public readonly customerId: Uuid,
    private _status: CheckoutStatus,
    private _checkoutItems: Array<CheckoutItem> = [],
    private _orderId?: Uuid,
  ) {}

  get checkoutItems(): ReadonlyArray<CheckoutItem> {
    return this._checkoutItems;
  }

  public addCheckoutItem(checkoutItem: CheckoutItem) {
    const index = this._checkoutItems.findIndex(
      (item) => item.productId.value === checkoutItem.productId.value,
    );

    if (index === -1) {
      this._checkoutItems.push(checkoutItem);
      this.calculateCheckout();
      return;
    }
    const oldItem = this._checkoutItems[index];
    const newQuantity = new Quantity(
      checkoutItem.quantity.value + oldItem.quantity.value,
    );

    const newItem: CheckoutItem = new CheckoutItem(
      oldItem.id,
      oldItem.productId,
      oldItem.checkoutId,
      newQuantity,
      oldItem.unitPrice,
    );

    this._checkoutItems[index] = newItem;

    this.calculateCheckout();
  }

  public removeCheckoutItem(checkoutItemId: Uuid) {
    const index = this._checkoutItems.findIndex(
      (item) => item.id.value === checkoutItemId.value,
    );

    if (index === -1) throw new CheckoutItemNotFoundError();

    this._checkoutItems.splice(index, 1);

    this.calculateCheckout();
  }

  public updateCheckoutItem(checkoutItem: CheckoutItem) {
    const index = this._checkoutItems.findIndex(
      (item) => item.id.value === checkoutItem.id.value,
    );

    if (index === -1) throw new CheckoutItemNotFoundError();

    this._checkoutItems[index] = checkoutItem;

    this.calculateCheckout();
  }

  get status() {
    return this._status;
  }

  public updateStatus(status: CheckoutStatus) {
    this._status = status;
  }

  get total() {
    return this._total;
  }

  get orderId() {
    return this._orderId;
  }

  public setOrderId(uuid: Uuid) {
    this._orderId = uuid;
  }

  private calculateCheckout() {
    const newTotalAmount = this._checkoutItems.reduce(
      (acc, item) => acc + item.unitPrice.amount * item.quantity.value,
      0,
    );

    const newMoneyAmout = new Money(newTotalAmount, "BRL");

    this._total = newMoneyAmout;
  }
}

export default Checkout;
