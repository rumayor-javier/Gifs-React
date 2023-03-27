import { getGifs } from "../../src/helpers/GetGifs";

describe('Pruebas en GetGifs', () => {
    test('Debe de retornar una arreglo con 10 elementos', async () => {
        const gifs = await getGifs('One Punch');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    })
})