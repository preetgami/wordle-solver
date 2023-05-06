import React from 'react'

function Solver(props) {
    const all_word=['grass', "rages",'jetty'];
//actual="grass"
let current_guess=props.guess
console.log("judwes");
console.log(props.guess);

let w=props.color
//has an a but not at 2
//look through list
//find words that dont have   h p p y
// +1 if yellow
//+2 if green 
//random
let words_allowed=[]
let word_correct_pos=[]
let scores=[]
for(let i=0; i<all_word.length; i++){
  let score=[0,0,0,0,0]
  for(let j=0; j<5;j++){
    let letter= current_guess[j];
    if ((letter=== all_word[i][j]) && w[j]==="green"){
        console.log(all_word[i])
        score[j]+=4
      }
    else if ((all_word[i].indexOf(letter) !== -1 ) && w[j]==="yellow"){
        console.log("entered");
        console.log({letter});

        score[j]+=1
      }
    else if ((all_word[i].indexOf(letter) === -1 ) && w[j]==="grey"){
      score[j]-=1
    }
    
  }
  scores.push(score)
}
let something=[]
for(let i=0; i<scores.length;i++){
    const sum1= scores[i].reduce((x,y)=> x+y,0);
    something.push(sum1)
}
console.log("hi");

console.log(something);
console.log(props.color);


let max1=Math.max(...something)
let new_guess=[]
for(let i=0; i<something.length;i++){
    if(something[i]===max1){
        new_guess.push(all_word[i])
    }
}
console.log("ekjdfn");

console.log(something);
console.log(new_guess);


  return (
    <div>{new_guess}{w}{props.guess}</div>
  )
}

export default Solver
