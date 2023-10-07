import chalk from 'chalk';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { createAccesToken } from '../libs/jwt.js';
import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const register= async (req,res) =>{
    
    const {email,password,username}=req.body;

    try{

      const userFound= await User.findOne({email})
      if(userFound) return res.status(400).json({errmessage:'The email is already in use'})

        const pwHash= await bcrypt.hash(password,10);
        
        const newUser= new User({
            
            username,
            email,
            password: pwHash,
            
        })
        
        const userSaved=await newUser.save();
        const token= await createAccesToken({id: userSaved._id})
        res.cookie('token',token)
    
        res.json({
            message:'New user created',
            id:userSaved._id,
            username: userSaved.username,
            email:userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt,

        });

    }catch(err){

        console.log(chalk.redBright(err));
    }

};

export const login= async (req,res) =>{
    
    const {email,password}=req.body;

    try{

        const userFound= await User.findOne({email})

        if(!userFound) return res.status(400).json({errmessage: 'User not found'});



        const isMatch= await bcrypt.compare(password,userFound.password);

        if(!isMatch) return res.status(400).json({errmessage:'Incorrect password'})
    
    
        
        const token= await createAccesToken({id: userFound._id})
        res.cookie('token',token)
    
        res.json({

            id:userFound._id,
            username: userFound.username,
            email:userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt,

        });

    }catch(err){

        console.log(chalk.redBright(err));
    }

};

export const logout= async (req,res) =>{
    
    res.cookie('token','',{
        expires: new Date(0),
    });
    return res.sendStatus(200)

};
export const profile= async (req,res) =>{
    
    const userFound= await User.findById(req.user.id);

    if(!userFound) return res.status(400).json({errmessage: 'User not found'});


    return res.json({
        
        id: userFound._id,
        username: userFound.username,
        email: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt,
        
    })

};

export const verifyToken =async (req,res)=>{

    const {token} = req.cookies;
    
    if(!token) return res.status(401).json({errmessage: 'Unauthorized, not token found'});

    jwt.verify(token,TOKEN_SECRET,async (err,user)=>{
        if(err) return res.status(401).json({errmessage: 'Unauthorized'});

        const userFound= await User.findById(user.id);
        if(!userFound) return res.status(401).json({errmessage: 'Unauthorized, user not found'});

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email:userFound.email,
        })
    })

}


  