import { useState } from "react";
import PropTypes from "prop-types";

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
    <form onSubmit={handleSubmit} aria-label="form">
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

SearchInput.propTypes = {
  onAddQuery: PropTypes.func.isRequired,
};
