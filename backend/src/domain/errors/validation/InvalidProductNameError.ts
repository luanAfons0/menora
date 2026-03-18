import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidProductNameError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidProductNameError;
