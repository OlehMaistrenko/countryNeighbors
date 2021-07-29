import "./App.css";
import React from "react";
import Select from "./components/Select";
import Table from "./components/Table";

function App() {
  const [data, setData] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState();

  const handleSelect = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleTableClick = (countryName) => {
    setSelectedCountry(countryName);
  };
  React.useEffect(() => {
    async function fetchData() {
      try {
        fetch("https://restcountries.eu/rest/v2/all")
          .then((resp) => {
            return resp.json();
          })
          .then((json) => {
            setData(json);
            return json;
          });
      } catch (error) {
        alert("data load error");
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Select
        data={data}
        handleSelect={handleSelect}
        selectedCountry={selectedCountry}
      />
      <Table
        data={data}
        selectedCountry={selectedCountry}
        handleTableClick={handleTableClick}
      />
    </div>
  );
}

export default App;
