export class User {
  constructor(
    public email: string,
    public password: string,
    public role: 'admin' | 'user', // Add role to differentiate access levels
    public username?: string // Optional fields
  ) {}
}
