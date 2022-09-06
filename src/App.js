import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Menue from "./menue";
import HookPractice from "./HookPractice";



function App() {
  return (
    <div className="App">
        <h1>Navbar</h1>
     
     <BrowserRouter>
         <Menue />
     <Routes>
     
            {/* <Route path="/hook" element={<hookPractice/>}></Route> */}
            <Route path="/page1" element={<Page1/>}></Route>
            <Route path="/page2" element={<Page2/>}></Route>
            <Route path="/hook" element={<HookPractice />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;