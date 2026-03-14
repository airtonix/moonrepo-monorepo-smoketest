export function hello(name: string): string {
  const normalized = name.trim().replace(/\s+/g, " ")

  return `hello, ${normalized}`
}
