
import './App.css';
import Form from './Components/Form';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container" >
      <Form  heading="Enter The Text Below For Result..."/>
      </div>
     
    </div>
  );
}

export default App;
