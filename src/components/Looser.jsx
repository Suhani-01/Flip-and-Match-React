import React from 'react'
import { useNavigate } from 'react-router-dom'

function Looser({restart}) {

  const navigate=useNavigate();
  function exit(){
    navigate('/');
  }

  return (
    <div className="looser-looser">
      <div className="looser-overlay">
        <h2>Game Over..💀!!!!</h2>
        <p>Better luck next time!</p>
        <div className='button-container'>
                    <button className="exit" onClick={exit}>
            Exit
          </button>
          <button className="retry-level" onClick={restart} >Retry</button>
        </div>
        
      </div>
      
    </div>
  )
}

export default Looser
