import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

export const RecomendedMoviesHome = () => {
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
    <div ref={refDiv} id="container1">
      {flag1 && <AiFillRightCircle id="rightArrow" onClick={scrollToLast} />}
      {flag2 && <AiFillLeftCircle id="leftArrow" onClick={scrollToFirst} />}
      <div className="gridDiv">
        <div>
          <img src="pushpa.jpg" alt="pushpa" />
          <p className="movieTitle">Pushpa: The Rise</p>
          <p>Action/Thriller</p>
        </div>
        <div>
          <img src="moonfall.jpg" alt="moonfall" />
          <p className="movieTitle">Moon Fall</p>
          <p>Crime/Drama/Thriller</p>
        </div>
        <div>
          <img src="83.jpg" alt="83" />
          <p className="movieTitle">83</p>
          <p>Drama/Sports</p>
        </div>
        <div>
          <img src="spiderMan.jpg" alt="spiderMan" />
          <p className="movieTitle">Spider-Man: No Way Home</p>
          <p>Action/Adventure/Sci-Fi</p>
        </div>
        <div>
          <img src="kingsman.jpg" alt="kingsman" />
          <p className="movieTitle">The King`s Man</p>
          <p>Action/Adventure/Comedy</p>
        </div>
        <div>
          <img src="khiladi.jpg" alt="khiladi" />
          <p className="movieTitle">Khiladi</p>
          <p>Drama/Romantic</p>
        </div>
        <div>
          <img src="Death On the Nile.jpg" alt="deathOnTheNile" />
          <p className="movieTitle"> Death On the Nile</p>
          <p>Comedy/Fantasy</p>
        </div>
        {/* <div>
          <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAxMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318116-defuhscsyr-portrait.jpg" />
          <p className="movieTitle">Pandu</p>
          <p>Comedy</p>
        </div> */}
        <div>
          <img src="badhaaido.jpg" />
          <p className="movieTitle">Badhaai Do</p>
          <p>Comedy/Drama/Romantic</p>
        </div>
        {/* <div>
          <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308384-bwldkbbrbl-portrait.jpg" />
          <p className="movieTitle">Jhimma</p>
          <p>Comedy/Drama/Family</p>
        </div> */}
      </div>
    </div>
  );
};
