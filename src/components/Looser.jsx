import React from 'react'

function Looser({restart}) {
  return (
    <div className="looser-looser">
      <div className="looser-overlay">
        <h2>Game Over..💀!!!!</h2>
        <p>Better luck next time!</p>
        <button className="retry-level" onClick={restart} >Retry</button>
      </div>
      
    </div>
  )
}

export default Looser
