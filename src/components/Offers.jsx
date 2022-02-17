import React from "react";
import Navbar from "./navbar.components";
import Footer from "./Footer";
import {
  BsCreditCard2Back,
  BsCaretRightSquare,
  BsWallet2,
  BsTrophy,
} from "react-icons/bs";

export const Offers = () => {
  const offerContainer = [
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.OZQeE71tVB5m_aBp-1x5NwAAAA&pid=Api",
      name: "ICII BANK CREDIT CART",
      date: "vailid till 31 March 2022",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.vMaH24XGCQZhtBNj9rQ68QAAAA&pid=Api",
      name: "RBL BANK CREDIT CART",
      date: "vailid till 30 March 2023",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.wzE03ciVRmw8DxR_fu27gQHaDT&pid=Api",
      name: "HDFC BANK CREDIT CART",
      date: "vailid till 31 Aprail 2023",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.vKkDKT0hXmGwx-ujSykwtAHaFj&pid=Api",
      name: "RBL BANK CART",
      date: "vailid till 31 Octuber 2022",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.LSYhCdrhWi8XPfWb4TksnwAAAA&pid=Api",
      name: "KOTAK BANK CREDIT CART",
      date: "vailid till 31 January 2023",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.fMHzg7Gy2KSYeH9DOiWvCwAAAA&pid=Api",
      name: "AXIS BANK CREDIT CART",
      date: "vailid till 31 March 2022",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.AsS7_mZPIrInQYaD1LD0sgAAAA&pid=Api",
      name: "SOUTH INDIAN BANK CART",
      date: "vailid till 31 March 2023",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.GdxiZOnbB3LCKS-HE2XNFwHaD4&pid=Api",
      name: "GRAB ON",
      date: "vailid till 31 November 2022",
    },
    {
      img: "https://tse4.mm.bing.net/th?id=OIP.6PAiuJdVPnw06xyOyefm8AHaEW&pid=Api ",
      name: "HDFC BANK CREDIT CART",
      date: "vailid till 20 March 2022",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.CiBJoTt02X5SA0pS-YVosgHaD8&pid=Api",
      name: "HDFC BANK",
      date: "vailid till 31 March 2023",
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.fMHzg7Gy2KSYeH9DOiWvCwAAAA&pid=Api",
      name: "AXIS BANK CART",
      date: "vailid till 31 March 2022",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.mXFCIDUuEG38krMbnFeH5QHaIG&pid=Api",
      name: "SENIORS CLUB",
      date: "vailid till 31 March 2022",
    },
  ];
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="offer-cantainer mt-5">
        <div className="upperBox" style={{ textAlign: "center" }}>
          <div className="poster" style={{ width: "80%", margin: "auto" }}>
            <img src="Poster.png" alt="poster" />
          </div>
          <div className="offerfilter" style={{ marginTop: "50px" }}>
            <h3 style={{ color: "gray", fontSize: "25px" }}>
              FILTER OFFERS BY
            </h3>
            <div
              className="btnDiv"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <div
                className="o-btn"
                style={{
                  width: "55px",
                  height: "60px",
                  padding: "3px",
                  margin: "0 10px",
                  color: "gray",
                }}
              >
                <div
                  className="hover:bg-pink-600 hover:text-white"
                  style={{
                    width: "100%",
                    height: "80%",
                    border: "0.5px solid gray",
                    borderRadius: "5px",
                  }}
                >
                  <BsCreditCard2Back style={{ width: "100%", height: "80%" }} />
                </div>
                <div style={{ width: "100%", height: "20%", fontSize: "10px" }}>
                  Credit Cart
                </div>
              </div>
              <div
                className="o-btn"
                style={{
                  width: "55px",
                  height: "60px",
                  padding: "3px",
                  margin: "0 10px",
                  color: "gray",
                }}
              >
                <div
                  className="hover:bg-pink-600 hover:text-white"
                  style={{
                    width: "100%",
                    height: "80%",
                    border: "0.5px solid gray",
                    borderRadius: "5px",
                  }}
                >
                  <BsCreditCard2Back style={{ width: "100%", height: "80%" }} />
                </div>
                <div style={{ width: "100%", height: "20%", fontSize: "10px" }}>
                  Debit Cart
                </div>
              </div>
              <div
                className="o-btn"
                style={{
                  width: "55px",
                  height: "60px",
                  padding: "3px",
                  margin: "0 10px",
                  color: "gray",
                }}
              >
                <div
                  className="hover:bg-pink-600 hover:text-white"
                  style={{
                    width: "100%",
                    height: "80%",
                    border: "0.5px solid gray",
                    borderRadius: "5px",
                  }}
                >
                  <BsCaretRightSquare
                    style={{ width: "100%", height: "65%", marginTop: "3px" }}
                  />
                </div>
                <div style={{ width: "100%", height: "20%", fontSize: "10px" }}>
                  BookMyShow
                </div>
              </div>
              <div
                className="o-btn"
                style={{
                  width: "55px",
                  height: "60px",
                  padding: "3px",
                  margin: "0 10px",
                  color: "gray",
                }}
              >
                <div
                  className="hover:bg-pink-600 hover:text-white"
                  style={{
                    width: "100%",
                    height: "80%",
                    border: "0.5px solid gray",
                    borderRadius: "5px",
                  }}
                >
                  <BsWallet2
                    style={{ width: "100%", height: "70%", marginTop: "3px" }}
                  />
                </div>
                <div style={{ width: "100%", height: "20%", fontSize: "10px" }}>
                  Wallet
                </div>
              </div>
              <div
                className="o-btn"
                style={{
                  width: "55px",
                  height: "60px",
                  padding: "3px",
                  color: "gray",
                }}
              >
                <div
                  className="hover:bg-pink-600 hover:text-white "
                  style={{
                    width: "100%",
                    height: "80%",
                    border: "0.5px solid gray",
                    borderRadius: "5px",
                  }}
                >
                  <BsTrophy
                    style={{ width: "100%", height: "65%", marginTop: "3px" }}
                  />
                </div>
                <div style={{ width: "100%", height: "20%", fontSize: "10px" }}>
                  Rewards
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lowerBox" style={{ backgroundColor: "#F2F2F2" }}>
          <div
            style={{
              width: "70%",
              margin: "auto",
              display: "grid",
              gridTemplateColumns: "auto auto auto auto",
              marginTop: "50px",
            }}
          >
            {offerContainer.map((el) => {
              return (
                <div
                  className="hover:shadow-xl hover:shadow-gray-500/100"
                  style={{
                    width: "90%",
                    height: "90%",
                    margin: "auto",
                    border: "1px solid gray",
                    borderRadius: "10px",
                    backgroundColor: "white",
                    textAlign: "center",
                  }}
                >
                  <div style={{ height: "80%" }}>
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={el.img}
                      alt="Banks"
                    />
                  </div>
                  <div>
                    <p>{el.name}</p>
                    <p style={{ color: "gray", fontSize: "15px" }}>{el.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
