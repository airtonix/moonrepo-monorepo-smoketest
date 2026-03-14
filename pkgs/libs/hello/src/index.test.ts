import { describe, expect, it } from "vitest"
import { hello } from "./index"

describe("hello", () => {
  it("returns a greeting", () => {
    expect(hello("world")).toBe("hello, world")
  })

  it("trims surrounding whitespace in names", () => {
    expect(hello("  world  ")).toBe("hello, world")
  })

  it("supports title-cased names", () => {
    expect(hello("  jANE doE  ", { titleCase: true })).toBe("hello, Jane Doe")
  })
})
