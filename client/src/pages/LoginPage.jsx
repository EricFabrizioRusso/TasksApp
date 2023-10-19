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
    <div className='d-flex align-items-center justify-content-center m-auto'>
      <div className='text-center bg-dark m-5 p-4 loginPage rounded-2 fs-4' style={{width:'100%'}}>
        {

          AuthError.map((error,index)=>(

            <div className='text-light bg-danger rounded fs-6 p-2 m-2' key={index}>
              {error}
            </div>

          ))

        }
            {/* <form onSubmit={onSubmit}>
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
          <p className='m-1 text-light'>Don't have an account yet? <Link to={'/register'} className='m-2 fw-bold'>Sign up</Link></p> */}
        <form onSubmit={onSubmit}>
          <div className="mb-3 text-light">
            <label htmlFor="exampleInputEmail1" className="form-label fw-bold m-4">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...register('email', {required: true})}/>
            {
              errors.email && <p className='text-light bg-danger rounded fs-6 p-2 m-2'>Email is required</p>
            }
            <div id="emailHelp" className="form-text text-light fw-lighter fs-6">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3 text-light">
            <label htmlFor="exampleInputPassword1" className="form-label fw-bold m-4">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" {...register('password', {required: true})}/>
            {
              errors.password && <p className='text-light bg-danger rounded fs-6 p-2 m-2'>Password is required</p>
            }
          </div>
          <button type="submit" className="btn btn-primary" style={{width:'15em',height:'3em'}}>Login</button>
          <p className=' text-light fs-6 fw-lighter mt-5'>Don't have an account yet? <Link to={'/register'} className='m-2 fw-bold'>Sign up</Link></p>
        </form>
      </div>

    </div>
  )
}

export default LoginPage