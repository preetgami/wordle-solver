import React from 'react'

import Displayradom from './Displayradom';

function DisplayWord() {
  //good first guess
    const all_word=["CRANE", "RAISE", "TRACE", "AROSE", "SLANE", "SLATE", "ROAST", "SALET"]
  return (
    <Displayradom all_word={all_word}/>
  )
}

export default DisplayWord