import React, { useState, useEffect } from "react";
import axios from "axios";
import ShowPrayers from "./ShowPrayers";
import "./Prayer.css";
const Prayer = () => {
  const [city, setCity] = useState("gaza strip");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleOk = () => {
    if (searchTerm.trim()) {
      setCity(searchTerm);
    }
    setSearchTerm("");
  };
  useEffect(() => {
    if (city.trim()) {
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/https://muslimsalat.com/${city}/daily.json?key=fd53a69625960a5e1e516f169c0fd1e0`
        )
        .then((res) => {
          if (res.data.status_code === 0) {
            setError("There is no such city");
          } else {
            setData(res.data);
            setLoading(false);
            setError("");
          }
        })
        .catch((err) => setError(err.message));
    }
  }, [city]);
  return (
    <div className="container">
      <div className="card">
        <h1 className="title">𝓟𝓻𝓪𝔂𝓮𝓻 𝓣𝓲𝓶𝓮𝓼</h1>
        <span className="error-msg">{error}</span>
        <div className="search">
          <input
            className="search__input"
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="search-btn" type="submit" onClick={handleOk}>
            Search
          </button>
        </div>
        {!loading ? <ShowPrayers data={data} /> : <h3>loading...</h3>}
      </div>
    </div>
  );
};

export default Prayer;
