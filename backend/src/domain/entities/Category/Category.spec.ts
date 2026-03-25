import { describe, expect, it } from "vitest";
import { createCategoryMock } from "./Category.mock";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";

describe("Category", () => {
  it("Should create a valid category", () => {
    const act = createCategoryMock();

    expect(act.id.value).toBe(UUID_MOCK_VALUE);
    expect(act.label.value).toBe("Example");
  });
});
