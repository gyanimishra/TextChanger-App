
import { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  const [mode ,setmode]= useState('light')
  const [Ale ,setAle]= useState(null)



   const showAlert=(message,type)=>{
      setAle({
        message:message,
        type:type
      })
      setTimeout(()=>{
        setAle(null)
      },1500)

   }

   
   const handletoggle= ()=>{
 var id
 var id1
      if(mode==='light'){
        setmode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode enable",'success')
        document.title= 'TextUtils-Dark Mode'

     id= setInterval(()=>{
          document.title= 'TextUtils is Amazing'
        },2000)
        
      id1=setInterval(()=>{
          document.title= 'Download TextUtils Now!'
        },1500)
      }
      else{
        setmode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode enable",'success')
        document.title= 'TextUtils-Light Mode'

        clearInterval(id)
        
        clearInterval(id1)
      }
   }




  return (
    <div >
         <Navbar mode={mode} handletoggle={handletoggle}/>
      <Alert Ale={Ale}  />
        <Routes>
          <Route path='/'  element={<div className="container"  >
      <Form  mode={mode} handletoggle={handletoggle} showAlert={showAlert}/>
      </div>}/>
     
        </Routes>

      
      
     
    </div>
  );
}

export default App;
