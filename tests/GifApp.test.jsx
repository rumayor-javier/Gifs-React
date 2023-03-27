import { render, screen } from "@testing-library/react";
import { GifApp } from "../src/GifApp";

describe("Pruebas a <GifApp />", () => {
  test("Debe contener un titulo", () => {
    const { container } = render(<GifApp />);

    expect(container).toMatchSnapshot();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe("GifApp");
  });
});
