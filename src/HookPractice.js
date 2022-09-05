import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Menue from "./menue";
import useApi from "./useApi";


function HookPractice() {
    const { loading, data } = useApi('https://api.sampleapis.com/wines/reds')
console.log("Hook Practice=",data)
  if(loading) return <h1>Loading</h1>

  return (
    <div>
    <h1>Welcome to Hook Practice</h1>
    
    <h1>Fetching data through custome api</h1>
    {JSON.stringify(data[0])}
  </div>

  );
}

export default HookPractice;