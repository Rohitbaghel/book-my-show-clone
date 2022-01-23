import { useEffect, useState } from "react"
import "./checkoutFood.css";

export const CheckoutFood = () => {
    const [food, setFood] = useState([]);
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        getFoodList();
    }, []);

    const getFoodList = async() => {
        try {
            let res = await fetch("http://localhost:3600/foods");
            let data = await res.json();
            setFood(data);
            setFlag(false);
        } catch(e) {
            setFlag(e.message);
        }
    }

    const addFoodToBill = (price) => {
        alert(price);
    }

    return (
        flag ? (<p style={{textAlign: "center", color: "red"}}>{flag}</p>) : (<div className="foodGrid">
            {food.map((el) => {
                return  <div key={el._id}>
                <img src={el.food_image}/>
                <p>{el.food_name.length > 30 ? "Tub Combo" : el.food_name}</p>
                <p>{el.food_price}</p>
                <button onClick={() => addFoodToBill(el.food_price)}>Add</button>
                </div>} )}
        </div>)
    )
}