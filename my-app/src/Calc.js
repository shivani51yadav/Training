import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';

const Calc = () => {
    const [num1,setNum1] = useState()
    const [num2,setNum2] = useState()
    const AddFun=()=>{
        const sum = parseInt(num1) + parseInt(num2)
        alert("Sum is" +sum)
    }
  return (
    <div>
    <input type="number" placeholder="Enter first number" onChange={(e)=>setNum1(e.target.value)} value={num1}/> <br/>
    <input type="number" placeholder="Enter second number" onChange={e=>setNum2(e.target.value)}/> <br/>
    <Button variant="primary" onClick={()=>AddFun()}>Add</Button>
    <span></span>

    </div>
  )
}
export default Calc;