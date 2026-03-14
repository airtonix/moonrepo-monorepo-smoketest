export type HelloOptions = {
  punctuation?: "" | "!" | "?"
  titleCase?: boolean
  shout?: boolean
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

  if (!collapsed) {
    return "hello, friend"
  }

  const cased = options.titleCase ? toTitleCase(collapsed) : collapsed
  const normalized = options.shout ? cased.toUpperCase() : cased
  const suffix = options.punctuation ?? ""

  return `hello, ${normalized}${suffix}`
}

export function helloMany(names: string[], options: HelloOptions = {}): string[] {
  return names.map((name) => hello(name, options))
}
