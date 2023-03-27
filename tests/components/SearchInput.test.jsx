import { fireEvent, render, screen } from "@testing-library/react";
import { SearchInput } from "../../src/components/SearchInput";

describe("Pruebas en <SearchInput />", () => {
  test("Debe de actualizar el valor del input", () => {
    render(<SearchInput onAddQuery={() => {}} />);
    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "Hola Mundo" } });
    expect(input.value).toBe("Hola Mundo");
  });
  test("Debe de llamar onAddQuery si el input tiene un valor", () => {
    const inputDefaultValue = "Vegeta";
    const onAddQuery = jest.fn();

    render(<SearchInput onAddQuery={onAddQuery} />);

    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputDefaultValue } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
    expect(onAddQuery).toHaveBeenCalledTimes(1);
    expect(onAddQuery).toHaveBeenCalledWith(inputDefaultValue);
  });

  test("No debe llamar onAddQuery si el input esta vacio ", () => {
    const onAddQuery = jest.fn();

    render(<SearchInput onAddQuery={onAddQuery} />);

    const form = screen.getByRole("form");

    fireEvent.submit(form);

    expect(onAddQuery).toHaveBeenCalledTimes(0);
  });
});
