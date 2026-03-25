import { describe, expect, it } from "vitest";
import InvalidUuidError from "@/domain/errors/validation/InvalidUuid";
import Uuid from "./Uuid";

describe("Uuid", () => {
  it("Should reject a invalid UUID", () => {
    const arrange = "asd123asd123";
    const act = () => new Uuid(arrange);
    expect(act).toThrow(InvalidUuidError);
  });

  it("Should reject a regular string as UUID", () => {
    const arrange = "";
    const act = () => new Uuid(arrange);
    expect(act).toThrow(InvalidUuidError);
  });

  it("Should create a valid UUID", () => {
    const arrange = "55ec60ec-4dba-4aeb-aea2-6e2ae17c8d87";
    const act = new Uuid(arrange);
    expect(act.value).toBe(arrange);
  });
});
