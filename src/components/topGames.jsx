import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";


export const TopGames = () => {
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
        <div ref={refDiv} id="container9">
        {flag1 && <AiFillRightCircle id="rightArrow8" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow8" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00313270-tedhsgbtng-portrait.jpg"/>
            <p className="movieTitle">BGMI Tournament</p>
            <p>Online</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00134925-jcspmlprhh-portrait.jpg"/>
            <p className="movieTitle">Free Fire Solo and Squad</p>
            <p>Online</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311494-tvbvepfevv-portrait.jpg"/>
            <p className="movieTitle">Lost Treasures of Sundarbans</p>
            <p>Online</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAxNCBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321083-nqevlvyknl-portrait.jpg"/>
            <p className="movieTitle">Valentines Day</p>
            <p>Jetty No 5: Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311497-vfreahaxmj-portrait.jpg"/>
            <p className="movieTitle">Flight 9032</p>
            <p>Online</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-ruvyfrcmdx-portrait.jpg"/>
            <p className="movieTitle">Call of Duty</p>
            <p>Online</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzIEFwcg%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318206-xpdthftvfa-portrait.jpg"/>
            <p className="movieTitle">Mumbai Half Marathon</p>
            <p>Bandra Fort Garden</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00320561-jhswletrdm-portrait.jpg"/>
            <p className="movieTitle">Mumbai Skyline Sailing</p>
            <p>Jetty No 5</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNCBPY3Q%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312600-qdebxxwlpz-portrait.jpg"/>
            <p className="movieTitle">Quarter-Final, Marseille</p>
            <p>Stade Velodrome</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA4IFNlcA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312594-fgxlkplvmr-portrait.jpg"/>
            <p className="movieTitle">Pool A* New Zealand v France</p>
            <p>Stade de France: Saint-Denis</p>
        </div>
        </div>
        </div>
    )
}