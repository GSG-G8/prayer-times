import React from "react";
import './style.css'
const ShowPrayers = ({ data, loading }) => {
  console.log(data)
  return (
    <>
      <div className="today">
        <div className="time">
          <div className="time__wrap">
            <p>11:22 pm</p>
          </div>
        </div>
        <div className="location">
          <h3>{data.query}</h3>
        </div>
      </div>
      <div className="prayers">
       
      </div>
    </>
  );
};

export default ShowPrayers;
