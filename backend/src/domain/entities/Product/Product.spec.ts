import { describe, expect, it } from "vitest";
import {
  CategoryAlreadyAssignedError,
  CategoryNotFoundError,
} from "@/domain/errors";
import { createCategoryMock } from "../Category/Category.mock";
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

  it("should add a category to the product", () => {
    const act = createProductMock();
    const category = createCategoryMock();

    act.addCategory(category.id);

    expect(act.categoriesIds).toHaveLength(1);
  });

  it("should reject a category that is already assigned to the product", () => {
    const act = createProductMock();
    const category = createCategoryMock();

    act.addCategory(category.id);
    const test = () => act.addCategory(category.id);

    expect(test).toThrow(CategoryAlreadyAssignedError);
  });

  it("should remove a category from the product", () => {
    const act = createProductMock();
    const category = createCategoryMock();

    act.addCategory(category.id);
    expect(act.categoriesIds).toHaveLength(1);

    act.removeCategory(category.id);
    expect(act.categoriesIds).toHaveLength(0);
  });

  it("should reject a remove if the category is not assigned to the product", () => {
    const act = createProductMock();
    const category = createCategoryMock();

    const test = () => act.removeCategory(category.id);
    expect(test).toThrow(CategoryNotFoundError);
  });
});
