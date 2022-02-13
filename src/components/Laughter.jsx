import React, { useEffect, useState } from "react";
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import "./Laughter.css";
import Navbar from "./navbar.components";
import Footer from "./Footer";

export const Laughter = () => {
  const [data, setData] = useState([]);
  const [langDisplay, setLangDisplay] = useState(true);
  const [genDisplay, setgenDisplay] = useState(false);
  const [formatDisplay, setformatDisplay] = useState(false);
  const [moreDisplay, setmoreDisplay] = useState(false);
  const [date, setDate] = useState(false);

  const getLaughterData = async () => {
    try {
      const res = await fetch(`http://localhost:3600/laughters`);
      const result = await res.json();
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getLaughterData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div style={{ backgroundColor: "#F5F4F4" }}>
        <div style={{ width: "100%", height: "300px" }}>
          <img
            style={{
              width: "90%",
              height: "100%",
              padding: "5px",
              margin: "auto",
            }}
            src="eventPoster.png"
            alt="poster"
          />
        </div>
        <div
          style={{ width: "80%", margin: "auto", marginTop: "20px" }}
          className="flex gap-5 mx-12"
        >
          <div className="w-2/6 ">
            <h4 className="text-2xl font-semibold">Filter</h4>
            <div className="my-10 bg-white px-4" id="box">
              <div
                className="flex justify-between"
                onClick={() => setDate(!date)}
              >
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Date</p>
                </div>
                <div className="py-2">Clear</div>
              </div>
              {date && (
                <div className="flex flex-wrap gap-4">
                  <div className=" border text-red-600 px-2 rounded-lg ">
                    Today
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg ">
                    Tomorrow
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg ">
                    This Weekend
                  </div>
                </div>
              )}
            </div>

            {/* Language */}
            <div className="my-10 bg-white px-4" id="box">
              <div
                className="flex justify-between"
                onClick={() => setLangDisplay(!langDisplay)}
              >
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Languages</p>
                </div>
                <div className="py-2">Clear</div>
              </div>
              {langDisplay && (
                <div className="flex flex-wrap gap-4">
                  <div className=" border text-red-600 px-2 rounded-lg  ">
                    English
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Hindi
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    English 7D
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Malayalam
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Punjabi
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Telugu
                  </div>
                </div>
              )}
            </div>
            {/* Language */}
            {/* Generes */}
            <div className="my-10 bg-white px-4">
              <div
                className="flex justify-between"
                onClick={() => setgenDisplay(!genDisplay)}
              >
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Categories</p>
                </div>
                <div className="py-2">Clear</div>
              </div>
              {genDisplay && (
                <div className="flex flex-wrap gap-4">
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Workshops
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Comedy Shows
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Music Shows
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Kids
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Spirituality
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Meetups
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Performances
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Confences
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Exhibitions
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Screeening
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Celebrity Wishes
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Vaccination
                  </div>
                </div>
              )}
            </div>
            {/* Generes */}
            {/* Format */}
            <div className="my-10 bg-white px-4">
              <div
                className="flex justify-between"
                onClick={() => setmoreDisplay(!moreDisplay)}
              >
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">More Filters</p>
                </div>
                <div className="py-2">Clear</div>
              </div>
              {moreDisplay && (
                <div className="flex flex-wrap gap-4">
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Online Streaming
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Outdoor Events
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Kids Allowed
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Amateur
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Kids Activities
                  </div>
                </div>
              )}
            </div>
            {/* Generes */}
            {/* Format */}
            <div className="my-10 bg-white px-4">
              <div
                className="flex justify-between"
                onClick={() => setformatDisplay(!formatDisplay)}
              >
                <div className="flex">
                  <AiOutlineDown className="mt-3 mr-1 " />
                  <p className="text-lg text-red-600 py-2">Price</p>
                </div>
                <div className="py-2">Clear</div>
              </div>
              {formatDisplay && (
                <div className="flex flex-wrap gap-4">
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Free
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    0-500
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    501-2000
                  </div>
                  <div className="border text-red-600 px-2 rounded-lg  ">
                    Above2000
                  </div>
                </div>
              )}
            </div>
            {/* Format */}
            <div className="border-red-600 border-2 py-1 text-red-600">
              Browse by Cinema
            </div>
          </div>
          <div className=" w-full">
            <h4 className="text-2xl font-semibold text-left">
              Events in Online platform
            </h4>
            <div className="flex flex-wrap gap-2 my-10">
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Workshops
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Comedy Shows
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Music Shows
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Kids
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Spirituality
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Meetups
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Performances
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Confences
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Exhibitions
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Screeening
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Celebrity Wishes
              </div>
              <div className="border-2 bg-white text-red-600 text-sm px-2 py-2 rounded-2xl">
                Vaccination
              </div>
            </div>
            {/* events */}
            <div className=" grid grid-cols-4 gap-10">
              {data.map(({ _id, banner_image, name, location }) => {
                return (
                  <div className=" border-white grid grid-cols-1" key={_id}>
                    <div className=" ">
                      <img
                        src={banner_image}
                        alt=""
                        style={{ height: "200px", borderRadius: "10px" }}
                      />
                    </div>
                    <div className="" style={{ height: "120px" }}>
                      <p className="text-left text-xl font-semibold my-4">
                        {name}
                      </p>
                      <p className="text-left text-slate-400 my-4">
                        {location}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* movies */}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
