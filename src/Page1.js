
import { useState} from "react"
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import './style.css';

const initializeList=[{id:'a',name:'Apples'},{id:'b',name:'Orange'}]
function Page1() {
  const default_list=["Apple","Orange","Green"]

  const [lists,setList]=useState(initializeList)
  
  const [inputField,setInputField]=useState('')
   const [flag,setflag]=useState(false)
  
  const onChange=event => setInputField(event.target.value)

  const deleting = (a) => {
    console.log("In delete func",a)
    const newList=lists.filter((item)=>item.id!==a.id)
    setList(newList)
  }

  function addData () {
    console.log("Adding Data",inputField)
    setInputField('')
    if (inputField !=''){
const newList=lists.concat({name:inputField,id:uuidv4()})
    setList(newList);

    console.log(newList)
     setflag(false)
    }
    else{
      setflag(true)
    }
    
    
  }

  return (
    <div>
      <h1>Welcome to Page1!!!</h1>
      <input type="text" className="InputField" onChange={onChange} />
 
      <button onClick={addData} className="AddItem">Add</button>
           {flag && <p className="error">Enter something</p>}
     {
      lists.map(l => <h3 className="listitems">{l.name}<button className="Delete" onClick={() => deleting(l)}>Delete</button></h3>)
     }
     
    </div>
  );
}

export default Page1;
