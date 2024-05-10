import React from "react";
import "./App.css"
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import OurProcess from "./Components/OurProcess/OurProcess";
import Page0 from "./Components/Pages/Page0"
import Page1 from "./Components/Pages/Page1"
import Page2 from "./Components/Pages/Page2"
import Page3 from "./Components/Pages/Page3"
import OurClients from "./Components/OurClients/OurClients" 
import Footer from "./Components/Footer/Footer"

const App = () => {
  return(
    <div>
      <Navbar />
      <Main />
      <Page0 />
      <OurProcess />
      <Page1 />
      <Page2 />
      <Page3 />
      <OurClients />
      <Navbar />
      <Footer />
    </div>

  )

}

export default App;