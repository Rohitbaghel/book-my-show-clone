import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";

export const BestofEntertainmentHome = () => {
    const refDivLast = useRef();
    const refDivFirst = useRef();
    const [flag1, setFlag1] = useState(true);
    const [flag2, setFlag2] = useState(false);
    const scrollToFirst = () => {
        refDivFirst.current.scrollIntoView();
        setFlag1(true);
        setFlag2(false);
    }
    const scrollToLast = () => {
        refDivLast.current.scrollIntoView();
        setFlag1(false);
        setFlag2(true);
    }
    return (
        <>
        {flag1 && <AiFillRightCircle id="rightArrow1" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow1" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div ref={refDivFirst}>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICA0MzRrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00129538-dejcsesrba-portrait.jpg"/>
            <p className="movieTitle">Pushpa: The Rise</p>
            <p>Action/Thriller</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODMlICAyayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00321184-gydcmxgppr-portrait.jpg"/>
            <p className="movieTitle">Nay Varan Bhat Loncha Kon Nay Koncha</p>
            <p>Crime/Drama/Thriller</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODklICAxMjBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00062705-zfvpwbzbjm-portrait.jpg"/>
            <p className="movieTitle">83</p>
            <p>Drama/Sports</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICA0MjBrIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70/et00310790-axrtnqummf-portrait.jpg"/>
            <p className="movieTitle">Spider-Man: No Way Home</p>
            <p>Action/Adventure/Sci-Fi</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzQlICAxayB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00107364-sgtyjcebux-portrait.jpg"/>
            <p className="movieTitle">The King`s Man</p>
            <p>Action/Adventure/Comedy</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-Mzg0IGxpa2Vz,ots-29,otc-FFFFFF,oy-612,ox-70/et00320360-rnxgmvxaaa-portrait.jpg"/>
            <p className="movieTitle">Coffee</p>
            <p>Drama/Romantic</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODIlICAzOGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00316733-bhgbvzmcup-portrait.jpg"/>
            <p className="movieTitle">Bangarraju</p>
            <p>Comedy/Fantasy</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-ODclICAxMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00318116-defuhscsyr-portrait.jpg"/>
            <p className="movieTitle">Pandu</p>
            <p>Comedy</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-NzglICAyMGsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00145956-pfxrtruxwq-portrait.jpg"/>
            <p className="movieTitle">Chandigarh Kare Aashiqui</p>
            <p>Comedy/Drama/Romantic</p>
        </div>
        <div ref={refDivLast}>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@heart_202006300400.png,ox-24,oy-617,ow-29:ote-OTElICAxM2sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00308384-bwldkbbrbl-portrait.jpg"/>
            <p className="movieTitle">Jhimma</p>
            <p>Comedy/Drama/Family</p>
        </div>
    </div>
        </>
    )
}