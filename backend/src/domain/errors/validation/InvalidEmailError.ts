import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidEmailError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidEmailError;
