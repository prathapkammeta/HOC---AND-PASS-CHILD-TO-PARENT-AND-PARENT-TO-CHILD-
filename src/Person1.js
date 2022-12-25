import React from 'react'
import UpdateComponent from './HOC'
function  Person1({handleIncrease,money}){

  

  return (

    <div>
      <p>John inc ${money}</p>
      <button onClick={handleIncrease}>Inc</button>
      
    </div>
  )
}
export default UpdateComponent(Person1);