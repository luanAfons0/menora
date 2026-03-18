import Money from "@/domain/value-objects/Money/Money";
import ProductName from "@/domain/value-objects/ProductName/ProductName";
import SKU from "@/domain/value-objects/SKU/SKU";
import Slug from "@/domain/value-objects/Slug/Slug";
import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import Product from "./Product";

const PRODUCT_MOCK_DEFAULTS = {
  id: new Uuid(UUID_MOCK_VALUE),
  name: new ProductName("Running Shoes"),
  sku: new SKU("SHOE-RED-42"),
  slug: new Slug("running-shoes-red-42"),
  price: new Money(99.99),
};

function createProductMock(customValues?: Partial<Product>) {
  const mergedValues = {
    id: PRODUCT_MOCK_DEFAULTS.id,
    name: PRODUCT_MOCK_DEFAULTS.name,
    sku: PRODUCT_MOCK_DEFAULTS.sku,
    slug: PRODUCT_MOCK_DEFAULTS.slug,
    price: PRODUCT_MOCK_DEFAULTS.price,
    ...customValues,
  };

  return new Product(
    mergedValues.id,
    mergedValues.name,
    mergedValues.sku,
    mergedValues.slug,
    mergedValues.price,
  );
}

export { createProductMock, PRODUCT_MOCK_DEFAULTS };
