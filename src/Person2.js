import React,{useState} from 'react'
import UpdateComponent from './HOC'

function  Person2({money,handleIncrease}){



  return (

    <div>
      <p>John inc ${money}</p>
      <button onClick={handleIncrease}>Inc</button>
    </div>
  )
}
export default UpdateComponent(Person2);
