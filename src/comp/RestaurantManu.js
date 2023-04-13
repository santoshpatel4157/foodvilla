import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contants";


export const RestaurantManu = () =>{
    const params = useParams();  
 
    const {id} =params;

    useEffect(()=>{
        getRetaurantInfo();
    },[])

    const [restaurant,setRestaurant]= useState({})
    async function getRetaurantInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=69465&submitAction=ENTER")
        const json = await data.json();
        console.log(json)
        setRestaurant(json.data)
    }

    return (
        <div>
            <h1>restaurant id : {id}</h1>
            <h2>{restaurant?.data?.cards[2]?.data?.data?.cards?.name}</h2>
            <img alt="ii" src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        </div>
    )
}