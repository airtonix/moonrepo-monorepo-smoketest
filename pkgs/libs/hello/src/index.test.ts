import { describe, expect, it } from "vitest"
import { hello, helloMany } from "./index"

describe("hello", () => {
  it("returns a greeting", () => {
    expect(hello("world")).toBe("hello, world")
  })

  it("trims surrounding whitespace in names", () => {
    expect(hello("  world  ")).toBe("hello, world")
  })

  it("collapses repeated internal whitespace", () => {
    expect(hello("hello    moonrepo")).toBe("hello, hello moonrepo")
  })

  it("supports title-cased names", () => {
    expect(hello("  jANE doE  ", { titleCase: true })).toBe("hello, Jane Doe")
  })

  it("supports optional punctuation", () => {
    expect(hello("world", { punctuation: "!" })).toBe("hello, world!")
  })

  it("supports punctuation and title case together", () => {
    expect(hello("  jANE doE  ", { titleCase: true, punctuation: "?" })).toBe(
      "hello, Jane Doe?",
    )
  })

  it("uses a fallback name when input is empty", () => {
    expect(hello("     ")).toBe("hello, friend")
  })

  it("greets many names", () => {
    expect(helloMany(["world", "  jANE doE  "], { titleCase: true })).toEqual([
      "hello, World",
      "hello, Jane Doe",
    ])
  })
})
