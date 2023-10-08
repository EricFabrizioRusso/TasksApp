import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NavBar = () => {

  const {isAuthenticated,logout,user} = useAuth();

    

  return (
    <nav className='bg-dark p-4 d-flex justify-content-between'>
        <Link to={isAuthenticated ? '/tasks' : '/'}>
          <h1>Tasks Manager</h1>
        </Link>
    
        <ul>
        {
          isAuthenticated ?(

            <>
              <h2 className='text-light'>{user.username}</h2>
                <li>
                  <Link to='/add-task'>Add Task</Link>
                </li>
                <li>
                  <Link to='/' onClick={()=>{
                    logout()
                  }}>Logout</Link>
                </li>
            </>

          ):(

            <>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/register'>Register</Link>
              </li>

            </>

          )
        }
        </ul>
    </nav>
  )
}

export default NavBar