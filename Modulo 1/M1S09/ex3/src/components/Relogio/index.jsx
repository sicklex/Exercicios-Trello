import React, { useEffect, useState } from "react";

function Relogio() {
  const [second, setSeconds] = useState(new Date().getSeconds());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());
  setInterval(() => {
    setSeconds(new Date().getSeconds());
    setMinutes(new Date().getMinutes());
    setHour(new Date().getHours());
  }, 1000);
  return (
    <div>
      {hour}:{minutes}:{second}
    </div>
  );
}

export default Relogio;
