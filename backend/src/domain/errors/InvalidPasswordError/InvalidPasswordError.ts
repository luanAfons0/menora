import DomainError from "@/domain/errors/DomainError/DomainError";

class InvalidPasswordError extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidPasswordError;
