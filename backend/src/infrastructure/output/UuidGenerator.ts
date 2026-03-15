import IIdGenerator from "../../application/ports/output/IIdGenerator";
import { randomUUID } from "crypto";

class UuidGenerator implements IIdGenerator {
  generate(): string {
    return randomUUID();
  }
}

export default UuidGenerator;
