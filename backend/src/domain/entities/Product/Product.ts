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
  ) {}
}

export default Product;
