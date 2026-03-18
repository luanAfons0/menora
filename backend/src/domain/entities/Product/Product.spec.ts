import { describe, expect, it } from "vitest";
import { createProductMock, PRODUCT_MOCK_DEFAULTS } from "./Product.mock";

describe("Product", () => {
  it("should create a valid product", () => {
    const act = createProductMock();

    expect(act.id).toBe(PRODUCT_MOCK_DEFAULTS.id);
    expect(act.name.value).toBe(PRODUCT_MOCK_DEFAULTS.name.value);
    expect(act.sku.value).toBe(PRODUCT_MOCK_DEFAULTS.sku.value);
    expect(act.slug.value).toBe(PRODUCT_MOCK_DEFAULTS.slug.value);
    expect(act.price.amount).toBe(PRODUCT_MOCK_DEFAULTS.price.amount);
    expect(act.price.currency).toBe(PRODUCT_MOCK_DEFAULTS.price.currency);
  });
});
