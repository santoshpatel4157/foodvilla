
import { useState } from "react"
import { restaurntList } from "./data"
import RestaurntCard from "./resturantCard"

function filterData(searchTxt,restaurants){
  
return  restaurants.filter((restaurnt)=>restaurnt.data.name.includes(searchTxt));
}


export const Body =() =>{

  const [searchTxt ,setSearchTxt] = useState("");
  const [restaurants ,steRestaurants] = useState(restaurntList);

    return(
      <>
      <div className="search-container"> 
      <input type="text" className="search-input" placeholder="search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value ) }/>
      <button className="search-btn" onClick={()=>{
        const data = filterData(searchTxt,restaurants);
        steRestaurants(data);
      }}>search</button>
      
      </div>

      <div className='restaurant-list'>
  
        {
           restaurants.map((restaurnt  =>{
            return <RestaurntCard {...restaurnt.data} key={restaurnt.data.id} />
          }))
        }
  
      </div>
      </>

      
    )
  }