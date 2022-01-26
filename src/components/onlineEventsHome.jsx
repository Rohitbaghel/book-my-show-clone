import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";


export const OnlineEvents = () => {
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
        <div ref={refDiv} id="container5">
        {flag1 && <AiFillRightCircle id="rightArrow4" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow4" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319204-wgsdncfwfg-portrait.jpg"/>
            <p className="movieTitle">Story Spree</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321232-ndyhqvvddh-portrait.jpg"/>
            <p className="movieTitle">Ravi Gupta Live</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313611-raeqanvnrg-portrait.jpg"/>
            <p className="movieTitle">FrontRow Open Mics</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321307-guphvphlty-portrait.jpg"/>
            <p className="movieTitle">Harsh Gujral Live on Screens near you</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145818-hbakuphvea-portrait.jpg"/>
            <p className="movieTitle">Gaurav Kapoor Live- Online Sitdown Comedy</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321199-mxcrlxtefh-portrait.jpg"/>
            <p className="movieTitle">Vipul Goyal Live</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319586-adgjgvzznn-portrait.jpg"/>
            <p className="movieTitle">Free Introduction to Standup Comedy</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321206-pykqfswzae-portrait.jpg"/>
            <p className="movieTitle">Chaar Log Hasengey</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145684-zjaylnhmhb-portrait.jpg"/>
            <p className="movieTitle">Working On The Vaccine - by Kautuk Srivastava</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00320973-dwgyxavnue-portrait.jpg"/>
            <p className="movieTitle">Fusion Art</p>
            <p>Watch on Zoom</p>
        </div>
        </div>
        </div>
    )
}