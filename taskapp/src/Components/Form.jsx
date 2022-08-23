import React from 'react'
import { useState } from 'react'
import style from "./Form.module.css";

const Form = (props) => {

    const [text, settext]= useState("")



 


const handlechange=(e)=>{
settext(e.target.value)
    
}

const handleclick= ()=>{

    let newtext= text.toUpperCase()
    settext(newtext)
}
const handleSmallclick= ()=>{
    let newtext= text.toLowerCase()
    settext(newtext)
}
const handleClear =()=>{
  settext("")
}

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea id="myBox"  rows="8" className='form-control' value={text} onChange={handlechange}></textarea>
      </div>
      <div  className={style.btne}>
      <button className='btn btn-primary' onClick={handleclick}>Convert to UpperCase</button>
      <button className='btn btn-primary' onClick={handleSmallclick}>Convert to SmallerCase</button>
      <button className='btn btn-primary' onClick={handleClear}>Clear</button>
      </div>

      <div className="container my-3">
        <h2>Text Details</h2>
        var 
        <h6>{text.split(" ").length} words and {text.length} characters</h6>
        <h6>{0.008*text.split(" ").length} minutes read</h6>

        <h2>Preview</h2>
        <p>{text}</p>
      </div>

     
    </div>
  )
}

export default Form
