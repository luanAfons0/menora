import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidMoneyError extends ValidationError {
  constructor(message: string) {
    super(message);
  }
}

export default InvalidMoneyError;
