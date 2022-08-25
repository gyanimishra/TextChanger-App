import React from 'react'
import { useState } from 'react'
import style from "./Form.module.css";
import Typical from 'react-typical'

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
           <div id="typically">
       <h1 id="typicallyh1">
                         
                            <Typical
                            loop={Infinity}
                            steps={[
                                "Enter The Text Here... 💻",
                                7000,
                                "For See The Result! 🖥",
                                6000,
                                "Text-Changer 💻",
                                5000,
                                "Created By Gyan!💻",
                                4000,
                            ]}
                            />
                        </h1>
       </div>
      
      
      <div className="mb-3" >
        <textarea id="myBox"  rows="8" className='form-control' value={text} onChange={handlechange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}}></textarea>
      </div>
      <div  >
      <button disabled={text.length===0}   className="btn btn-primary mx-1 my-1" onClick={handleclick}>Convert to UpperCase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSmallclick}>Convert to SmallerCase</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
    
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy} >Copy Text</button>
      <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleRemove} >Remove ExtraSpace</button>
      </div>

      <div className="container my-3">
        <h2>Text Details</h2>
        <h6>{text.split(" ").filter((ele)=>{return ele.length !== 0}).length} words and {text.length} characters</h6>
        <h6>{0.008*text.split(" ").length} minutes read</h6>

        <h2>Preview</h2>
        <p>{text.length>0?text:"write something above to Show here..."}</p>
      </div>

     
    </div>
  )
}

export default Form
