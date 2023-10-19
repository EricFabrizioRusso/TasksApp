//const url= 'http://localhost:3000/api'
const url= 'https://tasksapp-production-0d49.up.railway.app/api'

export const getTasksRequest= async () =>{
    
    
    try{
        const res= await fetch(`${url}/tasks`,{

            credentials:'include',
        });
        const json= await res.json();
        
        //console.log(json);
        return {json}
        
    }catch(error){
        
        console.log(error);
        
    }
    
}
export const getTaskRequest= async (id) =>{

    
    try{
        const res=await fetch(`${url}/tasks/${id}`,{
            
            credentials:'include',
        });
        const json= await res.json();

        return {json}

    }catch(error){

        console.log(error)

    }

}
export const createTaskRequest= async (task) =>{

    
    try{
        const res= await fetch(`${url}/tasks`,{
            method: 'POST',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });

        const json= await res.json();
        return {json}


    }catch(error){

        console.log(error)
    }

}
export const updateTaskRequest= async (id,task) =>{

    
    try{
        const res= await fetch(`${url}/tasks/${id}`,{
            method: 'PUT',
            credentials: 'include',
            headers:{

                'Content-Type': 'application/json',

            },
            body: JSON.stringify(task)
        })
        const json= await res.json()

        return {json}

    }catch(error){

        console.log(error)

    }

}
export const deleteTaskRequest= async (id) =>{

    
    try{
        const res= await fetch(`${url}/tasks/${id}`,{

            method: 'DELETE',
            credentials: 'include',
            headers:{

                'Content-Type': 'application/json',

            },
       
            body: JSON.stringify({id})

        })
        const json=await res.json();

        console.log(json)
        return {json};


    }catch(error){

        console.log(error);

    }

}

