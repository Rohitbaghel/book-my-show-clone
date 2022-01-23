// http://localhost:3600/cinemas
import React from "react";
import { useState, useEffect } from "react";
import "./Cinema.css";
import Navbar from "./navbar.components";
import { AiFillSafetyCertificate, AiOutlineMobile } from "react-icons/ai";
import { MdOutlineFastfood } from "react-icons/md";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export const Cinema = () => {
  const [cinemaTime, setCinemaTime] = useState([]);

  const getCinemaTime = async () => {
    try {
      const data = await fetch(` http://localhost:3600/cinemas`);
      const res = await data.json();
      console.log("response:", res);
      setCinemaTime(res);
    } catch (err) {
      console.log("error:", err);
    }
  };

  useEffect(() => {
    getCinemaTime();
  }, []);
  console.log("Data", cinemaTime);
  return (
    <div className="cinemaContainer">
      {/* <Navbar /> */}
      <div className="navbar">
        <Navbar />
      </div>
      <div className="moviesContainer"></div>
      <div className="banner">
        <div className=" ticket">
          <h1>
            <AiOutlineMobile />
          </h1>
          <h4> M-Ticket</h4>
        </div>
        <div className=" ticket">
          <h1>
            <MdOutlineFastfood />
          </h1>
          <h3>food beverages available</h3>
        </div>
      </div>

      <div className="leftCinema">
        {cinemaTime.map(
          ({ name, timings, sub_region, cancellation_availability, _id }) => {
            return (
              <div key={_id}>
                <div className="cinemaName ">
                  <div className=" name">
                    ❤<h3> {name} </h3>
                    <div className=" ticket info ">
                      <h3>
                        {" "}
                        <AiFillSafetyCertificate />
                      </h3>
                      <h5>INFO</h5>
                    </div>
                  </div>
                  <div className=" ticket">
                    <h1>
                      <AiOutlineMobile />
                    </h1>
                    <h3 className="Teal"> M-Ticket</h3>
                    <div className=" ticket">
                      <h1>
                        <MdOutlineFastfood />
                      </h1>
                      <h3>F&B</h3>
                    </div>
                    <div className="timings">
                      {timings.forEach((e) => {
                        for (const key in e) {
                          <div> {`${e[key]}`}</div>;
                        }
                      })}
                      {/* Add redirect path here  */}
                      <Link to="/foods">
                        <button onClick={() => {}}>2:30PM </button>
                      </Link>
                      <Link to="/foods">
                        <button>11:30AM</button>
                      </Link>
                      <Link to="/foods">
                        <button>4:30PM</button>
                      </Link>

                      <div className="ticket">
                        {" "}
                        <h6>🟢</h6>{" "}
                        {` cancellation-availability: ${cancellation_availability}`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="rightCinema"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
