import React from "react";
import "./style.css";
const ShowPrayers = ({ data, loading }) => {
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
        <div className="day">
          <div className="dayOfWeek">Fajr</div>
          <div className="prayer-time">{data.items[0].fajr}</div>
        </div>

        <div className="day">
          <div className="dayOfWeek">Shurooq</div>
          <div className="prayer-time">{data.items[0].shurooq}</div>
        </div>

        <div className="day">
          <div className="dayOfWeek">Dhuhr</div>
          <div className="prayer-time">{data.items[0].dhuhr}</div>
        </div>

        <div className="day">
          <div className="dayOfWeek">Asr</div>
          <div className="prayer-time">{data.items[0].asr}</div>
        </div>

        <div className="day">
          <div className="dayOfWeek">Maghrib</div>
          <div className="prayer-time">{data.items[0].maghrib}</div>
        </div>

        <div className="day">
          <div className="dayOfWeek">Isha</div>
          <div className="prayer-time">{data.items[0].isha}</div>
        </div>
      </div>
    </>
  );
};

export default ShowPrayers;
