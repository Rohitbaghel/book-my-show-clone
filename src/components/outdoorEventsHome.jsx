import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";


export const OutdoorEvents = () => {
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
        <div ref={refDiv} id="container6">
        {flag1 && <AiFillRightCircle id="rightArrow5" onClick={scrollToLast}/>}
        {flag2 && <AiFillLeftCircle id="leftArrow5" onClick={scrollToFirst}/>}
        <div className="gridDiv" >
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00315217-shyeewcrpm-portrait.jpg"/>
            <p className="movieTitle">Hamleys Play</p>
            <p>Hamleys Play, Jio World Drive, BKC</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00022344-zvqsmqhllx-portrait.jpg"/>
            <p className="movieTitle">Mumbai Film City Tour with Bollywood Park</p>
            <p>Dadasaheb Phalkey Chitranagri: Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00320688-dmzscrjbnx-portrait.jpg"/>
            <p className="movieTitle">Vande Mataram Virtual Marathon</p>
            <p>Your Place and Your Time: India</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00127447-xvbmzdzypl-portrait.jpg"/>
            <p className="movieTitle">Bounce</p>
            <p>Bounce India: Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAzMCBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00319242-rubkdvhudf-portrait.jpg"/>
            <p className="movieTitle">Navi Mumbai Half Marathon</p>
            <p>Nerul Gymkhana: Navi Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00318079-yysmmhyrlk-portrait.jpg"/>
            <p className="movieTitle">BEST-Operation of Heritage Tour</p>
            <p>Dr. S.P.M.Chowk (Museum): Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00305112-gzuhpeyauw-portrait.jpg"/>
            <p className="movieTitle">UrbsPrima - Inside the BMC Headquarters</p>
            <p>Municipal Corporation of Greater Mumbai: Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321642-wfczqpxbsr-portrait.jpg"/>
            <p className="movieTitle">Imagicaa Republic Day Offer</p>
            <p>Imagicaa: Mumbai</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317438-utugefpqay-portrait.jpg"/>
            <p className="movieTitle">Kalsubai Night Trekking</p>
            <p>Meeting Point - Sanjay Gandhi National Park</p>
        </div>
        <div>
            <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317831-svsqxkqlhe-portrait.jpg"/>
            <p className="movieTitle">Gateway Sailing Club - Day Sailing</p>
            <p>Gateway Sailing Club: Mumbai</p>
        </div>
        </div>
        </div>
    )
}