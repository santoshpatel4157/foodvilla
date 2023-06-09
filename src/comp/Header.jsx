import { useState } from "react";
import { Link } from "react-router-dom";
//import { Title } from "./Title"
// const loggedInUser= () => {
//   return true;
// }
 const Title = () => (
  <a href="/">
  <img 
  className="logo"
  alt="logo" 
  src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" 
  />
  </a>
);

 export const Header = () => {

  const [isLoggedIn , setIsLoggedIn] =useState(false);
    return(
      
      <div className="header">
          <Title />   
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>

            <li><Link to="/about"><li>About</li></Link></li>
            
            {/* <a href="/about"><li>About</li></a> */}
            <li><Link to="/contact">Contact</Link></li>
            <li>Cart</li>
          </ul>
        </div>
        {
          (isLoggedIn ? <button onClick={()=>{setIsLoggedIn(false)}}>Logout</button> : <button onClick={()=>{setIsLoggedIn(true)}}>Login</button>)
        }

       
       
      </div>
      
    )
  
  }

   