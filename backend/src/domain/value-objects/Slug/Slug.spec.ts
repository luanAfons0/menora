import { describe, expect, it } from "vitest";
import InvalidSlugError from "@/domain/errors/validation/InvalidSlugError";
import Slug from "./Slug";

describe("Slug", () => {
  it("should create a valid slug", () => {
    const arrange = "running-shoes-red-42";
    const act = new Slug(arrange);
    expect(act.value).toBe(arrange);
  });

  it("should accept a slug with only lowercase letters", () => {
    const act = new Slug("shoes");
    expect(act.value).toBe("shoes");
  });

  it("should accept a slug with only digits", () => {
    const act = new Slug("12345");
    expect(act.value).toBe("12345");
  });

  it("should reject a slug with uppercase letters", () => {
    expect(() => new Slug("Running-Shoes")).toThrow(InvalidSlugError);
  });

  it("should reject a slug with spaces", () => {
    expect(() => new Slug("running shoes")).toThrow(InvalidSlugError);
  });

  it("should reject a slug with special characters", () => {
    expect(() => new Slug("running_shoes@42")).toThrow(InvalidSlugError);
  });

  it("should reject an empty slug", () => {
    expect(() => new Slug("")).toThrow(InvalidSlugError);
  });
});
