import { useDebounce } from "./useDebounce";
import { renderHook, waitFor } from "@testing-library/react";

describe("useDebounce", () => {
  it("should return new value after delay", async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: 0, delay: 1 },
      }
    );

    // Returns the initial value right away
    expect(result.current).toBe(0);

    // Calls the hook with new values
    rerender({ value: 1, delay: 1 });
    rerender({ value: 2, delay: 1 });
    rerender({ value: 3, delay: 1 });

    // The hook should first return the old value before debounce delay passes
    expect(result.current).toBe(0);

    await waitFor(() => {
      // The hook eventually returns the new value
      expect(result.current).toBe(3);
    });
  });
});
