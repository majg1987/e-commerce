import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export const NavBar = () => {

  const navigate = useNavigate();

  return (
    <div className='h-14 bg-color2 flex justify-between items-center'>
      <div>
        <FontAwesomeIcon onClick={() => navigate('/')} icon={faHouse} className='cursor-pointer text-color5 w-8 h-8 ml-8'/>
      </div>
      <div>
        <FontAwesomeIcon onClick={() => navigate('/login')} icon={faUser} className='cursor-pointer text-color5 w-8 h-8 mr-8'/>
      </div>
    </div>
  )
}
