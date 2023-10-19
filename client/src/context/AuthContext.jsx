import { createContext, useState, useContext, useEffect } from "react";
import { loginData, postData, verifyTokenRequest } from "../hooks/useFetch";
import { array } from "zod";
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';



export const AuthContext= createContext();
export const useAuth= ()=>{

    const context= useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;

}

export const AuthProvider =({children})=>{

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [AuthError, setAuthError] = useState([]);
    const [loading, setloading] = useState(true);


    const signup=async (user)=>{

        try{

            const res= await postData(user);
            console.log(res.json);

            if('errmessage' in res.json){

        
                setAuthError([res.json.errmessage])
  
                return;
             
            }
            setUser(res.json);
            setIsAuthenticated(true);
     
        }catch(err){


            console.log(err);
            
       

        }

    }

    const signin =async(user)=>{

        try{

            const res=await loginData(user);
            console.log(res.json);
            if('errmessage' in res.json){

        
                setAuthError([res.json.errmessage])
                return;
             
            }
            setUser(res.json);
            setIsAuthenticated(true);
        }catch(error){
            
            console.log(error);

        }
    }

    const logout= ()=>{

        Cookies.remove('token');
        Cookies.remove('newToken');
        setIsAuthenticated(false);
        //navigate('/')
        setUser(null);

    }


    useEffect(() => {
        
        const checkLogin= async()=>{


            const cookies= Cookies.get();
            let saveCookie= cookies.token
            const cookieFrontend= Cookies.set('newToken', saveCookie)
            console.log(cookies.token,'Compruebo si existen cookies');
            /*if(!cookies.token){
                setIsAuthenticated(false);
                setloading(false);
                console.log("entra al !cookies")
                return;
            }*/
            //console.log(cookieFrontend);
            if(!cookieFrontend){
                setIsAuthenticated(false);
                setloading(false);
                console.log("entra al !cookiesFrontend")
                return;
            }

            try{

                /*const res= await  verifyTokenRequest(cookies);
                setIsAuthenticated(true);
                setUser(res.json);
                setloading(false);
                console.log('token valido')*/
                const res= await  verifyTokenRequest(cookieFrontend);
                setIsAuthenticated(true);
                setUser(res.json);
                setloading(false);
                console.log('token valido', cookieFrontend)
                
            }catch(error){

                console.log(error)
                setIsAuthenticated(false);
                setloading(false);
            }

        }

        checkLogin()

    }, []);






    return(
        <AuthContext.Provider value={{
            user,
            signup,
            isAuthenticated,
            AuthError,
            signin,
            loading,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )

}