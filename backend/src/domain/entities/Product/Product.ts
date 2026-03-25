import { CategoryAlreadyAssignedError, CategoryNotFoundError } from "@/domain/errors";
import Money from "@/domain/value-objects/Money/Money";
import ProductName from "@/domain/value-objects/ProductName/ProductName";
import SKU from "@/domain/value-objects/SKU/SKU";
import Slug from "@/domain/value-objects/Slug/Slug";
import Uuid from "@/domain/value-objects/Uuid/Uuid";

class Product {
  constructor(
    public readonly id: Uuid,
    public name: ProductName,
    public sku: SKU,
    public slug: Slug,
    public price: Money,
    public categoriesIds: Array<Uuid> = [],
  ) {}

  public addCategory(uuid: Uuid) {
    const categoryAlreadyRegistered = this.categoriesIds.find(
      (id) => id.value === uuid.value,
    );

    if (categoryAlreadyRegistered) {
      throw new CategoryAlreadyAssignedError();
    }

    this.categoriesIds.push(uuid);
  }

  public removeCategory(uuid: Uuid) {
    const index = this.categoriesIds.findIndex((id) => id.value === uuid.value);

    if (index === -1) {
      throw new CategoryNotFoundError();
    }

    this.categoriesIds.splice(index, 1);
  }
}

export default Product;
