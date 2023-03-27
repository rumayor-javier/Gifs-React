import { GifCard } from "../../src/components/GifCard";
import { render, screen } from "@testing-library/react";

describe("Pruebas en GifCard", () => {
  const title = "Un titulo";
  const url = "https://localhost/algo.jpg";

  test("debe hacer match con el snapshot", () => {
    const container = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifCard title={title} url={url} />);
    // screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe mostrar el titulo", () => {
    render(<GifCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
