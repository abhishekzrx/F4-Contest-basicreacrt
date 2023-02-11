
import React, { useState } from "react";
import "./cal.css";
function Cal(){
  const [num1,setNum1]=useState();
  const [num2,setNum2]=useState();
  const [total,setTotal]=useState();
  function handleplus(){
    
    setTotal((num1)+(num2));
  }
  function handleminus(){
    setTotal((num1)-(num2));
  }
  function handleproduct(){
    setTotal((num1)*(num2));
  }
  function handledivid(){
    setTotal((num1)/ (num2));
  }
  return (
    <div className="container">
      <h1>React Calculator</h1>
         <div>
           <input type="number" className="input" placeholder="Num1" onChange={(e)=>{//Num1 
            setNum1(e.target.value)
             }}/>
         </div>
         <div>
            <input type="number" className="input" placeholder="Num2" onChange={(e)=>{//Num2
             setNum2(e.target.value)
             }}/>
         </div>
         
         <div className="buttonbox">
          <button><span onClick={handleplus}>+</span></button>
          <button><span onClick={handleminus}>-</span></button>
          <button><span onClick={handledivid}>/</span></button>
          <button><span onClick={handleproduct}>*</span></button>

         </div>
         <div className="result">
         <input className="input" type="text" value={total} ></input>
         </div>
         <div className="error">
            
         </div>
        
    </div>  
    );
  
}
export default Cal;
