import NotFoundError from "@/domain/errors/base/NotFoundError";

class AddressNotFoundError extends NotFoundError {
  constructor() {
    super("Address not found");
  }
}

export default AddressNotFoundError;
