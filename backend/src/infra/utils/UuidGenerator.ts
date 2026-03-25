import { randomUUID } from "node:crypto";
import type IIdGenerator from "@/application/ports/IIdGenerator/IIdGenerator";

class UuidGenerator implements IIdGenerator {
  generate(): string {
    return randomUUID();
  }
}

export default UuidGenerator;
