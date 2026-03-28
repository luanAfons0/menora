import {
  CategoryAlreadyAssignedError,
  CategoryNotFoundError,
} from "@/domain/errors";
import type Money from "@/domain/value-objects/Money/Money";
import type ProductName from "@/domain/value-objects/ProductName/ProductName";
import type SKU from "@/domain/value-objects/SKU/SKU";
import type Slug from "@/domain/value-objects/Slug/Slug";
import type Uuid from "@/domain/value-objects/Uuid/Uuid";

class Product {
  constructor(
    public readonly id: Uuid,
    public readonly name: ProductName,
    public readonly sku: SKU,
    public readonly slug: Slug,
    public readonly price: Money,
    public readonly categoriesIds: Array<Uuid> = [],
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
