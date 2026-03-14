import { describe, expect, it } from "vitest"
import { hello } from "./index"

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
})
