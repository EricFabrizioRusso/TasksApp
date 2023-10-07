import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const LoginPage = () => {

  const {register,handleSubmit,formState:{errors},}= useForm();
  const {signin,AuthError, isAuthenticated}= useAuth();
  const navigate= useNavigate();

  const onSubmit=handleSubmit(async(data)=>{
     signin(data)

  })

  useEffect(() => {

    if(isAuthenticated){

    
      navigate('/tasks');
      
    }
    
  }, [isAuthenticated]);



  return (
    <div className='text-center bg-dark m-5 p-4'>
    {

      AuthError.map((error,index)=>(

        <div className='bg-danger text-light m-2' key={index}>
          {error}
        </div>

      ))

    }
          <form onSubmit={onSubmit}>
            <input className='m-1' type='email' {...register('email', {required: true})}/>
            {
              errors.email && <p className='text-danger '>Email is required</p>
            }
            <input className='m-1' type='password' {...register('password', {required: true})}/>
            {
              errors.password && <p className='text-danger '>Password is required</p>
            }
            <button className='m-1' type='submit'>
                Login
            </button>
        </form>
        <p className='m-1 text-light'>Don't have an account yet? <Link to={'/register'} className='m-2 fw-bold'>Sign up</Link></p>
    </div>
  )
}

export default LoginPage