import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Navbar from "./navbar.components";
import Footer from "./Footer";

export const Movies = () => {
  const [data, setData] = useState([]);
  const getMoviesData = async () => {
    try {
      const res = await fetch(`http://localhost:3600/movies`);
      const result = await res.json();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <div>
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
          <div className="my-10 bg-white px-4">
            <div className="flex justify-between">
              <div className="flex">
                <AiOutlineDown className="mt-3 mr-1 " />
                <p className="text-lg text-red-600 py-2">Languages</p>
              </div>
              <div className="py-2">Clear</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="border text-red-600 ">English</div>
              <div className="border text-red-600 ">Hindi</div>
              <div className="border text-red-600 ">English 7D</div>
              <div className="border text-red-600 ">Malayalam</div>
              <div className="border text-red-600 ">Punjabi</div>
              <div className="border text-red-600 ">Telugu</div>
            </div>
          </div>
          {/* Language */}
          {/* Generes */}
          <div className="my-10 bg-white px-4">
            <div className="flex justify-between">
              <div className="flex">
                <AiOutlineDown className="mt-3 mr-1 " />
                <p className="text-lg text-red-600 py-2">Generes</p>
              </div>
              <div className="py-2">Clear</div>
            </div>

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
            </div>
          </div>

          {/* Generes */}

          {/* Format */}
          <div className="my-10 bg-white px-4">
            <div className="flex justify-between">
              <div className="flex">
                <AiOutlineDown className="mt-3 mr-1 " />
                <p className="text-lg text-red-600 py-2">Format</p>
              </div>
              <div className="py-2">Clear</div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="border text-red-600 ">2D</div>
              <div className="border text-red-600 ">7D</div>
              <div className="border text-red-600 ">3D</div>
              <div className="border text-red-600 ">4DX 3D</div>
              <div className="border text-red-600 ">IMAX 2D</div>
              <div className="border text-red-600 ">IMAX 3D</div>
            </div>
          </div>
          {/* Format */}
          <div className="border-red-600 border-2 py-1 text-red-600">
            Browse by Cinema
          </div>
        </div>
        <div className=" w-full">
          <h4 className="text-2xl font-semibold text-left">
            Movies in National Capital Region (NCR)
          </h4>
          <div className="flex gap-2 my-10">
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
          </div>
          <div className="bg-white flex justify-between my-10">
            <div className="text-2xl font-semibold px-4 py-4">Coming Soon</div>
            <div className="flex px-4 py-4 gap-1 text-red-600">
              Explore Upcoming Movies <AiOutlineRight className="mt-1 " />
            </div>
          </div>
          {/* movies */}

          <div className=" grid grid-cols-4 gap-10">
            {data.map(
              ({
                cover_image_url,
                movie_name,
                movie_grade,
                languages,
                _id,
              }) => {
                return (
                  <div className="rounded-2xl border-2 border-white" key={_id}>
                    <img
                      src={cover_image_url}
                      alt=""
                      className="h-56 object-cover"
                    />
                    <p className="text-left text-xl font-semibold my-4">
                      {movie_name}
                    </p>
                    <p className="text-left text-slate-400 my-4">
                      {movie_grade}
                    </p>
                    <p className="text-left text-slate-400 my-4">{languages}</p>
                    <Link to={`/movies/${_id}`}>see Details</Link>
                  </div>
                );
              }
            )}
          </div>
          {/* movies */}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
