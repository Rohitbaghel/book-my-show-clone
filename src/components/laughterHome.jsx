import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import Navbar from "./navbar.components";
import Footer from "./Footer";

export const Laughter = () => {
  const refDiv = useRef();
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(false);
  const scrollToFirst = () => {
    refDiv.current.scrollLeft -= 1800;
    setFlag1(true);
    setFlag2(false);
  };
  const scrollToLast = () => {
    refDiv.current.scrollLeft += 1800;
    setFlag1(false);
    setFlag2(true);
  };
  return (
        <div ref={refDiv} id="container7">
        {flag1 && <AiFillRightCircle id="rightArrow6" onClick={scrollToLast} />}
        {flag2 && <AiFillLeftCircle id="leftArrow6" onClick={scrollToFirst} />}
        <div className="gridDiv">
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321289-ytemntvppg-portrait.jpg" />
            <p className="movieTitle">Gaurav Gupta Live</p>
            <p>Watch on Zoom</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00308527-qlmuxrfpms-portrait.jpg" />
            <p className="movieTitle">Comedy Roulette</p>
            <p>Doolally Taproom, Khar: Mumbai</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318898-kevnltgylf-portrait.jpg" />
            <p className="movieTitle">Comedy House</p>
            <p>OneNest: Mumbai</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00320411-fbehmxxfca-portrait.jpg" />
            <p className="movieTitle">Rajat Chauhan Live</p>
            <p>R city Mall: Ghatkopar</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321436-vgpnrslfta-portrait.jpg" />
            <p className="movieTitle">Will You Marry Me</p>
            <p>Tarang Studio: Mumbai</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321561-yajwyflxgd-portrait.jpg" />
            <p className="movieTitle">Comedy Wheel</p>
            <p>Dorangos Cafe</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321451-mfcfyrpgaq-portrait.jpg" />
            <p className="movieTitle">Sonali Thakker Live</p>
            <p>Dorangos Hall</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321508-wctkferllz-portrait.jpg" />
            <p className="movieTitle">Mohd Suhel</p>
            <p>Watch on Zoom</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00139231-sjsnvvegfj-portrait.jpg" />
            <p className="movieTitle">Death</p>
            <p>Watch on Zoom</p>
          </div>
          <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321233-qakjvarser-portrait.jpg" />
            <p className="movieTitle">Mohit Morani Live</p>
            <p>Watch on Zoom</p>
          </div>
        </div>
        </div>
  );
};
