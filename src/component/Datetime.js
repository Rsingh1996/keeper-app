import React, { useState, useEffect } from "react";

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the current date and time every second
    // const intervalId = setInterval(() => {
    //   setCurrentDateTime(new Date());
    // }, 1000);
    setCurrentDateTime(new Date());

    // Cleanup the interval on component unmount
    return () => clearInterval();
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
    // second: "numeric",
    // timeZoneName: "short",
  };

  const formattedDate = currentDateTime.toLocaleString(undefined, options);

  return (
    <div className="date-time">
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTimeComponent;
