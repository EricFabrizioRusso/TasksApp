import React, { useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import { useTasks } from '../context/TasksContext';
import { useParams } from 'react-router-dom';


const TaskFormPage = () => {

  const {register,handleSubmit, setValue} = useForm();
  const {createTask,updateTask,getTask}= useTasks();
  const params= useParams();


  useEffect(() => {

    const loadTask=async()=>{

      if(params.id){
  
        const task= await getTask(params.id);
        console.log(task);
        setValue('title',task.title);
        setValue('description', task.description);
      }

    }
    loadTask();

  }, []);


  const onSubmit= handleSubmit((data)=>{

    if(params.id){

      updateTask(params.id,data);

    }else{

      createTask(data);

    }


  });

  return (
    <div className='m-5 text-center'>
      <form onSubmit={onSubmit}>
          <input className='m-1 border-primary' type='text'
           placeholder='Title'
            {...register('title')}
              autoFocus
            />
          <textarea className='m-1 border-primary' rows="3" placeholder='description' {...register('description')}></textarea>
          <button className='m-1 p-1 bg-dark'>
            Save
          </button>
      </form>
    </div>
  )
}

export default TaskFormPage