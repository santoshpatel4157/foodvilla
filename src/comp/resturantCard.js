import { IMG_CDN_URL } from "../contants"

const RestaurntCard = ({cloudinaryImageId,name,cuisines,area,address,lastMileTravelString}) => {
  
    return(
      <div className="card">
      <img alt='logo' src={ IMG_CDN_URL + cloudinaryImageId
         }
         />
        <h2>{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
        <h5>{area}</h5>
        <h6>{address}</h6>
  </div>
    );
  };

  export default RestaurntCard;