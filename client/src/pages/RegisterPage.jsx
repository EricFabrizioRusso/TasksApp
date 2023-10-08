import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { postData } from '../hooks/useFetch';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

const RegisterPage = () => {

    const {register,handleSubmit, formState:{
      errors
    }}= useForm();
    const {isAuthenticated,signup, AuthError}= useAuth();
    const navigate= useNavigate();
    //const params= useParams();


    useEffect(() => {


      if(isAuthenticated){

        const timer= setTimeout(() => {
           navigate('/tasks');
          
        }, 2000);
        return ()=>clearTimeout(timer);
  
      }

    }, [isAuthenticated]);



    const onSubmit= handleSubmit(async (values)=>{
  
      await signup(values)
    })
  

  /*return (
    <div className='m-5 text-center'>
        <form onSubmit={handleSubmit((values)=> postData(values))}>
            <input className='m-1 border-primary' type='text' {...register('username', {required: true})}/>
            <input className='m-1' type='email' {...register('email', {required: true})}/>
            <input className='m-1' type='password' {...register('password', {required: true})}/>
            <button className='m-1' type='submit'>
                Register
            </button>
        </form>
    </div>
  )*/
  return (
    <div className='m-5 p-4 text-center bg-dark'>
      <h1 className='text-light fw-bold mb-5'>Register</h1>
      {
        AuthError.map((error,index)=>(

          <div className='bg-danger text-light m-2' key={index}>
            {error}
          </div>
         


        ))
      } 

        <form onSubmit={onSubmit}>
            <input className='m-1 border-primary' type='text' {...register('username', {required: true})}/>
            {
              errors.username && <p className='text-danger '>Username is required</p>
            }
            <input className='m-1' type='email' {...register('email', {required: true})}/>
            {
              errors.email && <p className='text-danger '>Email is required</p>
            }
            <input className='m-1' type='password' {...register('password', {required: true})}/>
            {
              errors.password && <p className='text-danger '>Password is required</p>
            }
            <button className='m-1' type='submit'>
                Register
            </button>
        </form>
       
    </div>
  )
}

export default RegisterPage