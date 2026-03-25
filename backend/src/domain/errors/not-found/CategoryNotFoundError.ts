import NotFoundError from "@/domain/errors/base/NotFoundError";

class CategoryNotFoundError extends NotFoundError {
  constructor() {
    super("Category not found");
  }
}

export default CategoryNotFoundError;
