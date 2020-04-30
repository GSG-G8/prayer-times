import React from "react";

const ShowPrayers = ({ data }) => {
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
        <div className="day">
          <class className="dayOfWeek">Fajr</class>
          <div className="prayer-time">{data.items[0].fajr}</div>
        </div>

        <div className="day">
          <class className="dayOfWeek">Shurooq</class>
          <div className="prayer-time">{data.items[0].shurooq}</div>
        </div>

        <div className="day">
          <class className="dayOfWeek">Dhuhr</class>
          <div className="prayer-time">{data.items[0].dhuhr}</div>
        </div>

        <div className="day">
          <class className="dayOfWeek">Asr</class>
          <div className="prayer-time">{data.items[0].asr}</div>
        </div>

        <div className="day">
          <class className="dayOfWeek">Maghrib</class>
          <div className="prayer-time">{data.items[0].maghrib}</div>
        </div>

        <div className="day">
          <class className="dayOfWeek">Isha</class>
          <div className="prayer-time">{data.items[0].isha}</div>
        </div>
      </div>
    </>
  );
};

export default ShowPrayers;
