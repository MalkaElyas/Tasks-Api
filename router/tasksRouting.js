
import express from 'express';
import TasksControl from "../controllers/tasksController.js";

const TasksRouter = express.Router();

TasksRouter.get('/',TasksControl.getAll);
TasksRouter.get('/:id',TasksControl.getById);
TasksRouter.post('/',TasksControl.post);
TasksRouter.put('/:id',TasksControl.put);
TasksRouter.delete('/:id',TasksControl.delete);

export default TasksRouter;