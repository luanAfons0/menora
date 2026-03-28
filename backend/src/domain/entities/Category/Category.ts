import type Uuid from "@/domain/value-objects/Uuid/Uuid";
import type Label from "../../value-objects/Label/Label";

class Category {
  constructor(
    public readonly id: Uuid,
    public readonly label: Label,
  ) {}
}

export default Category;
