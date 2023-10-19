import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const NavBar = () => {

  const {isAuthenticated,logout,user} = useAuth();

    

  return (
    // <nav className='bg-dark p-4 d-flex justify-content-between'>
    //     <Link to={isAuthenticated ? '/tasks' : '/'}>
    //       <h1>Tasks Manager</h1>
    //     </Link>
    
    //     <ul>
    //     {
    //       isAuthenticated ?(

    //         <>
    //           <h2 className='text-light'>{user.username}</h2>
    //             <li>
    //               <Link to='/add-task'>Add Task</Link>
    //             </li>
    //             <li>
    //               <Link to='/' onClick={()=>{
    //                 logout()
    //               }}>Logout</Link>
    //             </li>
    //         </>

    //       ):(

    //         <>
    //           <li>
    //             <Link to='/login'>Login</Link>
    //           </li>
    //           <li>
    //             <Link to='/register'>Register</Link>
    //           </li>

    //         </>

    //       )
    //     }
    //     </ul>
    // </nav>
    <div className='bg-dark p-1'>
      <div className='navBar m-auto'>
          <nav className="navbar navbar-expand-lg fs-5" >
        <div className="container-fluid p-1">
          {isAuthenticated ? (

              <Link to={isAuthenticated ? '/tasks' : '/'} className=' text-decoration-none'>
                <h1 className="navbar-brand text-light fs-2" style={{margin:'0px 1em 0px'}} href="#"><i className="bi bi-journal-bookmark m-1"></i>{user.username}</h1>
              </Link>

            ):(

              <Link to={isAuthenticated ? '/tasks' : '/'} className=' text-decoration-none'>
                <h1 className="navbar-brand text-light fs-2" href="#" style={{margin:'0px 1em 0px'}}><i className="bi bi-journal-bookmark m-1"></i>TaskManager</h1>
              </Link>
            )

          }
          <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list text-light"></i>
          </button>
          {
            isAuthenticated ? (
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className='nav-link text-light' to='/add-task'>New Task</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='nav-link text-light' to='/' onClick={()=>{logout()}}>Logout</Link>
                  </li>
                </ul>
              </div>

            ):(

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className='nav-link  text-light' to='/login'>Login</Link>
                  </li>
                  <li className="nav-item">
                  <Link className='nav-link  text-light' to='/register' onClick={()=>{logout()}}>Register</Link>
                  </li>
                </ul>
              </div>



            )

          }
        </div>
      </nav>

      </div>
    </div>
  )
}

export default NavBar