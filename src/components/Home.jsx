import { RecomendedMoviesHome } from "./RecomendedMoviesHome"
import "./Home.css";

export const Home = () => {
    return (
    <div id="outer1">
    <p id="heading1">Recommended Movies</p>
        <div id="container">
            <RecomendedMoviesHome/>
        </div>
    </div>
    )
}