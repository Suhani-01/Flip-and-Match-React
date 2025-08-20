import React, { useEffect, useState } from 'react'
import Header from './Header'
import CardsContainer from './CardsContainer'
import { Link, useLocation, useNavigate } from 'react-router-dom';

function LevelComponent() {
  
  const navigate=useNavigate();
  const location=useLocation();
  const levelNumber=location.state?.levelNumber || 1;
 


  const [time,setTime]=useState(50);
  const [flips,setFlips]=useState(0);
  const [uniqueCards,setUniqueCards]=useState(0);

  useEffect(() => {
    if (levelNumber === 1) {
      console.log("level 1 opened")
      setUniqueCards(2);
    } else if (levelNumber === 2) {
      console.log("level 2 opened")
      setUniqueCards(3);
    } else if(levelNumber===3){
      console.log("level 3 opened")
      setUniqueCards(6);
    }else if(levelNumber===4){
      console.log("level 4 opened")
      setUniqueCards(8);
    }else if(levelNumber===5){
      console.log("level 5 opened")
      setUniqueCards(10);
    }else if(levelNumber===6){
      console.log("level 6 opened")
      setUniqueCards(12);
    }else{
      console.log("error occured")
    }
  }, [levelNumber]);

  return (
    <div className='game-container'>
        
        <h2> Level {levelNumber} </h2>
        
        <Header time={time} flips={flips}/>
        <CardsContainer time={time} flips={flips} setFlips={setFlips} setTime={setTime} uniqueCards={uniqueCards} levelNumber={levelNumber}/>
    </div>
  )
}

export default LevelComponent
