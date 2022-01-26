import { useRef, useState } from "react";
import "./ScrollingGrid.css";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";


export const FunActivities = () => {
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
    <div ref={refDiv} id="container10">
    {flag1 && <AiFillRightCircle id="rightArrow9" onClick={scrollToLast}/>}
    {flag2 && <AiFillLeftCircle id="leftArrow9" onClick={scrollToFirst}/>}
    <div className="gridDiv" >
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321556-ynznfyenpq-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00321642-wfczqpxbsr-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCA1IEZlYiBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00317431-aguepztkkw-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00089073-jahqmdsgvm-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00317831-svsqxkqlhe-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNCBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00302247-azybczktus-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyOSBKYW4%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00305772-vcdjgexuve-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAyMiBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00302244-rdnuqmpjpg-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00115085-aegwbdtlyk-portrait.jpg"/>
    </div>
    <div>
        <img src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMyBKYW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00306755-cgpxumydrx-portrait.jpg"/>
    </div>
    </div>
    </div>
    )
}