/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Body } from "./comp/Body"
import { Header } from "./comp/Header";
import { Footer } from './comp/Footer';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import  About  from "./comp/About";
import { Error } from './comp/Error';


const AppLayout = () =>{
  return(
    <>
    <Header />
    <Body />
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
    errorElement: <Error/>
  },
  {
    path:"/about",
    element:<About />,
  }
])

export default App;
