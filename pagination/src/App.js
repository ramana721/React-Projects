// import './index.css'
import {useState} from 'react'
// /* 
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
//  */


export default function App(){
  
  const [isClose, setClose] = useState(false);
 

  return (
    <>
    <div 
    className="close"
    onClick = {() => setClose((c) => !c)}
    >
      &times;
    </div>
    { isClose && <Pages />}
    {/* <Pages /> */}
    </>

  );
}

function Pages(){
  const [step, setStep] = useState(1);

   function handlePrevious(){
    return step > 1 ? setStep((s) => s-1) : null;
  }

  function handleNext(){
    return step < 3 ? setStep((s) => s+1) : null;
  }
  return (
    <div className="steps">

      <div className = "numbers">
        <div className={step >=1 ? "active": ""}>1</div>
        <div className={step >=2 ? "active": ""}>2</div>
        <div className={step >=3 ? "active": ""}>3</div>
        
      </div>

      <div className="message">{step}. {messages[step-1]}</div>
      
      <div className="buttons">
        <button onClick={handlePrevious}><span>Previous</span></button>
        <button onClick={handleNext}><span>next</span></button>
         
      </div>
    </div>
  );
}