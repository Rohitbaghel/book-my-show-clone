import { RecomendedMoviesHome } from "./RecomendedMoviesHome"
import { BestofEntertainmentHome } from "./BestofEntertainmentHome";
import { PremierHome } from "./PremierHome";
import { Slideshow } from "./slideShow"
import { EventsNear } from "./nearEventsHome";
import { OnlineEvents } from "./onlineEventsHome";
import { OutdoorEvents } from "./outdoorEventsHome"
import { Laughter } from "./laughterHome";
import { Popular } from "./popularEventsHome";
import { TopGames } from "./topGames";
import {FunActivities} from "./funActivitiesHome";

import "./Home.css";
import Navbar from "./navbar.components";
import Footer from "./Footer";

export const Home = () => {
    return (
        <>
     <Navbar/>
    <Slideshow/>
    <div className="outer">
        <p className="heading1">Recommended Movies</p>
        <RecomendedMoviesHome/>
    </div>
    <img className="homeImage" src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"/>
    <div className="outer">
    <p className="heading1">The Best of Entertainment</p>
            <BestofEntertainmentHome/>
    </div>
    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"/>
    <div id="fullLength">
    <div className="outer">
    <p style={{marginBottom : "0"}} className="heading1">Premieres</p>
    <p>Brand new releases every Friday</p>
            <PremierHome/>
    </div>
    </div>
    <div className="outer">
    <p className="heading1">Events Happening Near You</p>
            <EventsNear/>
    </div>
    <div className="outer">
    <p className="heading1">Online Streaming Events</p>
            <OnlineEvents/>
    </div>
    <div className="outer">
    <p className="heading1">Outdoor Events</p>
            <OutdoorEvents/>
    </div>
    <div className="outer">
    <p className="heading1">Laughter Therapy</p>
            <Laughter/>
    </div>
    <div className="outer">
    <p className="heading1">Popular Events</p>
            <Popular/>
    </div>
    <div className="outer">
    <p className="heading1">Top Games & Sport Events</p>
            <TopGames/>
    </div>
    <div className="outer">
    <p className="heading1">Explore Fun Activities</p>
            <FunActivities/>
    </div>
    <div className="footer">
        <Footer />
        </div>
    </>
    )
}