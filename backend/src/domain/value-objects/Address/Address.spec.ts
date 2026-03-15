import { describe, expect, it } from "vitest";
import AddressNumber from "../AddressNumber/AddressNumber";
import ZipCode from "../ZipCode/ZipCode";
import Address from "./Address";

describe("Address", () => {
  it("Should create a address", () => {
    const zipCode = new ZipCode("12345-678");
    const addressNumber = new AddressNumber("123");
    const act = new Address(
      "street",
      "city",
      "state",
      "country",
      zipCode,
      addressNumber,
    );

    expect(act.street).toBe("street");
    expect(act.city).toBe("city");
    expect(act.state).toBe("state");
    expect(act.country).toBe("country");
    expect(act.zipCode.value).toBe("12345-678");
    expect(act.number.value).toBe("123");
  });
});
