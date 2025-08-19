import React, { useContext } from 'react'


function Header({time,flips}) {
 

  return (
    <div className='header'>
        <div>
            <div className='label'>Timer :</div>
            <div className='var-count'>{time}</div>
        </div>
    
        <div>
            <div className='label'>Flips :</div>
            <div className='var-count'>{flips}</div>
        </div>
    </div>
  )
}

export default Header
