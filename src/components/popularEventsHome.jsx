import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";


export const Popular = () => {
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
        <div ref={refDiv} id="container8">
        {flag1 && <AiFillRightCircle id="rightArrow7" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow7" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321311-cxadpbfabd-portrait.jpg"/>
            <p className="movieTitle">Doodle All the Way</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319204-wgsdncfwfg-portrait.jpg"/>
            <p className="movieTitle">Story Spree</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyOCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-50/et00320692-ppwxvyxzfe-portrait.jpg"/>
            <p className="movieTitle">Pancham Classic</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyNiBGZWI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-50/et00319806-yuqjhdwusp-portrait.jpg"/>
            <p className="movieTitle">AAGHAZ By Hariharan</p>
            <p>Watch on Zoom</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBNYXIgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321384-guxamjlgfe-portrait.jpg"/>
            <p className="movieTitle">The Biggest Holi Festival at Hammerzz Open Air</p>
            <p>Hammerzz Open Air: Goa</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321380-lanjnbvvxd-portrait.jpg"/>
            <p className="movieTitle">Resin Art</p>
            <p>HobbyStation Studio</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNyBNYXI%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-50/et00319805-nlvhkdlfqs-portrait.jpg"/>
            <p className="movieTitle">An Evening with Pandit Nayan</p>
            <p>Vile Parle</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321382-dmzggqrnwm-portrait.jpg"/>
            <p className="movieTitle">Miniature Clay Modelling</p>
            <p>HobbyStation</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@le-social-distancing-202011110401.png,ox-15,oy-15,ow-50/et00320551-zgkxexhbfd-portrait.jpg"/>
            <p className="movieTitle">Karte Tumha Mujra</p>
            <p>Adya Krantiveer</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-V2VkLCAyNiBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321451-mfcfyrpgaq-portrait.jpg"/>
            <p className="movieTitle">Sonali Thakker Live</p>
            <p>Dorangos Hall</p>
        </div>
        </div>
        </div>
    )
}