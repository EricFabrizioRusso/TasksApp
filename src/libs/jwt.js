import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from "../config.js"
export const createAccesToken=(payload)=>{

    return new Promise ((resolve,reject)=>{


        jwt.sign(
            payload,
            TOKEN_SECRET,
            {
                expiresIn: '1d',
            },
            (err,token)=>{
                console.log(err, 'Este es el error al crear el token');
                if(err) reject(err);
                resolve(token);
            }
        )
    })

    
}