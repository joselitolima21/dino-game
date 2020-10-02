import React, { useRef, useEffect} from 'react';
import sheetImg from './img/sheet.jpg'
import show from './functions/show'

function App() {

  const canvasRef = useRef(null)
  const imgRef = useRef(null)
  
  useEffect(()=>{
    show(imgRef,canvasRef)
  },[])
  
  return (
    <>
    <canvas 
      ref={canvasRef} 
      className="canvas"
    />
    <img ref={imgRef} src={sheetImg} alt="dale" style={{display:'none'}}/>
  </>
  );



}

export default App;
