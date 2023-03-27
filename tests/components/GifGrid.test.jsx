import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const testQueryTitle = "Test OnePunch";
  test("Debe de mostrar un Loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifsData: [],
      isLoading: true,
    });

    render(<GifGrid query={testQueryTitle} />);
    expect(screen.getByText(testQueryTitle));
    expect(screen.getByText("Loading..."));
  });
  test("Debe mostrar cards con gifs cuando se cargan con useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      gifsData: [
        {
          id: "ABC",
          title: testQueryTitle,
          url: "https://localhost/test.jpg",
        },
        {
          id: "123",
          title: testQueryTitle,
          url: "https://localhost/goku.jpg",
        },
      ],
      isLoading: false,
    });

    render(<GifGrid query={testQueryTitle} />);
    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
