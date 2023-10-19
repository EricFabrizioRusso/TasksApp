import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { postData } from '../hooks/useFetch';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';

const RegisterPage = () => {

    const {register,handleSubmit, formState:{
      errors
    }}= useForm();
    const {isAuthenticated,signup, AuthError}= useAuth();
    const navigate= useNavigate();


    useEffect(() => {


      if(isAuthenticated){

        const timer= setTimeout(() => {
           navigate('/tasks');
          
        }, 2000);
        return ()=>clearTimeout(timer);
  
      }

    }, [isAuthenticated]);



    const onSubmit= handleSubmit(async (values)=>{

      values.username = values.username.charAt(0).toUpperCase() + values.username.slice(1).toLowerCase();
  
      await signup(values)
    })
  
  return (
    <div className='d-flex align-items-center justify-content-center m-auto' >
      <div className='text-center bg-dark m-5 p-4 loginPage rounded-2 fs-4' style={{width:'100%'}}>
        {/* <h1 className='text-light fw-bold mb-5'>Register</h1> */}
        {
          AuthError.map((error,index)=>(

            <div className='bg-danger text-light m-2' key={index}>
              {error}
            </div>
          


          ))
        } 

          {/* <form onSubmit={onSubmit}>
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
          </form> */}
          <form onSubmit={onSubmit}>
          <div className="mb-3 text-light">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold m-4">Username</label>
            <input type="text" className="form-control" id="exampleInputUsername" {...register('username', {required: true})}/>
            {
              errors.username && <p className='text-danger '>Username is required</p>
            }
          </div>
          <div className="mb-3 text-light">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold m-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', {required: true})}/>
            {
              errors.email && <p className='text-danger '>Email is required</p>
            }
            <div id="emailHelp" className="form-text text-light fw-lighter fs-6">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 text-light">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold m-4">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', {required: true})}/>
            {
              errors.password && <p className='text-danger '>Password is required</p>
            }
          </div>
          <button type="submit" className="btn btn-primary fs-6" style={{width:'15em',height:'3em'}}>Register</button>
          <p className='m-1 text-light fs-6 mt-5'>Do you already have an account? <Link to={'/login'} className='m-2 fw-bold'>Sign in</Link></p>
        </form>
        
      </div>

    </div>
  )
}

export default RegisterPage