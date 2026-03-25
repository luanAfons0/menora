import InvalidSlugError from "@/domain/errors/validation/InvalidSlugError";

class Slug {
  public value: string;

  constructor(raw: string) {
    if (!/^[a-z0-9-]+$/.test(raw)) {
      throw new InvalidSlugError("Invalid slug");
    }

    this.value = raw;
  }
}

export default Slug;
