import React from 'react'
import { useTasks } from '../context/TasksContext'
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

const TaskCard = ({task}) => {

    const {deleteTask} =useTasks();

  return (
    // <div className='text-light bg-dark m-5 p-3 taskCard d-flex flex-wrap'>
    //     <header className='d-flex justify-content-center'>
    //         <h1>{task.title}</h1>
    //         <Link to={`/tasks/${task._id}`}><i className="bi bi-pen text-light fs-4"></i></Link>
    //         <div>
    //             <button style={{background:'none',border:'none'}} onClick={()=> deleteTask(task._id)}><i className="bi bi-x text-light fs-1"></i></button>
    //         </div>
    //     </header>
    //     <p>{task.description}</p>
    //     <p>
    //       {dayjs(task.date).utc().format('DD/MM/YYYY')}
    //     </p>
    // </div>
      <div className="card mb-3 m-5 bg-dark text-light fs-4 taskCard border" >
          <div className="card-body d-flex justify-content-center">
            <h5 className="card-title fs-2 me-auto d-flex align-items-center">{task.title}</h5>
            <a onClick={()=> deleteTask(task._id)} className="btn d-flex align-items-center"><i className="bi bi-x text-light fs-1"></i></a>
            <Link className='btn d-flex align-items-center' to={`/tasks/${task._id}`}><i className="bi bi-pen text-light fs-5"></i></Link>
          </div>
          <div className='m-1'>
            <p style={{marginLeft:'0.5em'}} className="card-text">{task.description}</p>
          </div>
        <p className='m-4'>
          {dayjs(task.date).utc().format('DD/MM/YYYY')}
        </p>
      </div>

  )
}

export default TaskCard