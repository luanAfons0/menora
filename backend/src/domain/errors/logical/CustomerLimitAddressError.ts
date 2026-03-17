import LogicalError from "@/domain/errors/base/LogicalError";

class CustomerLimitAddressError extends LogicalError {
  constructor() {
    super("The customer reached the limit address quantity");
  }
}

export default CustomerLimitAddressError;
