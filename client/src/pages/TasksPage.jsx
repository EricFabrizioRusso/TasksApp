import React, { useState, useEffect } from 'react';
import { useTasks } from '../context/TasksContext'
import TaskCard from '../components/TaskCard';

const TasksPage = () => {

  const {getTasks,tasks}= useTasks();


  useEffect(() => {
    
    getTasks();

  }, []);


  if(tasks.message === 'There is not task for this user'){

    return <h1 className='text-light text-center fs-2'>{tasks.message}</h1>
    
  } 
  return (
    <div>
    { tasks.length === 0 ?  (
      tasks.map((el)=>(
         <TaskCard key={el._id} task={el}/>
      ))

    ):(

        <h1>No task</h1>

    )
    

        
     

    }
    </div>
  )
}

export default TasksPage