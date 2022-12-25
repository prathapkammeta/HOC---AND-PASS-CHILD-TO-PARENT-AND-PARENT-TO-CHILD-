import React from 'react'


const Child=(props)=>{

  return (
    <div>
      <h3>I am Child  {props.a}</h3>
      <button onClick={()=>props.setX("hi this is child ")}>Click </button>
    </div>
  )
}

export default Child 
