import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TasksContext'
import TaskCard from '../components/TaskCard';

const TasksPage = () => {

  const {getTasks,tasks}= useTasks();


  useEffect(() => {
    
    getTasks();

  }, []);

  useEffect(() => {

    //console.log('se renderiza')
    getTasks();
  }, []);


  if(tasks.message === 'There is not task for this user'){

    return <h1 className='text-light text-center fs-1 mt-5'>{tasks.message}</h1>
    
  } 

    if(tasks.length=== 0) return //<div className='m-auto text-center'><h1 className='text-light'>No tasks found</h1></div>
  return (
    <div className='d-flex flex-wrap m-auto' style={{maxWidth:'1200px'}}>
    { 
     
      tasks.map((el)=>(
         <TaskCard key={el._id} task={el}/>
      ))

    
    

        
     

    }
    </div>
  )
}

export default TasksPage