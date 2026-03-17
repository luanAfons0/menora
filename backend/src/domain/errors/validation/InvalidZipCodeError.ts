import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidZipCodeError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidZipCodeError;
