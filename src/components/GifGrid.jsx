import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ query }) => {
  const { gifsData, isLoading } = useFetchGifs(query);

  return (
    <>
      <h3>{query}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {gifsData.map((gifData) => (
          <GifCard key={gifData.id} {...gifData} />
        ))}
      </div>
    </>
  );
};
