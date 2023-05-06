import React from 'react'
import DisplayWord from './DisplayWord';

import  {useState} from 'react';
import "./display.css"
function Genfirstword() {
    const [showComponents, setShowComponents] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (!buttonClicked) {
            setShowComponents(true);
            setButtonClicked(true);
          }
      }
    
      return (
        <div >
        <form onSubmit={handleSubmit}className='cenetr-div'>
          <button type="submit"  className={`button ${buttonClicked ? 'disabled' : ''}`} disabled={buttonClicked} >Genearte first word</button>
        </form>
        {showComponents && (
            <>
              <DisplayWord />
              
            </>)}
</div>);
}

export default Genfirstword;