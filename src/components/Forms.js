import React from 'react'

export default function Forms() {
  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-4 border-gray-100 ' >
      <h1 className='text-3xl font-semibold '>Welcome Back</h1>
      <p className='font-medium text-md text-gray-500 mt-3'>Welcome back! Please enter your details.</p>
      <div className='mt-4'>
        <div>
            <label className='text-lg font-medium'>Email</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-2 mt-2' placeholder='Enter your email'></input>
            </div>
            <div>
            <label className='text-lg font-medium'>Password</label>
            <input className='w-full border-2 border-gray-100 rounded-xl p-2 mt-2' placeholder='Enter your email'></input>
            </div>
            <div className='mt-6 flex justify-between items-center'>
                <div>
                    <input type='checkbox' id='remember'></input>
                    <label className='ml-2 font-medium text-base' for="remember">Keep me login</label>
                </div>
                <button className='font-medium text-base text-violet-500'>Forget password</button>
            </div>
            <div className='mt-6 flex  flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-medium   '>Sign in</button>
                
            </div>
            <div className='mt-4 flex justify-center items-center'> 
                <p className='font-medium text-base'>New User?</p>
                <p className='text-violet-500 text-base font-medium ml-2' >Sign up</p>
            </div>
            
        </div>
      </div>
   
  )
}
