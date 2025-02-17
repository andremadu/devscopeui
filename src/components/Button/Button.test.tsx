import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from "./Button";

test("renderiza o botão corretamente", () => {
  render(<Button label="Test Button" />);
  expect(screen.getByText("Test Button")).toBeInTheDocument();
});

test("usa a classe correta para o botão primário", () => {
  render(<Button label="Primary" variant="primary" />);
  const button = screen.getByText("Primary");
  expect(button.className).toContain("primary");
});

test("usa a classe correta para o botão secundário", () => {
  render(<Button label="Secondary" variant="secondary" />);
  const button = screen.getByText("Secondary");
  expect(button.className).toContain("secondary");
});

test("usa a classe correta para o botão success", () => {
  render(<Button label="Success" variant="success" />);
  const button = screen.getByText("Success");
  expect(button.className).toContain("success");

});

test("usa a classe correta para o botão danger", () => {
  render(<Button label="Danger" variant="danger" />);
  const button = screen.getByText("Danger");
  expect(button.className).toContain("danger");

});

test("usa a classe correta para o botão outline", () => {
  render(<Button label="Outline" variant="outline" />);
  const button = screen.getByText("Outline");
  expect(button.className).toContain("outline");

});

test("usa a classe correta para fullWidth", () => {
  render(<Button label="Full Width" fullWidth />);
  const button = screen.getByText("Full Width");
  expect(button.className).toContain("w-full");

});

test("desabilita corretamente o botão", () => {
  render(<Button label="Disabled" disabled />);
  const button = screen.getByText("Disabled");
  expect(button).toBeDisabled();
  expect(button.className).toContain("disabled");

});
