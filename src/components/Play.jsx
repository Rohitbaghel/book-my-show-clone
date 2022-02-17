import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import Modal from "react-modal";
import "./Play.css";
import Navbar from "./navbar.components";
import Footer from "./Footer";

export const Play = () => {
  const [data, setData] = useState([]);
  const getLatestPlay = async () => {
    try {
      const res = await fetch(`http://localhost:3600/latests`);
      const result = await res.json();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getLatestPlay();
  }, []);

  return (
    <>
      <div className="container ">
        <div className="navbar">
          <Navbar />
        </div>
        <div
          style={{ backgroundColor: "#F5F4F4" }}
          className="flex gap-5 mx-12 mt-5"
        >
          <div className="w-2/6 ">
            <h4 className="text-2xl font-semibold">Filter</h4>
            {/* Language */}
            {/* <div className="my-10 bg-white px-4">
              <div className="flex justify-between">
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Languages</p>
                </div>
                <div className="py-2">Clear</div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="border text-red-600  ">English</div>
                <div className="border text-red-600 ">Hindi</div>
                <div className="border text-red-600 ">English 7D</div>
                <div className="border text-red-600 ">Malayalam</div>
                <div className="border text-red-600 ">Punjabi</div>
                <div className="border text-red-600 ">Telugu</div>
              </div>
            </div> */}

            {/* Language */}
            {/* Generes */}
            <div className="my-10 bg-white px-4">
              {/* <div className="flex justify-between">
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Generes</p>
                </div>
                <div className="py-2">Clear</div>
              </div> */}
              {/* 
            <div className="grid grid-cols-3 gap-3">
              <div className="border text-red-600 ">Action</div>
              <div className="border text-red-600 ">Adventure</div>
              <div className="border text-red-600 ">Drama</div>
              <div className="border text-red-600 ">Thriller</div>
              <div className="border text-red-600 ">Comedy</div>
              <div className="border text-red-600 ">Romantic</div>
              <div className="border text-red-600 ">Sci-Fi</div>
              <div className="border text-red-600 ">Animation</div>
              <div className="border text-red-600 ">Crime</div>
              <div className="border text-red-600 ">Fantasy</div>
              <div className="border text-red-600 ">Horror</div>
              <div className="border text-red-600 ">Sports</div>
            </div> */}
            </div>

            {/* Generes */}

            {/* Format */}
            {/* <div className="my-10 bg-white px-4">
              <div className="flex justify-between">
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Format</p>
                </div>
                <div className="py-2">Clear</div>
              </div> */}
            {/* <div className="grid grid-cols-3 gap-3">
              <div className="border text-red-600 ">2D</div>
              <div className="border text-red-600 ">7D</div>
              <div className="border text-red-600 ">3D</div>
              <div className="border text-red-600 ">4DX 3D</div>
              <div className="border text-red-600 ">IMAX 2D</div>
              <div className="border text-red-600 ">IMAX 3D</div>
            </div> */}
            {/* </div> */}

            {/* Date  */}
            <div class="dropdown grid grid-cols-3 gap-3 mt-8 mb-5">
              <span>
                {" "}
                {/* <h3 style={{ display: "flex", color: "red" }}> */}
                <h3>
                  Date <AiOutlineDown className=" " />{" "}
                </h3>
              </span>
              <div class="dropdown-content">
                <button className="border-grey text-red-600">Today</button>
                <button className="border text-red-600">Tomorrow</button>
                <button className="border text-red-600">This Weekend</button>
              </div>
            </div>

            {/* //languages */}
            <div class="dropdown grid grid-cols-3 gap-3 mt-8 mb-5">
              <span>
                {" "}
                {/* <h3 style={{ display: "flex", color: "red" }}> */}
                <h3>
                  Languages <AiOutlineDown className=" " />{" "}
                </h3>
              </span>
              <div class="dropdown-content">
                <button className="border-grey text-red-600">English</button>
                <button className="border text-red-600">Tamil</button>
                <button className="border text-red-600">Hindi</button>
                <button className="border text-red-600">Hindustani</button>
                <button className="border text-red-600">Urdu</button>
              </div>
            </div>

            <div class="dropdown grid grid-cols-3 gap-3 mt-12">
              <span>
                {" "}
                {/* <h3 style={{ display: "flex", color: "red" }}> */}
                <h3>
                  Categories <AiOutlineDown className=" " />{" "}
                </h3>
              </span>
              <div class="dropdown-content">
                <button className="border-grey text-red-600">Theatre</button>
                <button className="border text-red-600">Storytelling</button>
              </div>
            </div>

            <div class="dropdown grid grid-cols-3 gap-3 mt-8">
              <span>
                {" "}
                {/* <h3 style={{ display: "flex", color: "red" }}> */}
                <h3>
                  Genres <AiOutlineDown className=" " />{" "}
                </h3>
              </span>
              <div class="dropdown-content">
                <button className="border-grey text-red-600">Comedy</button>
                <button className="border text-red-600">Drama</button>
              </div>
            </div>

            <div class="dropdown grid grid-cols-3 mt-8">
              <span>
                {" "}
                {/* <h3 style={{ display: "flex", color: "red" }}> */}
                <h3>
                  More Filter <AiOutlineDown className=" " />{" "}
                </h3>
              </span>
              <div class="dropdown-content">
                <button className="border-grey text-red-600">
                  Kids Allowed
                </button>
                <button className="border text-red-600">
                  Online Streaming
                </button>
                <button className="border text-red-600">Outdor Event</button>
              </div>
            </div>

            <div class="dropdown grid grid-cols-3 gap-3 mt-14 mb-14">
              <span>
                {" "}
                {/* <h3 style={{ display: "flex", color: "red" }}> */}
                <h3>
                  Price <AiOutlineDown className=" " />{" "}
                </h3>
              </span>
              <div class="dropdown-content">
                <button className="border-grey text-red-600">Free</button>
                <button className="border text-red-600">0-500</button>
                <button className="border text-red-600">501-2000</button>
                <button className="border text-red-600">Above 2000</button>
              </div>
            </div>
            {/* Format */}
            <div className="border-red-600 border-2 py-1 text-red-600">
              Browse by Venues
            </div>
          </div>
          <div className=" w-full">
            <h4 className="text-2xl font-semibold text-left">
              Plays in National Capital Region (NCR)
            </h4>
            <div className="flex gap-2 theatre">
              <button>Theatre</button>
              <button> Storytelling</button>
            </div>
            {/* <div className="flex gap-2 my-10">
            <div className="border-2 bg-white text-red-600 text-lg px-2 py-1 rounded-2xl">
              English
            </div>
            <div className="border-2 bg-white text-red-600 text-lg px-2 py-1 rounded-2xl">
              Hindi
            </div>
            <div className="border-2 bg-white text-red-600 text-lg px-2 py-1 rounded-2xl">
              English 7D
            </div>
            <div className="border-2 bg-white text-red-600 text-lg px-2 py-1 rounded-2xl">
              Malayalam
            </div>
            <div className="border-2 bg-white text-red-600 text-lg px-2 py-1 rounded-2xl">
              Punjabi
            </div>
            <div className="border-2 bg-white text-red-600 text-lg px-2 py-1 rounded-2xl">
              Telugu
            </div>
          </div> */}
            <div className="bg-white flex justify-between my-10">
              <div className="text-2xl font-semibold px-4 py-4">
                Coming Soon
              </div>
              {/* <div className="flex px-4 py-4 gap-1 text-red-600">
              Explore Upcoming Movies <AiOutlineRight className="mt-1 " />
            </div> */}
            </div>
            {/* Play */}

            <div className=" grid grid-cols-4 gap-10">
              {data.map(({ banner_image, name, location, _id }) => {
                return (
                  <div className="rounded-2xl border-2 border-white" key={_id}>
                    <img
                      src={banner_image}
                      alt=""
                      className="h-56 object-cover"
                    />
                    <p className="text-left text-xl font-semibold my-4">
                      {name}
                    </p>
                    <p className="text-left text-slate-400 my-4">{location}</p>
                    <p className="text-left text-slate-400 my-4">{}</p>
                  </div>
                );
              })}
            </div>
            {/* Play */}
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};
