import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidSKUError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidSKUError;
