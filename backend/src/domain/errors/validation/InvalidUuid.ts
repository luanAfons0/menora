import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidUuidError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidUuidError;
