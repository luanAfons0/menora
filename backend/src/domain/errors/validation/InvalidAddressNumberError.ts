import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidAddressNumberError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidAddressNumberError;
