import React, { useState } from "react";

function SearchLocation({ updateCurrentLocation }) {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    updateCurrentLocation(value);
    setValue("");
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="form__input"
        className="form__input"
        placeholder="Search for any IP address or domain"
        required
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button className="form__btn">Search</button>
    </form>
  );
}

export default SearchLocation;
