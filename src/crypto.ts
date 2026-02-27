/**
 * Generates a unique ID for use in component instances.
 * Uses a random string to ensure uniqueness across builds and renders.
 */
export function createUniqueId(): string {
  return Math.random().toString(36).slice(2, 11);
}
