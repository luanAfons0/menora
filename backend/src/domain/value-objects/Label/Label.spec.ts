import { describe, expect, it } from "vitest";
import Label from "./Label";
import { ValidationError } from "@/domain/errors";

describe("Label", () => {
  it("Should create a valid label", () => {
    const act = new Label("Example");

    expect(act.value).toBe("Example");
  });

  it("Should reject a label with special characters", () => {
    const act = () => new Label("asdasd@.com");

    expect(act).toThrow(ValidationError);
  });
});
