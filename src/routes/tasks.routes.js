import { Router } from "express";
import { authRequire } from "../middlewares/validatetoken.js";
import { getTask,getTasks,createTask,updateTask,
    deleteTask } from "../controllers/task.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema} from "../schemas/task.schema.js";


    
const router = Router();

router.get('/tasks', authRequire, getTasks)
router.get('/tasks/:id', authRequire, getTask)
router.post('/tasks', authRequire,validateSchema(createTaskSchema), createTask)
router.delete('/tasks/:id', authRequire, deleteTask)
router.put('/tasks/:id', authRequire, updateTask)

export default router;


