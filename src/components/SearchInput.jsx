import { useState } from "react";

export const SearchInput = ({ onAddQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAddQuery = ({ target }) => {
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedInputValue = inputValue.trim();
    if (sanitizedInputValue.length < 1) return;
    onAddQuery(sanitizedInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search Gifs"
        value={inputValue}
        onChange={handleAddQuery}
      />
      <button type="submit">Search</button>
    </form>
  );
};
