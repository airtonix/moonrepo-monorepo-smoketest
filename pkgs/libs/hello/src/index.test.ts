import { describe, expect, it } from "vitest"
import { hello } from "./index"

describe("hello", () => {
  it("returns a greeting", () => {
    expect(hello("world")).toBe("hello, world")
  })

  it("trims surrounding whitespace in names", () => {
    expect(hello("  world  ")).toBe("hello, world")
  })

  it("supports optional punctuation", () => {
    expect(hello("world", { punctuation: "!" })).toBe("hello, world!")
  })
})
