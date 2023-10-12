import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TasksContext'
import TaskCard from '../components/TaskCard';

const TasksPage = () => {

  const {getTasks,tasks}= useTasks();


  useEffect(() => {
    
    getTasks();

  }, []);

  useEffect(() => {

    console.log('se renderiza')
    getTasks();
  }, [tasks]);


  if(tasks.message === 'There is not task for this user'){

    return <h1 className='text-light text-center fs-2'>{tasks.message}</h1>
    
  } 

  if(tasks.length=== 0) return <h1>No tasks found</h1>
  return (
    <div>
    { 
     
      tasks.map((el)=>(
         <TaskCard key={el._id} task={el}/>
      ))

    
    

        
     

    }
    </div>
  )
}

export default TasksPage