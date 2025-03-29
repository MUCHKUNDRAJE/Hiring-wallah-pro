import React, { use } from 'react'
import { useRef, useEffect } from 'react'
import { useState } from 'react'
import Webcam from "react-webcam";
import * as faceapi from "face-api.js";

function Home() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");
  const [error, setError] = useState(null);
  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("model/tiny_face_detector_model-weights_manifest.json");
      await faceapi.nets.faceExpressionNet.loadFromUri("model/face_expression_model-weights_manifest.json");
      console.log("Models Loaded from URL ✅");
    };
  
    loadModels();
  }, []);
  
  useEffect(() => {
    const detectEmotions = async () => {
      if (
        webcamRef.current &&
        webcamRef.current.video.readyState === 4 &&
        canvasRef.current
      ) {
        const video = webcamRef.current.video;
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
  
        // Match canvas size to video size
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
  
        const detections = await faceapi
          .detectSingleFace(video, new faceapi.TinyFaceDetectorOptions())
          .withFaceExpressions();
  
        if (detections) {
          const expressions = detections.expressions;
  
          // Get the emotion with the highest confidence
          const maxEmotion = Object.keys(expressions).reduce((a, b) =>
            expressions[a] > expressions[b] ? a : b
          );
  
          setEmotion(`${maxEmotion} (${(expressions[maxEmotion] * 100).toFixed(2)}%)`);
  
          // Clear the canvas
          context.clearRect(0, 0, canvas.width, canvas.height);
  
          // Draw detections (bounding box around face)
          faceapi.draw.drawDetections(canvas, detections);
  
          // Draw emotions (text labels for expressions)
          faceapi.draw.drawFaceExpressions(canvas, detections);
        }
      }
    };
  
    const interval = setInterval(detectEmotions, 500);
    return () => clearInterval(interval);
  }, []);
  
  


  return (
    <div className='h-screen w-full  flex items-center justify-center flex-col gap-1 bg-[#202124]'>
               <div className = 'h-10 w-10 rounded-full bg-white overflow-hidden '>
              <img src="images/crop.png" alt="" />
           </div>
      <h1 id='font' className=' text-3xl text-purple-300 font-bold '>HR Interview </h1>

<div className='flex items-center justify-center gap-4 mt-4'>
  <div>
     <h1 className='text-white text-center '>HR</h1>
      <div className=' w-[40rem] rounded-lg overflow-hidden shadow-lg relative '>
          <Webcam   videoConstraints={{ facingMode: "user" }} />
          <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div> 
  </div>

    <div>
       <h1  className='text-white text-center '>Job Seeker</h1>
    <div className=' w-[40rem] rounded-lg overflow-hidden shadow-lg relative '>
          <Webcam  ref={webcamRef} videoConstraints={{ facingMode: "user" }} />
          <canvas ref={canvasRef} className="absolute top-0 left-0" />
    </div>
    </div>
</div>
      <div>
        <h1 className='text-2xl text-slate-100 mt-4'>Detected Emotion: {emotion}</h1>

      </div>

    </div>
  )
}

export default Home