import React, {useState} from 'react'

export const FormRegister = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='mt-20 flex justify-center'>
        <div className='w-auto bg-color5 border-2 border-color2 rounded shadow-lg shadow-color2'>
            <form onSubmit={handleSubmit}
                className='m-4 flex flex-col items-center'    
            >
                <h1 className='text-color2 text-2xl font-extrabold uppercase my-6'>
                    Registro
                </h1>
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
                <input type="password"
                    placeholder='Repite tu Password'
                    className='text-color2 text-center p-2 rounded focus:outline-none w-96 mb-4 border-2 border-color2'
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    value={repeatPassword}
                />
                <button type='submit' 
                    className='bg-color2 text-color5 w-32 rounded uppercase
                                p-2 mb-4 hover:font-black'
                >
                    Registrate
                </button>
            </form>
        </div>  
    </div>
    
  )
}
