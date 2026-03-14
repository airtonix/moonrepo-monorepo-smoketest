export type HelloOptions = {
  punctuation?: "" | "!" | "?"
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
  const collapsed = name.trim().replace(/\s+/g, " ")
  const normalized = options.titleCase ? toTitleCase(collapsed) : collapsed
  const suffix = options.punctuation ?? ""

  return `hello, ${normalized}${suffix}`
}
