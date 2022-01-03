
import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {ACTION,ORIGINALS,DOCUMENTARIES} from './urls'


function App() {
  return (
    <div className="App">
  <NavBar/>
 <Banner/>
 <RowPost url={ORIGINALS} title="Netflix Originals"/>
 <RowPost url={ACTION} title="Action" isSmall/>
 <RowPost url={DOCUMENTARIES} title="DOCUMENTARIES" isSmall/>
 </div>
  );
}

export default App;
