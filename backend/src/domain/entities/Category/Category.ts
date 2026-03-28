import type Uuid from "@/domain/value-objects/Uuid/Uuid";
import type Label from "../../value-objects/Label/Label";

class Category {
  constructor(
    public readonly id: Uuid,
    private _label: Label,
  ) {}

  get label() {
    return this._label;
  }

  public updateLabel(label: Label) {
    this._label = label;
  }
}

export default Category;
