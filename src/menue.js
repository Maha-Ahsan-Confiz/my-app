import React from "react";
import { Link } from "react-router-dom";





function menue() {
    console.log("In menue")
  return (
<>
{/* <Link to="/">Page1 </Link> */}
<a href="/page1">Page1</a>
<br></br>
<a href="/page2">Page2</a>
<br></br>
<a href="/hook">HookPractice</a>
</>
  );
}

export default menue;