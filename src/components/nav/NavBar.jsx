import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
  return (
    <div className='h-14 bg-color2 flex justify-between items-center'>
      <div>
        <FontAwesomeIcon icon={faHouse} className='text-color5 w-8 h-8 ml-8'/>
      </div>
      <div>
        <FontAwesomeIcon icon={faUser} className='text-color5 w-8 h-8 mr-8'/>
      </div>
    </div>
  )
}
