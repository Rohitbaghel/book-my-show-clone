import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

export const PremierHome = () => {
    const refDiv = useRef();
    const [flag1, setFlag1] = useState(true);
    const [flag2, setFlag2] = useState(false);
    const scrollToFirst = () => {
        refDiv.current.scrollLeft -= 1800;
        setFlag1(true);
        setFlag2(false);
    }
    const scrollToLast = () => {
        refDiv.current.scrollLeft += 1800;
        setFlag1(false);
        setFlag2(true);
    }
    return (
        <div ref={refDiv} id="container3">
        {flag1 && <AiFillRightCircle id="rightArrow2" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow2" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122526-nvybkaqagm-portrait.jpg"/>
            <p className="movieTitle">Dune</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00122532-sxwjevmtfs-portrait.jpg"/>
            <p className="movieTitle">Venom: Let There Be Carnage</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313786-runledmrgv-portrait.jpg"/>
            <p className="movieTitle">The Trip to Spain</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313784-phblvkpmlm-portrait.jpg"/>
            <p className="movieTitle">The Trip</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313789-pacymvexrj-portrait.jpg"/>
            <p className="movieTitle">The Trip to Italy</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00321411-ljhtyyulzd-portrait.jpg"/>
            <p className="movieTitle">The Photograph</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00316067-bmsktchttk-portrait.jpg"/>
            <p className="movieTitle">The Investigation</p>
            <p>Danish</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00318498-yqznmzrbps-portrait.jpg"/>
            <p className="movieTitle">Shane</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00316029-sbvllbmywy-portrait.jpg"/>
            <p className="movieTitle">Resident Evil: Welcome To Raccoon City</p>
            <p>English</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00313805-bvrrpvdmvb-portrait.jpg"/>
            <p className="movieTitle">The Trip to Greece</p>
            <p>English</p>
        </div>
        </div>
        </div>
    )
}