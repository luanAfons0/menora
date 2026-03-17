import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidPasswordError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidPasswordError;
