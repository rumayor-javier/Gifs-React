export const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=pOYoxXqWQMlQYYFvkP6a6tSR7r7Gqu42&q=${query}&limit=20`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gif = data.map((img) => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
    }));

    return gif;
};