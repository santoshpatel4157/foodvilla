export const Shimmer = () =>{
    return <div className="restaurant-list">

        {Array(15).fill("").map(()=><div className="shimmer-card"></div>)}
    </div>
}


