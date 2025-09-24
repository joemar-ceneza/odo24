export type Branded<K, T> = K & { __brand: T };

export type Email = Branded<string, "Email">;
export type Url = Branded<string, "Url">;
export type PhoneNumber = Branded<string, "PhoneNumber">;
