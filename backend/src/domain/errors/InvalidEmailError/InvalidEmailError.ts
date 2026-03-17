import DomainError from "@/domain/errors/DomainError/DomainError";

class InvalidEmailError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidEmailError;
