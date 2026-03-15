import { describe, it, expect } from "vitest";
import DomainError from "./DomainError";

class DomainErrorExample extends DomainError {
  constructor(message: string) {
    super(message);
  }
}

describe("DomainError", () => {
  it("Set the error name to the subclass name", () => {
    const domainErrorExample = new DomainErrorExample("Example");
    expect(domainErrorExample.name).toBe("DomainErrorExample");
  });

  it("Set the error message", () => {
    const domainErrorExample = new DomainErrorExample("Example");
    expect(domainErrorExample.message).toBe("Example");
  });

  it("is an instance of DomainError", () => {
    const domainErrorExample = new DomainErrorExample("Example");
    expect(domainErrorExample).toBeInstanceOf(DomainError);
  });

  it("is an instance of Error", () => {
    const domainErrorExample = new DomainErrorExample("Example");
    expect(domainErrorExample).toBeInstanceOf(Error);
  });
});
