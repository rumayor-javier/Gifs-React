import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en useFetchGifs.js', () => {
    test('Debe retornar el estado inicial', () => {
        const { result } = renderHook(() => useFetchGifs('Test OnePunch'));
        const { gifsData, isLoading } = result.current;

        expect(gifsData).toEqual([]);
        expect(isLoading).toBeTruthy();
    });

    test('Debe retornar un arreglo de imágenes y el loading en false', async () => {
        const { result } = renderHook(() => useFetchGifs('Test OnePunch'));

        await waitFor(() => expect(result.current.gifsData.length).toBeGreaterThan(0));

        const { gifsData, isLoading } = result.current;

        expect(gifsData.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});