import { formatUps } from "./utils";

describe("utils", () => {
  it("ups below one thousand", () => {
    expect(formatUps(666)).toBe("666");
  });

  it("ups for thousand ", () => {
    expect(formatUps(42420)).toBe("42.4k");
  });

  it("ups for thousand are rounded", () => {
    expect(formatUps(42666)).toBe("42.7k");
  });
  it("ups for million numbers", () => {
    expect(formatUps(4210000)).toBe("4.2m");
  });

  it("ups for thousand with a 0 behind the dot", () => {
    expect(formatUps(42000)).toBe("42k");
  });
});
