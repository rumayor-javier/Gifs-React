import { GifCard } from "./GifCard";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { PropTypes } from "prop-types";

export const GifGrid = ({ query }) => {
  const { gifsData, isLoading } = useFetchGifs(query);

  return (
    <>
      <h3>{query}</h3>
      {isLoading && <h2>Loading...</h2>}
      <div className="card-grid">
        {gifsData.map((gifData) => (
          <GifCard key={gifData.id} {...gifData} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  query: PropTypes.string.isRequired,
};
