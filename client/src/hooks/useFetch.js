
//const url= 'http://localhost:3000/api'
const url= 'https://tasksapp-production-0d49.up.railway.app/api'

export const postData=async(values)=>{

   
    try{
        const res= await fetch(`${url}/register`,{
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
        
        const json= await res.json();
        console.log(json);
   

        return{json};
        
        
        
      

    }catch(error){

       console.log(error);
       return{error};
    }

}
export const loginData=async(values)=>{

   
    try{
        const res= await fetch(`${url}/login`,{
            method: 'POST',
            credentials: 'include',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        })
        
        const json= await res.json();
        //console.log(json);
   

        return{json};
        

    }catch(error){

       console.log(error);
       return{error};
    }

}

export const verifyTokenRequest= async(value)=>{

    try{

        const res=await fetch(`${url}/verify`,{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type': 'application/json',
                //'Cookie': document.cookie
            },
            body: JSON.stringify({value}),
        });
        
        const json=await res.json();
        console.log(json);
        
        return {json};



    }catch(error){
        console.log(error)
    }

}

