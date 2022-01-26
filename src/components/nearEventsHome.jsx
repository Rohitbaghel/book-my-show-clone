import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";


export const EventsNear = () => {
    const refDiv = useRef();
    const [flag1, setFlag1] = useState(true);
    const [flag2, setFlag2] = useState(false);
    const scrollToFirst = () => {
        refDiv.current.scrollLeft -= 1800;
        setFlag1(true);
        setFlag2(false);
    }
    const scrollToLast = () => {
        refDiv.current.scrollLeft += 1800;;
        setFlag1(false);
        setFlag2(true);
    }
    return (
        <div ref={refDiv} id="container4">
        {flag1 && <AiFillRightCircle id="rightArrow3" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow3" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00316295-agldekeqsx-portrait.jpg"/>
            <p className="movieTitle">Oriole Entertainment Live</p>
            <p>Watch on Zoom</p>
            <p>0 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318022-wtmdepbkqh-portrait.jpg"/>
            <p className="movieTitle">Shashi Dhiman Live</p>
            <p>Watch on Zoom</p>
            <p>0 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxMSBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318260-hugfekychu-portrait.jpg"/>
            <p className="movieTitle">GLITTERZ - KK Live In Concert</p>
            <p>Dublin Square, Phoenix Market city: Kurla</p>
            <p>1.6 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321649-fmfznudxkz-portrait.jpg"/>
            <p className="movieTitle">Comedy Unfiltered Open Mic ft. Ashank Patkar</p>
            <p>The Huddle: Mumbai</p>
            <p>3.7 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00308527-qlmuxrfpms-portrait.jpg"/>
            <p className="movieTitle">Comedy Roulette</p>
            <p>Doolally Taproom, Khar: Mumbai</p>
            <p>4 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319802-xvjmeqfbnc-portrait.jpg"/>
            <p className="movieTitle">Apna Sapna Funny Funny</p>
            <p>The Habitat: Mumbai</p>
            <p>4 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxMiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321600-hwsjtstmbf-portrait.jpg"/>
            <p className="movieTitle">Humour Qaid</p>
            <p>The Habitat: Mumbai</p>
            <p>4 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321123-bdewkhfrbk-portrait.jpg"/>
            <p className="movieTitle">Spoilers of Your Future by Shreyas Manohar</p>
            <p>The Habitat: Mumbai</p>
            <p>4 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321656-aqnwzuqvnc-portrait.jpg"/>
            <p className="movieTitle">Republic day at Sante Khar</p>
            <p>Sante Spa Cuisine: Mumbai</p>
            <p>4 kms away</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321615-fwqaahgxpv-portrait.jpg"/>
            <p className="movieTitle">comedy house : andheri</p>
            <p>One Nest Studios, Andheri East: Mumbai</p>
            <p>4.1 kms away</p>
        </div>
        </div>
        </div>
    )
}