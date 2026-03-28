import NotFoundError from "@/domain/errors/base/NotFoundError";

class CheckoutItemNotFoundError extends NotFoundError {
  constructor() {
    super("CheckoutItem not found");
  }
}

export default CheckoutItemNotFoundError;
