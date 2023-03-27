import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = (query) => {

    const [gifsData, setGifsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifsData = async () => {
        const gifs = await getGifs(query);
        setGifsData(gifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getGifsData();
    }, []);

    return {
        gifsData,
        isLoading,
    }
}
