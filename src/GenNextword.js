import React from 'react'
import Solver from './Solver';

function GenNextword(props) {
  let x =[];
  for ( let i=0; i<props.color.length;i++){
    if (props.color[i]==="6ca965"){
      x.push("green");
    }
    else if (props.color[i]==="c8b653"){
      x.push("yellow");
    }
    else {
      x.push("grey");
    }
  }
  return (
    <div><Solver color={x} guess={props.guess}/></div>
  )
}

export default GenNextword