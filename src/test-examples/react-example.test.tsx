import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ExampleComponent } from "./react-example";

test("loads and displays greeting", async () => {
  render(<ExampleComponent />);
  const text = await screen.findByText("Harry Potter!");
  expect(text).toBeTruthy();
});
