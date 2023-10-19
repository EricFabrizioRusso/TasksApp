import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useNavigate, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);


const TaskFormPage = () => {

  const {register,handleSubmit, setValue} = useForm();
  const {createTask,updateTask,getTask}= useTasks();
  const params= useParams();
  const navigate= useNavigate();


  useEffect(() => {

    const loadTask=async()=>{

      if(params.id){
  
        const task= await getTask(params.id);
        setValue('title',task.title);
        setValue('description', task.description);
        setValue('date',dayjs(task.date).utc().format('YYYY-MM-DD'));
      }

    }
    loadTask();

  }, []);


  const onSubmit= handleSubmit((data)=>{

    console.log(data, 'DATA')

    const dataValid ={
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),

    }
    console.log(dataValid);

    if(params.id){

 
      updateTask(params.id,dataValid);

    }else{

      createTask(dataValid);

    }

    navigate('/tasks');
  });

  return (
    <div className='text-center bg-dark m-5 p-4 loginPage rounded-2 m-auto mt-5'>
      {/* <form onSubmit={onSubmit}>
          <label htmlFor="title">Title</label>
          <input className='m-1 border-primary' type='text'
           placeholder='Title'
            {...register('title')}
              autoFocus
            />
          
          <label htmlFor="description">description</label>
          <textarea className='m-1 border-primary'
           rows="3" placeholder='description'
            {...register('description')}></textarea>

          <label htmlFor="date">Date</label>
          <input type="date" {...register('date')}/>
          <button className='m-1 p-1 bg-dark'>
            Save
          </button>
      </form> */}
      <form onSubmit={onSubmit}>
        <div className="mb-3 text-light">
          <label htmlFor="title" className="form-label fw-bold ">Title</label>
          <input type="text" className="form-control" id="exampleInputUsername" placeholder='New Task' autoFocus {...register('title', {required: true})}/>
        </div>
        <div className="mb-3 text-light">
          <label htmlFor="description" className="form-label fw-bold ">Description</label>
          <textarea type="text" className="form-control" id="exampleInputEmail1" style={{height:'120px', resize:'none'}} placeholder='This is a short description'  {...register('description', {required: true})}></textarea>
        </div>
        <div className="mb-3 text-light">
          <label htmlFor="date" className="form-label fw-bold ">Date</label>
          <input type="date" className="form-control" id="exampleInputPassword1" {...register('date')}/>
        </div>
        <button className="btn btn-primary fs-4 m-2" style={{width:'150px'}}>Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage