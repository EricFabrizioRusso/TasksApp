import Task from '../models/task.model.js'

export const getTasks= async(req,res)=>{

    try{
        const tasks= await Task.find({
    
    
            user: req.user.id
        }).populate('user');
        console.log(tasks);
        if(tasks.length === 0) return res.status(404).json({message: 'There is not task for this user'});
        res.json(tasks)

    }catch(error){

        return res.status(500).json({message: 'Something went wrong'});
    }


 

};
export const createTask= async(req,res)=>{

    try{
        const {title,description,date}= req.body;
        console.log(req.user)
        const newTask= new Task({
    
            title,
            description,
            date,
            user: req.user.id
    
        });
        const savedTask= await newTask.save();
        res.json(savedTask);

    }catch(error){

        return res.status(404).json({message: 'Task not found'});
    }
};
export const getTask= async(req,res)=>{

    try{
        const task= await Task.findById(req.params.id).populate('user');
        if(!task) return res.status(404).json({message:'Task not found'});
        res.json(task);

    }catch(error){

        return res.status(404).json({message: 'Task not found'});
    }


};
export const deleteTask= async(req,res)=>{

    try{
        const task= await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message:'Task not found'});
        res.json(task);

    }catch(error){

        return res.status(404).json({message: 'Task not found'});
    }


};
export const updateTask= async(req,res)=>{

    try{

        const task= await Task.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        });
        if(!task) return res.status(404).json({message:'Task not found'});
        res.json(task);

    }catch(error){

        return res.status(404).json({message: 'Task not found'});

    }
};