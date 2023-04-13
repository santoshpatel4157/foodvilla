/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Body } from "./comp/Body"
import { Header } from "./comp/Header";
import { Footer } from './comp/Footer';
import { createBrowserRouter , RouterProvider ,Outlet} from 'react-router-dom';
import  About  from "./comp/About";
import { Error } from './comp/Error';
import { Contact } from './comp/Contact';
import { RestaurantManu } from './comp/RestaurantManu';



const AppLayout = () =>{
  return(
    <>
    <Header />
    {/* <Body /> */}
    <Outlet />
    <Footer />
    </>
  )
}

function App() {
  return (
        
        //  <AppLayout />
        <RouterProvider router={appRouter} />
         
  
  );
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement: <Error/>,
    children:[
      {
        path:"/about",
        element:<About />,
      },
      {
        path:"/contact",
        element:<Contact />,
      },
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/restaurant/:id",
        element:<RestaurantManu />
      }
    ]
  },
  
])

export default App;
