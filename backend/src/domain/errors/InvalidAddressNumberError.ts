import DomainError from "./DomainError";

class InvalidAddressNumberError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidAddressNumberError;
