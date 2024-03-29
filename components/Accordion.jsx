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
          <span>This is the title</span>
          {accordionOpen ? 
          <span>-</span> :
          <span>+</span>}
        </button>
        <div className={`grid overflow-hidden transition-all duration-300 ease-in-out 
        ${accordionOpen ? 
          `opacity-100 grid-rows-[1fr]` :
          `opacity-0 grid-rows-[0fr]`
        }`}>
          <div className='overflow-hidden'>This is the answer</div>
        </div>
      </div>
    )
  }

export default Accordion