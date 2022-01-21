import React from "react";
import { GiBarracksTent } from "react-icons/gi";
import {
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsLinkedin,
} from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoTicketSharp } from "react-icons/io5";
import { IoIosMailOpen } from "react-icons/io";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black">
      {/* privacy note */}
      <div style={{ backgroundColor: "#F2F3F3" }} className="">
        <p className="text-left ml-16 text-2xl font-bold">Privacy Note</p>
        <div className="ml-16 mr-16">
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at{" "}
          <a href="/privacy">https://bookmyshow.com/privacy</a> governing your
          access to Bookmyshow and provision of services by Bookmyshow to you.
          If you do not accept terms mentioned in the{" "}
          <a href="/privacy">Privacy Policy</a>, you must not share any of your
          personal information and immediately exit Bookmyshow.
        </div>
      </div>
      {/* privacy note */}
      {/* list Show */}
      <div>
        <div className="flex justify-between text-white ml-16 mr-16 bg-black">
          <div className="flex">
            <GiBarracksTent className="text-4xl" />{" "}
            <p className="ml-2 text-lg mt-2">List your Show</p>
            <div className="ml-4 text-lg mt-2 mb-4">
              Got a show, event, activity or a great experience? Partner with us
              &amp; get listed on BookMyShow
            </div>
          </div>
          <div>
            <p className="text-lg mt-2 border-2 bg-red-600">Contact today!</p>
          </div>
        </div>
      </div>

      {/* list Show */}
      {/* Customer care */}
      <div
        className="flex justify-between "
        style={{ backgroundColor: "#404142" }}
      >
        <div className="ml-36">
          <RiCustomerService2Fill className="text-6xl" />
          <p className="-ml-10">24/7CUSTOMER CARE</p>
        </div>
        <div>
          <IoTicketSharp className="text-6xl ml-24" />
          <p>PRESEND BOOKING CONFIRMATION</p>
        </div>
        <div className="">
          <IoIosMailOpen className="text-6xl mr-48" />
          <p className="-ml-10">SUBSCRIBE TO NEWSLETTER</p>
        </div>
      </div>
      {/* Customer care */}
      {/* Details */}
      <div className="bg-black text-white ml-16 mr-16">
        <h6 className="mt-3 mb-3">
          Movies Playing in National Capital Region (NCR)
        </h6>
        <p>
          The House of Dead Horror |Wild Roller Coaster | Prehistoric Adventure
          | Pushpa:The Rise - Part 01 |83 | Spider-Man:No way Home | Shooter
          |The King's Man | Chandigarh Kare Aashiqui | Banglore
        </p>
        <h6 className="mt-3 mb-3">Upcoming Movies</h6>
        <p>
          Thuramukham | The 355 | Hridayam | Swastik Sanket | AGP | Varma(Veedu
          Teda) |Vadhu Katnam | Ek Love ya | Marutha | Zoombivli | Iswarya
          Murugan | Ala Vaikunthapurramuloo | Veerame Vaagai Soodum | Gangs of
          18 | Saamanyudu | Thamezharasan |DJ Tillu| Kallan D`Souza | Jai Bheem
          |Ombatthane Dikku{" "}
        </p>
        <h6 className="mt-3 mb-3">Movies By Genre</h6>
        <p>
          Adventure Movies |Action Movies |Comedy Movies |Drama
          Movies|Supernatural Movies| Tragedy Movies | Adaptation Movies
          |Devotional Movies | Mystery Movies | Fantasy Movies | Sports Movies
          |Animation Movies |Classic Movies | Adult Movies | Crime Movies
          |Political Movies |screening Movies|Suspense Movies|Romantic
          Movies|Biography Movies|Bollywood Movies|War Movies|Heist Movies|
          Musical Movies |Mythological Movies | Noir Movies | Anime Movies|
          Psychological Movies{" "}
        </p>
        <h6 className="mt-3 mb-3">Movies By Language</h6>
        <p>
          Movies in Hindi |Movies in English |Movies in English 7D |Movies in
          Nepali |Movies in Haryanavi |Movies in Tulu |Movies in Sindhi |Movies
          in Japanese |Movies in Assamese |Movies in Portuguese |Movies in
          Chattisgarhi| Movies in Khasi|Movies in Malayalam |Movies in Bhojpuri
          |Movies in French |Movies in Punjabi | Movies in Tamil |Movies in Urdu
          |Movies in Oriya |Movies in Telugu |Movies in Marathi |Movies in
          Kannada | Movies in Konkani | Movies in Rajasthani | Movies in
          Gujarati | Movies in Bengali{" "}
        </p>
        <h6 className="mt-3 mb-3">
          Plays By Genre in National Capital Region (NCR)
        </h6>
        <p>
          Broadway Plays |Sci-Fi Plays |Period Plays |Tragedy Plays |Action
          Plays |Adaptation Plays |Mystery Plays | Fantasy Plays |Historical
          Plays |Online Streaming Plays Plays |Classic Plays | Adult Plays |
          Comedy Plays | Contemporary Plays | Tribute Plays | Political Plays |
          Thriller Plays |Suspense Plays | Romantic Plays |Biography Plays |
          Horror Plays | War Plays |Adventure Plays |Musical Plays |
          Mythological Plays |Noir Plays | Regional Plays |Drama Plays
          |Psychological Plays |{" "}
        </p>
        <h6 className="mt-3 mb-3">Movie Reviews</h6>
        <p>
          Trending Articles |Latest News on Movies, Events, Plays and Sports
          |Rajeev Masand Movie Reviews Anupama Chopra Movie Reviews|Film Reviews
          |Guest Blogging|{" "}
        </p>
        <h6 className="mt-3 mb-3">Movie Updates and Celebrities</h6>
        <p>Upcoming Movies | Now Showing |Celebrities </p>
        <h6 className="mt-3 mb-3">
          Sports Events in National Capital Region (NCR)
        </h6>
        <p>
          E Sports |Rugby |Archery |Athletics |Badminton |Baseball|Boat Race
          |Bowling |Boxing |Card Games |Chess |Cricket |Cycling |Derby Horse
          Race |Golf |Football|Ice Skating Hockey |Judo |Kabaddi |Kickboxing |
          Mixed Martial Arts |Motorsports |Muay Thai |Online Sports |Polo
          |Running |Sailing |Shooting |Snooker |Swimming |Table Tennis |Tennis
          |Triathlon |Volleyball | Weight Lifting |Walking | Wrestling |{" "}
        </p>
        <h6 className="mt-3 mb-3"> Events in National Capital Region (NCR)</h6>
        <p>
          Comedy Shows |Workshops |Kids |Spirituality |Online Streaming Events
          |Conferences |Exhibitions |Music Shows |Award shows |Meetups
          |Screening |Talks |Vaccination |{" "}
        </p>
        <h6 className="mt-3 mb-3">EVENTS IN TOP CITIES</h6>
        <p>
          Events in National Capital Region (NCR) |Events in Mumbai |Events in
          Chennai |Events in Bengaluru |Events in Hyderabad |Events in Pune
          |Events in Ahmedabad |Events in Kolkata |Events in Kochi{" "}
        </p>
        <h6 className="mt-3 mb-3">PLAY IN TOP CITIES</h6>
        <p>
          Plays in National Capital Region (NCR) |Plays in Mumbai |Plays in
          Chennai |Plays in Bengaluru |Plays in Hyderabad |Plays in Pune |Plays
          in Ahmedabad |Plays in Kolkata |Plays in Kochi{" "}
        </p>
        <h6 className="mt-3 mb-3">MOVIES IN TOP CITIES</h6>
        <p>
          Movies in Mumbai |Movies in National Capital Region (NCR) |Movies in
          Chennai |Movies in Bengaluru |Movies in Hyderabad|Movies in Hyderabad
          |Movies in Ahmedabad |Movies in Kolkata |Movies in Kochi |{" "}
        </p>
        <h6 className="mt-3 mb-3">COUNTRIES</h6>
        <p>Indonesia |Singapore |UAE |Sri Lanka |West Indies | </p>
        <h6 className="mt-3 mb-3">HELP</h6>
        <p>
          Contact Us |Current Openings |Press Release | Press Release |Terms &
          Conditions |Privacy Policy |FAQs |Sitemap{" "}
        </p>
        <h6 className="mt-3 mb-3">BOOKMYSHOW EXCLUSIVE</h6>
        <p>
          Watch Guide |Superstar |BookASmile |BookASmile |BookASmile |List My
          Show |Offers | Stream{" "}
        </p>
      </div>

      {/* Details */}
      {/* book my show logo and social media connect */}

      <div className="bg-black flex  ">
        <img
          src="https://in.bmscdn.com/webin/common/icons/logo.svg"
          alt=""
          className="m-auto mt-4 "
        />
      </div>
      <div className=" flex bg-white justify-center  mt-4 mb-4">
        <div className="flex mt-4 mb-4">
          <AiFillFacebook className="ml-2 text-4xl" />
          <BsInstagram className="ml-2 text-4xl" />
          <BsTwitter className="ml-2 text-4xl" />
          <AiFillYoutube className="ml-2 text-4xl" />
          <BsPinterest className="ml-2 text-4xl" />
          <BsLinkedin className="ml-2 text-4xl" />
        </div>
      </div>
      <div>
        <p className="text-center text-white">
          Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved
        </p>
        <p className="text-center text-white">
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </p>
      </div>
      {/* book my show logo and social media connect */}
    </div>
  );
};

export default Footer;
