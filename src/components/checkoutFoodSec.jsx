import { CheckoutFood } from "./checkoutFood"
import "./checkoutFoodSec.css";

export const FoodSec = () => {
    return (
        <div>
            <p className="centreText">Grab a <span>bite!</span></p>
            <p className="centreText">Prebook Your Meal and Save More!</p>
            <div id="filterDiv">
                <button>ALL</button>
                <button>COMBOS</button>
                <button>BEVERAGES</button>
                <button>POPCORN</button>
            </div>
            <div id="foodDiv">
                <CheckoutFood/>
            </div>
        </div>
    )
}