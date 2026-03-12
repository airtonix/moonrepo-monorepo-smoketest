import { describe, expect, it } from "vitest";
import { dec, inc } from "./index";

describe("inc", () => {
  it("increments by 1", () => {
    expect(inc(1)).toBe(2);
  });
});

describe("dec", () => {
  it("decrements by 1", () => {
    expect(dec(2)).toBe(1);
  });
});
