export type HelloOptions = {
  punctuation?: "" | "!" | "?"
}

export function hello(name: string, options: HelloOptions = {}): string {
  const suffix = options.punctuation ?? ""

  return `hello, ${name.trim()}${suffix}`
}
