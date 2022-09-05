
import { useState} from "react"
import React from "react";
import { useMemo } from "react";
import useApi from "./useApi";




function Page2() {
 
  

const[data1,setData] = React.useState()
const[main_data,mainData] = React.useState()
const [inputField,setInputField] = useState()

const onChange=event => setInputField(event.target.value)




  // const { loading, datass } = useApi('https://api.sampleapis.com/wines/reds')
    // console.log("Hook Practice=",datass)


React.useEffect(()=>{
    console.log("In main data")
    fetch("https://api.sampleapis.com/wines/reds").then(res=>res.json())
    .then(data=>setData(data)  ,mainData(data1))
    console.log("Data==",data1)
    // mainData(data1)
},[])

const data12 = useMemo(() =>{
    if(!inputField) return data1;

    return data1.filter((d)=>
    {
        return d.winery.toLowerCase().includes(inputField.toLowerCase())
    })
},[inputField,data1])



  function handleChange(a){
    setInputField(a)
    // console.log("Main_data",main_data)
    // console.log("Val=",inputField,"a=",a)



}

  return (
    <div>

   
     <h1>Welcome to Page two</h1>
     {/* { console.log("Data2==",data1[0])} */}
     <input type="text" onChange={onChange}  />
     {data12 && data12.map(d => <p>{d.winery}</p>)}
    
    </div>
  );
}

export default Page2;
