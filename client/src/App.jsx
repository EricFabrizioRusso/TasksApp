import './App.css'
import {BrowserRouter,HashRouter,Route,Routes} from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import TasksPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import HomePage from './pages/HomePage'
import ProfilePage from './pages/ProfilePage'
import { ProtectedRoute } from './ProtectedRoute'
import { TaskProvider } from './context/TasksContext'
import NavBar from './components/NavBar'


function App() {

  return (
    <>
      <h1 className='bg-primary text-light p-3 text-center m-3'>Mi app TodoApp</h1>
      <AuthProvider>
        <TaskProvider>
          <HashRouter>
            <NavBar/>
              <Routes>

                  <Route path='/' element={<HomePage/>}/>
                  <Route path='/register' element={<RegisterPage/>}/>
                  <Route path='/login' element={<LoginPage/>}/>

               
            
                  <Route element={<ProtectedRoute/>}>
                    <Route path='/tasks' element={<TasksPage/>}/>
                    <Route path='/add-task' element={<TaskFormPage/>}/>
                    <Route path='/tasks/:id' element={<TaskFormPage/>}/>
                    <Route path='/profile' element={<ProfilePage/>}/>
                  </Route>
              </Routes>
          </HashRouter>
        </TaskProvider>
      </AuthProvider>
    </>
  )
}

export default App
