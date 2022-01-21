import { RecomendedMoviesHome } from "./RecomendedMoviesHome"
import { BestofEntertainmentHome } from "./BestofEntertainmentHome";
import { PremierHome } from "./PremierHome";
import { Slideshow } from "./slideShow"
import "./Home.css";

export const Home = () => {
    return (
    <>
    <Slideshow/>
    <div id="outer">
    <p id="heading1">Recommended Movies</p>
        <div id="container">
            <RecomendedMoviesHome/>
        </div>
    </div>
    <img className="homeImage" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"/>
    <div id="outer">
    <p id="heading1">The Best of Entertainment</p>
        <div id="container">
            <BestofEntertainmentHome/>
        </div>
    </div>
    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"/>
    <div id="fullLength">
    <div id="outer">
    <p style={{marginBottom : "0"}} id="heading1">Premieres</p>
    <p>Brand new releases every Friday</p>
        <div id="container">
            <PremierHome/>
        </div>
    </div>
    </div>
    </>
    )
}