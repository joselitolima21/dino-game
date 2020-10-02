import React, { useRef, useEffect} from 'react';
import sheetImg from './img/sheet.png'
import sceneImg from './img/scene.png'
import show from './functions/show'

function App() {

  const canvasRef = useRef(null)
  const imgRef = useRef(null)
  const sceneRef = useRef(null)
  
  useEffect(()=>{
    show(imgRef,canvasRef,sceneRef)
  },[])
  
  return (
    <>
    <canvas 
      ref={canvasRef} 
      className="canvas"
    />
    <img ref={imgRef} src={sheetImg} alt="dale" style={{display:'none'}}/>
    <img ref={sceneRef} src={sceneImg} alt="dale" style={{display:'none'}}/>
  </>
  );



}

export default App;
