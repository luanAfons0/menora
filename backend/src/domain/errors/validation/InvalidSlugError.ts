import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidSlugError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidSlugError;
