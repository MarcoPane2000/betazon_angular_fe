enum Role {
  ADMIN = 0,
  USER = 1
}

function fromValue(value: number): string {
  for (const key in Role) {
      if (Role[key as keyof typeof Role] === value) {
          return key;
      }
  }
  throw new Error(`Unknown role value: ${value}`);
}

function fromString(value: string): number {
  const role = Role[value as keyof typeof Role];
  if (role !== undefined) {
      return role;
  }
  throw new Error(`Unknown role name: ${value}`);
}

// Example usage:
// - console.log(Role.ADMIN); // Output: 0
// - console.log(fromValue(0)); // Output: ADMIN
// - console.log(fromString('USER')); // Output: 1
