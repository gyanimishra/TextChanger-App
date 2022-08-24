
import { useState } from 'react';
import './App.css';
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

      if(mode==='light'){
        setmode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark Mode enable",'success')
      }
      else{
        setmode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode enable",'success')
      }
   }




  return (
    <div className="App">
      <Navbar mode={mode} handletoggle={handletoggle}/>
      <Alert Ale={Ale}  />
      <div className="container"  >
      <Form  heading="Enter The Text Below For Result..." mode={mode} handletoggle={handletoggle} showAlert={showAlert}/>
      </div>
     
    </div>
  );
}

export default App;
