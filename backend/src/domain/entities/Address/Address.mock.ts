import { AddressNumber, ZipCode } from "@/domain/value-objects";
import Address from "./Address";

const ADDRESS_MOCK_DEFAULTS = {
  id: "mock-uuid",
  street: "street",
  city: "city",
  state: "state",
  country: "country",
  zipCode: new ZipCode("12345-678"),
  number: new AddressNumber("123"),
};

function createAddressMock(customValues?: Partial<Address>) {
  const mergedValues = {
    id: ADDRESS_MOCK_DEFAULTS.id,
    street: ADDRESS_MOCK_DEFAULTS.street,
    city: ADDRESS_MOCK_DEFAULTS.city,
    state: ADDRESS_MOCK_DEFAULTS.state,
    country: ADDRESS_MOCK_DEFAULTS.country,
    zipCode: ADDRESS_MOCK_DEFAULTS.zipCode,
    number: ADDRESS_MOCK_DEFAULTS.number,
    ...customValues,
  };

  const address = new Address(
    mergedValues.id,
    mergedValues.street,
    mergedValues.city,
    mergedValues.state,
    mergedValues.country,
    mergedValues.zipCode,
    mergedValues.number,
  );

  return address;
}

export { createAddressMock, ADDRESS_MOCK_DEFAULTS };
