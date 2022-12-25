import React from 'react'
import {useState} from 'react'
import Child from './Child'
const Parent=()=>{
const[a,setA]=useState("parent")
  return (
    <div>
      
<h4>I am {a} </h4>
      <Child x={a} setX={setA}/>
    </div>
  )
}

export default Parent  
