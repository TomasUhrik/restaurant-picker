import { add } from "./unit-example";

describe("Mock Unit Test", () => {
  it("Adds", () => {
    const l = add(1, 2);
    expect(l).toBe(3);
  });
});
