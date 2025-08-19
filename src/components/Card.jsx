import React from 'react'

function Card({imageSource,handler}) {
  return (
    <>
      
      <div id={imageSource.key} data-value={imageSource.name}  className="card" onClick={(e)=>handler(e.currentTarget)}>
        <div className="frontside"></div>
        <img className="backside" src={imageSource.image} alt={imageSource.name}/>
      </div>
    
    </>
  )
}

export default Card
