
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

const [mode , setMode] = useState('light');

const toggleMode = ()=> {
  if(mode === 'light')
  {
    setMode('dark');
    console.log(mode)
  }
  else
  {
    setMode('light');
    console.log(mode)
  }
}

  return (
    <>    
      <Navbar title="TextUtils" mode={mode} toogleMode={toggleMode}/>

      <div className="container my-3">
      <TextForm heading="Enter the text to analyze below"></TextForm>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
