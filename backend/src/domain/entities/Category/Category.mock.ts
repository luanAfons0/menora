import Uuid from "@/domain/value-objects/Uuid/Uuid";
import { UUID_MOCK_VALUE } from "@/domain/value-objects/Uuid/Uuid.mock";
import Label from "../../value-objects/Label/Label";
import Category from "./Category";

const CATEGORY_MOCK_DEFAULT = {
  id: new Uuid(UUID_MOCK_VALUE),
  label: new Label("Example"),
};

function createCategoryMock(customValues?: Partial<Category>) {
  const mergedValues = {
    id: CATEGORY_MOCK_DEFAULT.id,
    label: CATEGORY_MOCK_DEFAULT.label,
    ...customValues,
  };

  return new Category(mergedValues.id, mergedValues.label);
}

export { CATEGORY_MOCK_DEFAULT, createCategoryMock };
