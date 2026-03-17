import DomainError from "@/domain/errors/DomainError/DomainError";

class AddressNotFoundError extends DomainError {
  constructor() {
    super("Address not found");
  }
}

export default AddressNotFoundError;
