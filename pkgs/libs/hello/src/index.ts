export type HelloOptions = {
  titleCase?: boolean
}

function toTitleCase(value: string): string {
  return value
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ")
}

export function hello(name: string, options: HelloOptions = {}): string {
  const trimmed = name.trim()
  const normalized = options.titleCase ? toTitleCase(trimmed) : trimmed

  return `hello, ${normalized}`
}
