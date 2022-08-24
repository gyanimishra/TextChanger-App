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
    props.showAlert("Converted to Uppercase!", "success");
}
const handleSmallclick= ()=>{
    let newtext= text.toLowerCase()
    settext(newtext)
    props.showAlert("Converted to lowercase!", "success");
}
const handleClear =()=>{
  settext("")
}

const handlecopy =()=>{
  var text =document.getElementById("myBox")
  text.select()
  navigator.clipboard.writeText(text.value)
  props.showAlert("text Copied in Clipboard!", "success");
}
const handleRemove =()=>{
  let newspace = text.split(/[ ]+/)

  settext(newspace.join(" "))
  props.showAlert("Extra spaces Removed!", "success");
}

  return (
    <div style={{color:props.mode ==='dark'?'white':'black'}}  >
      <h1>{props.heading}</h1>
      
      <div className="mb-3" >
        <textarea id="myBox"  rows="8" className='form-control' value={text} onChange={handlechange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
      <div  className={style.btne}>
      <button className='btn btn-primary' onClick={handleclick}>Convert to UpperCase</button>
      <button className='btn btn-primary' onClick={handleSmallclick}>Convert to SmallerCase</button>
      <button className='btn btn-primary' onClick={handleClear}>Clear</button>
    
      <button className='btn btn-primary' onClick={handlecopy} >Copy Text</button>
      <button className='btn btn-primary' onClick={handleRemove} >Remove ExtraSpace</button>
      </div>

      <div className="container my-3">
        <h2>Text Details</h2>
        var 
        <h6>{text.split(" ").length} words and {text.length} characters</h6>
        <h6>{0.008*text.split(" ").length} minutes read</h6>

        <h2>Preview</h2>
        <p>{text.length>0?text:"write something above to Show here..."}</p>
      </div>

     
    </div>
  )
}

export default Form
