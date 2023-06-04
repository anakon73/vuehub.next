export const BASE_URL = 'https://api.github.com'

export function pick<T extends Record<string, any>, K extends [...(keyof T)[]]>(
  base: T,
  ...keys: K
): { [K2 in K[number]]: T[K2] } {
  const entries = keys.map((key) => [key, base[key]])

  return Object.fromEntries(entries)
}
