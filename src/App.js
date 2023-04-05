/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Body } from "./comp/Body"
import { Header } from "./comp/Header";
import { Footer } from './comp/Footer';



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
        
         <AppLayout />
  
  );
}

export default App;
