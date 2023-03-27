import React from 'react'
import { FormLogin } from '../components/forms/FormLogin'
import { Portada } from '../components/Portada'

export const Login = () => {
  return (
    <div className='relative'>
        <Portada/>
        <FormLogin/>
    </div>
  )
}
