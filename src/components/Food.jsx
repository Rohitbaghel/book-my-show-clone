import React, { useState, useEffect } from "react";
import { SiPaytm } from "react-icons/si";
import { AiFillDownCircle, AiOutlineHome } from "react-icons/ai";
import { BiFoodTag } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
export const Food = () => {
  const navigate = useNavigate();
  const [food, setFood] = useState([]);
  const getFood = async () => {
    try {
      let res = await fetch(`http://localhost:3600/foods`);
      let result = await res.json();
      console.log(result);
      setFood(result);
      // console.log(data)
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getFood();
  }, []);
  return (
    <>
      <div className="flex">
        <div className="px-10">
          <div>
            <img
              src="https://in.bmscdn.com/promotions/cms/creatives/1637860677199_728x100.png"
              alt="12"
              className="w-full"
            />
          </div>
          {/* food section */}
          <div style={{ backgroundColor: "#FFFFFF" }}>
            <h2 className="text-center text-2xl">
              Grab a <span className="text-2xl text-red-600">bite!</span>
            </h2>
            <p className="text-center">Prebook Your Meal and Save More!</p>
            <div className="flex lg:mx-60 gap-3  ">
              <div className="ml-2">
                <button className="border rounded-lg px-4 bg-red-600">
                  All
                </button>
              </div>
              <div className="ml-2">
                <button className="border rounded-lg px-2 ">Combo</button>
              </div>
              <div className="ml-2">
                <button className="border rounded-lg px-2 ">Snack</button>
              </div>
              <div>
                <button className="border rounded-lg px-2 mr-15  w-full ">
                  Beverages
                </button>
              </div>
              <div>
                <button className="border rounded-lg px-2 ml-2 w-full">
                  Popcorn
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {food.map(
                ({ food_image, food_name, food_tag, food_price, _id }) => {
                  return (
                    <div key={_id}>
                      <img src={food_image} alt="" />
                      <div className="flex border justify-between ">
                        <div className="w-full">
                          <p className="text-md">{food_name}</p>
                          <p className="text-sm">{food_tag}</p>
                          <p className="text-sm">{food_price}gms</p>
                        </div>
                        <div className="">
                          <BiFoodTag className="bg-green-600 mt-2 " />
                          <button className="border rounded-lg  mt-2 text-red-600 ">
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          {/* food section */}
        </div>
        <div>
          <div>
            <p className="text-2xl text-red-600">Booking Summary</p>
            <div className="flex justify-between">
              <div className="my-4">
                <p className="my-4"> CLASSIC - L1 ( 1 Ticket )</p>
                <p className="my-4">AUDI 3</p>
              </div>
              <div>
                <p className="my-6">Rs. 150.00</p>
                <p className="my-4">Rs.28.32</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <div className="my-4">
                <p className="my-4">Sub total</p>
              </div>
              <div>
                <p className="mt-8">Rs.178.32</p>
              </div>
            </div>
          </div>
          <p>
            Your current state is <span>Delhi</span>
          </p>
          <div
            className="flex justify-between my-4"
            style={{ backgroundColor: "#FFFDDD" }}
          >
            <div>
              <p>Amount Payable</p>
            </div>
            <div>
              <p>Rs. 179.32</p>
            </div>
          </div>
          <p>Select Ticket Type</p>
          <div className="flex justify-between">
            <div>
              <SiPaytm className="text-6xl" />
            </div>
            <div>
              <AiOutlineHome className="text-4xl mt-2" />
            </div>
          </div>
          <p>Show the m-ticket QR Code on your mobile to enter the cinema.</p>
          <a href="https://paytmpaymenttest.herokuapp.com/">
            <button
              className="border px-8 text-2xl font-bold hover:bg-red-600"
              onClick={() => {
                //   Navigate("http://localhost:4000");
              }}
            >
              Buy Ticket
            </button>
          </a>

          <p>
            You can cancel the tickets 20 min(s) before the show. Refunds will
            be done according to Cancellation Policy
          </p>
        </div>
      </div>
    </>
  );
};
