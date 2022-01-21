// http://localhost:3600/cinemas
import { useState, useEffect } from "react";

export const Cinema = () => {
  const [cinemaTime, setCinemaTime] = useState([]);

  const getCinemaTime = async () => {
    try {
      const data = await fetch(` http://localhost:3600/cinemas`);
      const cinemaTime = data.json();
      console.log(cinemaTime);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect =
    (() => {
      getCinemaTime();
    },
    []);
  return <div></div>;
};
