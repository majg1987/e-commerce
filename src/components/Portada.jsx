import React from 'react'
import '../styles/portada.css'

export const Portada = () => {
  return (
    <>
        <div className='portada1 flex justify-center items-stretch py-5'>
            <p className='text-center font-black text-4xl text-color2 self-center uppercase'>
                Los juguetes que no quieras...
            </p>
        </div>
        <div className='portada flex justify-center items-stretch py-5'>
            <p className='font-black text-4xl text-color2 self-center uppercase'>
                ¡¡¡Vendelos!!!
            </p>            
        </div>
    </>
  )
}
