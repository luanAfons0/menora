import ValidationError from "@/domain/errors/base/ValidationError";

class InvalidPasswordError extends ValidationError {}

export default InvalidPasswordError;
