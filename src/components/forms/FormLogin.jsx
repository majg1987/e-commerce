import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

export const FormLogin = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='mt-24 flex justify-center'>
        <div className='w-auto bg-color5 border-2 border-color2 rounded shadow-lg shadow-color2'>
            <form onSubmit={handleSubmit}
                className='m-4 flex flex-col items-center'    
            >
                <h1 className='text-2xl text-color2 font-extrabold uppercase my-6'>Login</h1>
                <input type="email" 
                    placeholder='Introduce tu Email'
                    className='text-color2 text-center p-2 rounded focus:outline-none w-96 mb-4 border-2 border-color2'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input type="password"
                    placeholder='Introduce tu Password'
                    className='text-color2 text-center p-2 rounded focus:outline-none w-96 mb-4 border-2 border-color2'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />

                <button type='submit' 
                    className='bg-color2 text-color5 w-32 rounded uppercase
                                p-2 mb-2 hover:font-black'>
                    Acceder
                </button>

                <p className='text-color2 text-base cursor-pointer font-semibold mb-4'
                    onClick={() => navigate('/registerUser') }    
                >
                    ¿Aún no tiene cuenta? Registrese
                </p>

            </form>
        </div>  
    </div>

  )
}
