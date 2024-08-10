import React from 'react';
//import './index.css'
import {useTimer} from 'use-timer'

const App = () =>{
  const{time,start,pause,reset,status} =useTimer();
  return (
   <>
   <div className='container'>
    <div className="btn">
 <button onClick={start}>Start</button>
    <button onClick={pause}>Pause</button>
    <button onClick={reset}>Reset</button>
    </div>
   
    <div className="pragram">
    <p>Start Timer:{time}</p>
    {status ==='RUNNING' && <p>RUNNING....</p>}
    </div>
   </div>

   </>
  );
}

export default App;
