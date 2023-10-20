import { createContext,useContext,useState,useEffect } from 'react'
import { createTaskRequest,
    deleteTaskRequest,
    updateTaskRequest,
    getTaskRequest,
    getTasksRequest } from '../hooks/tasks'

const TaskContext = createContext();


export const useTasks= ()=>{

    const context= useContext(TaskContext);

    if(!context){

        throw new Error('useTasks must be used within a TaskProvider');

    }

    return context;

}




export const TaskProvider=({children})=>{

    const [tasks, setTasks] = useState([]);

    const getTasks=async()=>{
        try{
            const res = await getTasksRequest();
            setTasks(res.json)



        }catch(error){

            console.log(error)
        }
        
    }

    const createTask=async(task)=>{

        const res= await createTaskRequest(task);
        //console.log(res);
        

    }

    const deleteTask=async(id)=>{

        //console.log(id)
        try{
            const res= await deleteTaskRequest(id);
            if(res.status !== 400 || 404){
                setTasks(tasks.filter(task => task._id !== id));
            } 
           
   

        }catch(error){

            console.log(error);
        }


    }

    const getTask=async(id)=>{
        
        try{

            const res= await getTaskRequest(id);
            //console.log(res.json);
            return res.json

        }catch(error){

            console.log(error)
        }
        
    }

    const updateTask=async(id,task)=>{

        try{
            const res= await updateTaskRequest(id,task)
            //console.log(res);

        }catch(error){

            console.log(error);
        }

    }



    return(
        <TaskContext.Provider value={{
            getTasks,
            createTask,
            deleteTask,
            getTask,
            updateTask,
            tasks
        }}>
            {children}
        </TaskContext.Provider>
    );

}