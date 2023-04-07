
import { useEffect, useState } from "react"
//import { restaurntList } from "./data"
import RestaurntCard from "./resturantCard"
import { Shimmer } from "./Shimmer";


function filterData(searchTxt,restaurants){
  
return  restaurants.filter((restaurnt)=>restaurnt?.data?.name?.toLowerCase()?.includes(searchTxt?.toLowerCase()));
}


export const Body =() =>{

  const [searchTxt ,setSearchTxt] = useState("");
  const [filterRestaurants ,setfilterRestaurants] = useState([]);
  const [allRestaurants , setAllRestaurants] = useState([])





  useEffect(()=>{
      getRestauants();
  },[])
  console.log("render")


  async function getRestauants(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setfilterRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

    if (!allRestaurants ) return null;

    // if(filterRestaurants?.length ===0) return <h1>No Match Your Filter</h1>
    return (allRestaurants.length  === 0) ? ( <Shimmer /> ) : (
      <>
      <div className="search-container"> 
      <input type="text" className="search-input" placeholder="search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value ) }/>
      <button className="search-btn" onClick={()=>{
        const data = filterData(searchTxt,allRestaurants);
        setfilterRestaurants(data);
      }}>search</button>
      
      </div>

      <div className='restaurant-list'>
  
        {
           filterRestaurants.map((restaurnt  =>{
            return <RestaurntCard {...restaurnt.data} key={restaurnt.data.id} />
            
          }))
        }
        
  
      </div>
      </>

      
    )
  };