import { useState } from "react";
import React from 'react'

function Accordion(props){
    const [accordionOpen, setAccordion] = useState(false);
  
    function clickHandler(){
      setAccordion(!accordionOpen);
      console.log(accordionOpen);
    }
    
    return( 
      <div>
        <button onClick={clickHandler} className='w-full flex justify-between '>
          <span className="font-semibold text-left">{props.question}</span>
          <div>  
            {accordionOpen ? 
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg> :
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>}
          </div>
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
        ${accordionOpen ? 
          `opacity-100 grid-rows-[1fr]` :
          `opacity-0 grid-rows-[0fr]`
        }`}>
          <div className='overflow-hidden opacity-65 py-2'>{props.answer}</div>
        </div>
      </div>
    )
  }

export default Accordion