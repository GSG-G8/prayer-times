import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setTime(new Date());
    }, 1 * 1000);
    return () => {
      clearInterval(clock);
    };
  }, [time]);
  return (
    <>
      <p>{time.toLocaleTimeString()}</p>
    </>
  );
};

export default Clock;
