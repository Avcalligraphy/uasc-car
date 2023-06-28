import React, { useEffect, useState } from "react";

const Clock = () => {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      setClock(
        `${hours.toString().padStart(2, "0")}.${minutes
          .toString()
          .padStart(2, "0")}`
      );
    }, 1000);
  }, []);
  return <h4 className="m_clock">{clock}</h4>;
};

export default Clock;
