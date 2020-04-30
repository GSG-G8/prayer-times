import React, { useState, useEffect } from "react";
import axios from "axios";

const Prayer = () => {
  const [city, cityState] = useState("gaza strip");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");

  const handleOk = () => {
    cityState(searchTerm);
    setSearchTerm("");
  };
  useEffect(() => {
    axios(`https://cors-anywhere.herokuapp.com/https://muslimsalat.com/${city}/daily.json?key=fd53a69625960a5e1e516f169c0fd1e0`)
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [city]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleOk}>Search</button>
      {/* <ShowData  data = 'data'/>  */}
    </div>
  );
};

export default Prayer;