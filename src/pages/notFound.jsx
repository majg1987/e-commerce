import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router'
export const NotFound = () => {
  
  const navigate = useNavigate();

  return (
    <div className='absolute
                    h-screen
                    w-screen
                    top-16
                    left-0
                    right-0
                    flex flex-col   
                    pt-28
                  bg-color5 
                    uppercase'
    >
      <p className='text-5xl 
                    font-semibold 
                    p-2 
                    text-color1'
      >
        La página a la que intenta acceder no existe
      </p>
      <div>
        <p className='text-7xl 
                      font-bold 
                      p-2 
                      text-color2'
        >
          Page not found
        </p>
      </div>
      <div>
        <p className='text-9xl 
                      font-extrabold 
                      p-2 
                      text-color3'
        >
          404
        </p>
      </div>
      <div className='mt-4'>
        <button className='bg-color1 rounded-lg
                            text-color2 font-bold 
                            p-3 shadow-lg shadow-color2
                            cursor-pointer
                            hover:shadow-color1 
                            hover:bg-color2 
                            hover:text-color1
                            hover:font-extrabold'
                onClick={() => navigate('/')}
        >
          <FontAwesomeIcon icon={faRotateLeft} />           
          Home
        </button>
      </div>    
    </div>
  )
}
