import LogicalError from "@/domain/errors/base/LogicalError";

class CategoryAlreadyAssignedError extends LogicalError {
  constructor() {
    super("The category is already assigned to this product");
  }
}

export default CategoryAlreadyAssignedError;
