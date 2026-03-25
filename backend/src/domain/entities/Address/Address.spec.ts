import { describe, expect, it } from "vitest";
import { ADDRESS_MOCK_DEFAULTS, createAddressMock } from "./Address.mock";

describe("Address", () => {
  it("Should create a address", () => {
    const act = createAddressMock();

    expect(act.id).toBe(ADDRESS_MOCK_DEFAULTS.id);
    expect(act.street).toBe(ADDRESS_MOCK_DEFAULTS.street);
    expect(act.city).toBe(ADDRESS_MOCK_DEFAULTS.city);
    expect(act.state).toBe(ADDRESS_MOCK_DEFAULTS.state);
    expect(act.country).toBe(ADDRESS_MOCK_DEFAULTS.country);
    expect(act.zipCode.value).toBe(ADDRESS_MOCK_DEFAULTS.zipCode.value);
    expect(act.number.value).toBe(ADDRESS_MOCK_DEFAULTS.number.value);
  });
});
