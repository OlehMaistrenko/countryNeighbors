import React from "react";

function Table({ data, selectedCountry, handleTableClick }) {
  console.log(selectedCountry);
  return (
    <table>
      <thead>
        <tr>
          <th>Flag</th>
          <th>Name</th>
          <th>Capital</th>
          <th>Population</th>
          <th>Area</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {selectedCountry &&
          data
            .filter((item) => item.name === selectedCountry)
            .map((seleced) =>
              data
                .filter((item) => seleced.borders.includes(item.alpha3Code))
                .map((res) => (
                  <tr
                    key={res.name}
                    onClick={() => {
                      handleTableClick(res.name);
                    }}
                  >
                    <td>
                      <img src={res.flag} alt={res.name} className='flag' />
                    </td>
                    <td>{res.name}</td>
                    <td>{res.capital}</td>
                    <td>{res.population}</td>
                    <td>{res.area}</td>
                    <td className='currency__cell'>
                      {res.currencies.map((curr) => (
                        <div className='currency__holder'>
                          {curr.code}
                          <div className='currency__info'>
                            <p>
                              Name: <span>{curr.name}</span>
                            </p>
                            <p>
                              Symbol: <span>{curr.symbol}</span>
                            </p>
                          </div>
                        </div>
                      ))}
                    </td>
                  </tr>
                ))
            )}
      </tbody>
    </table>
  );
}

export default Table;
