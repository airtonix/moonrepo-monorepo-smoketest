export type HelloOptions = {
  punctuation?: "" | "!" | "?"
}

export function hello(name: string, options: HelloOptions = {}): string {
  const normalized = name.trim().replace(/\s+/g, " ")
  const suffix = options.punctuation ?? ""

  return `hello, ${normalized}${suffix}`
}
