import { useState } from "react";
import { GifGrid, SearchInput } from "./components";

export const GifApp = () => {
  const [queries, setQuery] = useState(["Goku"]);

  const onAddQuery = (newQuery) => {
    if (queries.includes(newQuery)) return;
    setQuery((queries) => [newQuery, ...queries]);
  };

  return (
    <>
      <h1>GifApp</h1>

      <SearchInput onAddQuery={onAddQuery} />

      {queries.map((query) => (
        <GifGrid key={query} query={query} />
      ))}
    </>
  );
};
