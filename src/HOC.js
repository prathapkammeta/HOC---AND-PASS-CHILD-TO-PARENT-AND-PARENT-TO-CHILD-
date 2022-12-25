
import  React,{useState} from 'react'
function UpdateComponent(OriginalComponent){

  function NewComponent(){
 
    const[money,setMoney]=useState(10);
    const[les,setLes]=useState(0);


    const handleIncrease=()=>{

      setMoney(money *2);
    }
   

    return <OriginalComponent  handleIncrease={handleIncrease}    money={money}  /> 

  }
  return NewComponent
}
export default UpdateComponent