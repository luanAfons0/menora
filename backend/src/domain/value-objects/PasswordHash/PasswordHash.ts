class PasswordHash {
  private constructor(public readonly hash: string) {}

  static from(hash: string): PasswordHash {
    return new PasswordHash(hash);
  }
}

export default PasswordHash;
