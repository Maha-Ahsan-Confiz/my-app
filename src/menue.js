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

{/* <Link href="/page1">Page1</Link>
<br></br>
<Link href="/page2">Page2</Link>
<br></br>
<Link href="/hook">HookPractice</Link> */}
</>


  );
}

export default menue;