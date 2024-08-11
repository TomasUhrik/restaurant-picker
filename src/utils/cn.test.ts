import { cn } from "./cn";

describe("cn", () => {
  it("should combine multiple class names into a single string", () => {
    const result = cn("class1", "class2", "class3");
    expect(result).toBe("class1 class2 class3");
  });

  it("should return an empty string when no class names are provided", () => {
    const result = cn();
    expect(result).toBe("");
  });

  it("should return an empty string when input is null or undefined", () => {
    const result = cn(null, undefined);
    expect(result).toBe("");
  });
});
