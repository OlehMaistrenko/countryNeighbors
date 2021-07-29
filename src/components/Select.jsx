import React from "react";

function Select({ data, handleSelect, selectedCountry }) {
  return (
    <select name='country_select' onChange={handleSelect}>
      {data.map((set) =>
        set.name === selectedCountry ? (
          <option key={set.name} selected='true'>
            {set.name}
          </option>
        ) : (
          <option key={set.name}>{set.name}</option>
        )
      )}
    </select>
  );
}

export default Select;
