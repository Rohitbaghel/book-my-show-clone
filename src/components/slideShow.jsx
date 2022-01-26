import "./slideShow.css";
import { useRef } from "react"

export const Slideshow = () => {
    const ref1 =  useRef();
    const ref2 =  useRef();
    let counter = 1;
    setInterval(function(){
        if(counter === 1 && ref1.current)
        {
            ref1.current.checked = true;
        }
        if(counter === 2 && ref2.current)
        {
            ref2.current.checked = true;
        }
        counter++;
        if(counter > 2)
        {
            counter = 1;
        }
    }, 4000);

    return (
        <div id="sliderContainer">
            <div className="slider">
                <div className="slides">
                    <input ref={ref1} type="radio" name="radio-btn" id="radio1"/>
                    <input ref={ref2} type="radio" name="radio-btn" id="radio2"/>
                    <div className="slide first">
                        <img src="https://in.bmscdn.com/promotions/cms/creatives/1640756827751_1633590513692_moviemunchies_webshowcase_1240x300_7oct.jpg"/>
                    </div>
                    <div className="slide">
                        <img src="https://in.bmscdn.com/promotions/cms/creatives/1642743049533_web_dubbed.jpg"/>
                    </div>
                    <div className="navigation-auto">
                        <div className="auto-btn1"></div>
                        <div className="auto-btn2"></div>
                    </div>
                </div>
                <div className="navigation-manual">
                    <label for="radio1" className="manual-btn"></label>
                    <label for="radio2" className="manual-btn"></label>
                </div>
            </div>
        </div>
    )
}