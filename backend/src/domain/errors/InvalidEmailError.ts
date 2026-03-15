import DomainError from "./DomainError";

class InvalidEmailError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidEmailError;
