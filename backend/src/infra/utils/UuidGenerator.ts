import { randomUUID } from "crypto";
import IIdGenerator from "@/application/ports/IIdGenerator/IIdGenerator";

class UuidGenerator implements IIdGenerator {
  generate(): string {
    return randomUUID();
  }
}

export default UuidGenerator;
