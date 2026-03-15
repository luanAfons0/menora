class PasswordHash {
  private constructor(public hash: string) {}

  static from(hash: string): PasswordHash {
    return new PasswordHash(hash);
  }
}

export default PasswordHash;
