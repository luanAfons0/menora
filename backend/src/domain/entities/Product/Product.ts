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
    private _name: ProductName,
    private _sku: SKU,
    private _slug: Slug,
    private _price: Money,
    private _categoriesIds: Array<Uuid> = [],
  ) {}

  get name() {
    return this._name;
  }

  public updateName(name: ProductName) {
    this._name = name;
  }

  get sku() {
    return this._sku;
  }

  public updateSKU(sku: SKU) {
    this._sku = sku;
  }

  get slug() {
    return this._slug;
  }

  public updateSlug(slug: Slug) {
    this._slug = slug;
  }

  get price() {
    return this._price;
  }

  public updatePrice(price: Money) {
    this._price = price;
  }

  get categoriesIds(): ReadonlyArray<Uuid> {
    return this._categoriesIds;
  }

  public addCategory(uuid: Uuid) {
    const categoryAlreadyRegistered = this._categoriesIds.find(
      (id) => id.value === uuid.value,
    );

    if (categoryAlreadyRegistered) {
      throw new CategoryAlreadyAssignedError();
    }

    this._categoriesIds.push(uuid);
  }

  public removeCategory(uuid: Uuid) {
    const index = this._categoriesIds.findIndex(
      (id) => id.value === uuid.value,
    );

    if (index === -1) {
      throw new CategoryNotFoundError();
    }

    this._categoriesIds.splice(index, 1);
  }
}

export default Product;
