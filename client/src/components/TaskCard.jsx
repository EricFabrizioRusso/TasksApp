import React from 'react'
import { useTasks } from '../context/TasksContext'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const TaskCard = ({task}) => {

    const {deleteTask} =useTasks();

  return (
    <div className='text-light bg-dark m-5 p-3'>
        <header className='d-flex justify-content-between'>
            <h1>{task.title}</h1>
            <div>
                <button onClick={()=> deleteTask(task._id)}>Delete</button>
            </div>
            <Link to={`/tasks/${task._id}`}>Edit</Link>
        </header>
        <p>{task.description}</p>
        <p>
          {dayjs(task.date).utc().format('DD/MM/YYYY')}
        </p>
    </div>
  )
}

export default TaskCard