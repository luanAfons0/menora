import DomainError from "./DomainError";

class InvalidZipCodeError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidZipCodeError;
