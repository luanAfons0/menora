import Uuid from "@/domain/value-objects/Uuid/Uuid";
import Label from "../../value-objects/Label/Label";

class Category {
  constructor(
    public readonly id: Uuid,
    public label: Label,
  ) {}
}

export default Category;
