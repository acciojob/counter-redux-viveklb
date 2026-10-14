import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "../store";

test("renders the counter and updates it with both buttons", () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("0");

  const counter = container.firstChild;
  expect(counter.children[1].textContent).toBe("Increment");
  expect(counter.children[2].textContent).toBe("Decrement");

  fireEvent.click(screen.getByRole("button", { name: "Increment" }));
  fireEvent.click(screen.getByRole("button", { name: "Increment" }));
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("2");

  fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
  fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
  fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
  expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("-1");
});
