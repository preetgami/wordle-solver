import React from 'react'
import "./display.css"
import Displaygrid from './Displaygrid';
function Displayradom(props) {
    function get_random (list) {
        return list[Math.floor((Math.random()*list.length))];}
    
    let w=get_random(props.all_word)
  return (<div>
    

  
    <div className='disp'>First word:{w}</div>
    <Displaygrid word={w}/>
    


    </div>
  )
}

export default Displayradom