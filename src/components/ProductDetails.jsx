import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import Navbar from "./navbar.components";
import Footer from "./Footer";

export const ProductDetails = () => {
  const { Id } = useParams();
  console.log(useParams);

  const [data, setData] = useState({});
  const getMoviesDatabyID = async () => {
    try {
      let res = await fetch(`http://localhost:3600/movies/${Id}`);
      let result = await res.json();
      console.log(result);
      setData(result);
      // console.log(data)
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getMoviesDatabyID();
  }, []);
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      {/* style={{backgroundImage:`url(${1})`}} */}
      <div>
        <div className="flex border-2 bg-black">
          <div className=" mx-20  border-4 w-1/6 h-80">
            <img src={data.cover_image_url} alt="" className="w-full h-full" />
          </div>
          <div className="">
            <p className="text-4xl font-bold mt-10 text-white">
              {data.movie_name}
            </p>
            <p className="text-white text-left my-4">
              <span className="text-2xl font-bold">
                ❤ {data?.rating?.percentage}%{" "}
              </span>
              {data?.rating?.no_of_ratings} ratings
            </p>
            <div
              className="flex justify-between text-white border px-2 py-2 my-4 rounded-xl"
              style={{ backgroundColor: "#333333" }}
            >
              <div className="">
                <p>Add Your Rating & review</p>
                <p>Your rating matter</p>
              </div>
              <div className="border px-1 py-1 bg-white text-black rounded-lg m-auto">
                Rate Now
              </div>
            </div>
            <div className="flex my-2">
              <div className="border text-black bg-white mr-2 px-2">
                {data?.screen_type?.[1].type ?? "3D"}
              </div>
              <div className="border text-black bg-white px-4">
                {data?.languages}
              </div>
            </div>
            <div className="text-white text-left my-2">
              <span className="mx-2">{data?.movie_duration}</span>
              <span className="mx-1">
                {data?.movie_genre?.[0]?.genre},&#32;
                {data?.movie_genre?.[1]?.genre},&#32;
                {data?.movie_genre?.[2]?.genre}{" "}
              </span>
              <span className="mx-2">{data?.movie_grade}</span>
              <span>{data?.release_date}</span>
            </div>
            <Link to="/cinema">
              <button className="text-white border px-8 py-2 bg-red-600 rounded-xl ">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        <div className="text-left lg:mx-80 ">
          <div className="my-8">
            <p className="text-3xl font-bold my-8">About the Movies</p>
            <p>{data?.about_movie}</p>
          </div>
          {/* cast */}
          <div>
            <p className="text-3xl font-bold my-8">Cast</p>
            <div className="grid grid-cols-6 gap-3">
              <div>
                <img
                  src={data?.cast?.[0]?.cast_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">
                  {data?.cast?.[0]?.original_name}
                </p>
                <p className="text-center mt-2">{data?.cast?.[0]?.character}</p>
              </div>
              <div>
                <img
                  src={data?.cast?.[1]?.cast_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">
                  {data?.cast?.[1]?.original_name}
                </p>
                <p className="text-center mt-2">{data?.cast?.[1]?.character}</p>
              </div>
              <div>
                <img
                  src={data?.cast?.[2]?.cast_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">
                  {data?.cast?.[2]?.original_name}
                </p>
                <p className="text-center mt-2">{data?.cast?.[2]?.character}</p>
              </div>
              <div>
                <img
                  src={data?.cast?.[3]?.cast_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">
                  {data?.cast?.[3]?.original_name}
                </p>
                <p className="text-center mt-2">{data?.cast?.[3]?.character}</p>
              </div>
              <div>
                <img
                  src={data?.cast?.[4]?.cast_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">
                  {data?.cast?.[4]?.original_name}
                </p>
                <p className="text-center mt-2">{data?.cast?.[4]?.character}</p>
              </div>
              <div>
                <img
                  src={data?.cast?.[5]?.cast_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">
                  {data?.cast?.[5]?.original_name}
                </p>
                <p className="text-center mt-2">{data?.cast?.[5]?.character}</p>
              </div>
            </div>
          </div>
          {/* cast */}
          {/* Crew */}
          <div className="my-8">
            <p className="text-3xl font-bold my-8">Crew</p>
            <div className="grid grid-cols-7 gap-3">
              <div>
                <img
                  src={data?.crew?.[0]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[0]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[0]?.crew_position}
                </p>
              </div>
              <div>
                <img
                  src={data?.crew?.[1]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[1]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[1]?.crew_position}
                </p>
              </div>
              <div>
                <img
                  src={data?.crew?.[2]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[2]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[2]?.crew_position}
                </p>
              </div>
              <div>
                <img
                  src={data?.crew?.[3]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[3]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[3]?.crew_position}
                </p>
              </div>
              <div>
                <img
                  src={data?.crew?.[4]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[4]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[4]?.crew_position}
                </p>
              </div>
              <div>
                <img
                  src={data?.crew?.[5]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[5]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[5]?.crew_position}
                </p>
              </div>
              <div>
                <img
                  src={data?.crew?.[6]?.crew_image}
                  alt=""
                  className="w-full rounded-full"
                />
                <p className="text-center mt-2">{data?.crew?.[6]?.name}</p>
                <p className="text-center mt-2">
                  {data?.crew?.[6]?.crew_position}
                </p>
              </div>
            </div>
          </div>
          {/* Crew */}
          {/* Top reviews */}
          <div>
            <div className="flex justify-between">
              <div className="text-3xl font-bold ">Top reviews</div>
              <div className="text-red-600">242.4K reviews </div>
            </div>
            <div>
              <p className="my-4">Summary of 242.4k reviews.</p>
              <div className="grid grid-cols-5 gap-4">
                <div className="flex border justify-between rounded-xl">
                  <div className="mx-4 text-red-600 my-1">#GreatActing</div>
                  <div className="mr-8 border my-1">88985</div>
                </div>
                <div className="flex border justify-between rounded-xl">
                  <div className="mx-4 text-red-600 my-1">#Blockbuster</div>
                  <div className="mr-8 border my-1">84225</div>
                </div>
                <div className="flex border justify-between rounded-xl">
                  <div className="mx-4 text-red-600 my-1">#Superdirection</div>
                  <div className="mr-8 border my-1">72698</div>
                </div>
                <div className="flex border justify-between rounded-xl">
                  <div className="mx-4 text-red-600 my-1">#Rocking</div>
                  <div className="mr-8 border my-1">62828</div>
                </div>
                <div className="flex border justify-between rounded-xl">
                  <div className="mx-4 text-red-600 my-1">#WowMusic</div>
                  <div className="mr-8 border my-1">49701</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 my-4">
                <div className="border">
                  <div className="flex  justify-between ">
                    <div className="flex">
                      <FaRegUserCircle className="text-3xl mr-4" />
                      <div>Chunduri</div>
                    </div>
                    <div className="mr-2">🧡 100%</div>
                  </div>
                  <p className="my-10 text-lg font-bold">
                    #SuperDirection #GreatActing #WowMusic #Bi....
                  </p>
                  <div className="flex  justify-between ">
                    <div className="flex">
                      <AiOutlineLike className="text-3xl mr-2 mb-1" />
                      <div>2.5K </div>
                      <AiOutlineDislike className="text-3xl ml-2 " />
                    </div>
                    <div className="mr-2">35 Days ago</div>
                  </div>
                </div>
                <div className="border">
                  <div className="flex  justify-between ">
                    <div className="flex">
                      <FaRegUserCircle className="text-3xl mr-4" />
                      <div>Prashanth</div>
                    </div>
                    <div className="mr-2">🧡 100%</div>
                  </div>
                  <p className="my-10 text-lg font-bold">
                    {" "}
                    #GreatActing #WowMusic{" "}
                  </p>
                  <div className="flex  justify-between ">
                    <div className="flex">
                      <AiOutlineLike className="text-3xl mr-2 mb-1" />
                      <div>1.5K </div>
                      <AiOutlineDislike className="text-3xl ml-2 " />
                    </div>
                    <div className="mr-2">35 Days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Top reviews */}
          {/* You Might also Like */}
          <div>
            <p className="text-3xl font-bold my-8">You Might also Like</p>
          </div>

          {/* You Might also Like */}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
