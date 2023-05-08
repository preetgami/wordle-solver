import React, { useState ,useEffect} from 'react';
import "./box.css";
import Nextword from './Nextword';


function Displaygrid(props) {
  const [colors, setColors] = useState(Array(props.word.length).fill(''));
  const [allSelected, setall]= useState(false);
  function handleColorChange(event) {
    const index = event.target.getAttribute('data-index');
    const newColors = [...colors];
    newColors[index] = event.target.value;
    setColors(newColors);
  }
  useEffect(()=> {
    if (colors.every(color=> color!=="")){
      setall(true);
    }
  },[colors]);
  

  function loop(word) {
    let x = [];
    for (let i = 0; i < word.length; i++) {
      x.push(
        <div className="box" key={i} style={{backgroundColor: "#"+colors[i]}}>
            <span>{word[i].toUpperCase()}</span>
          <select  disabled={allSelected && colors[i] !=="" }data-index={i} onChange={handleColorChange} className='box-container'>
            <option value="">none</option>

            <option value="787c7f" style={{backgroundColor: '#787c7f', color: '#787c7f'}}>Grey</option>
            <option value="6ca965" style={{backgroundColor: '#6ca965', color: '#6ca965'}}>Green</option>
            <option value="c8b653" style={{backgroundColor: '#c8b653', color: '#c8b653'}}>yellow</option>
          </select>
          
        </div>
      );
    }
    return x;
  }
  
  let w=true
  for (let i=0;i<colors.length;i++){
        if (colors[i]===''){
        
        w=false
        break; 

        };
  }
  
  
  return <div>
    <div className='instruct'>Select the color as appearing on wordle.</div>
     <div className='instruct'> You need to slect all colors before I can generate next guess</div>
    <div className='disp'>{loop(props.word)}</div>
    
    <Nextword show={w} color={colors} guess={props.word}/>
  </div>;
}

export default Displaygrid;
