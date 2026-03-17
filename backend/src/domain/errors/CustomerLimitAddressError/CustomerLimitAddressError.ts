import DomainError from "@/domain/errors/DomainError/DomainError";

class CustomerLimitAddressError extends DomainError {
  constructor() {
    super("The customer reached the limit address quantity");
  }
}

export default CustomerLimitAddressError;
