/* eslint-disable react/jsx-no-undef */
import './App.css';
import { Body } from "./comp/body"
import { Header } from "./comp/Header";

const Footer = () =>{
  return(
    <h5>Footer</h5>
  )
}

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
