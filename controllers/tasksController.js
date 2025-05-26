import exprres from "express"
import TaskModel from "../Models/TaskModel.js";

//const tasks = [{ id: 1, title: 'exmple', completed: false }]
// let currentId = 1

const TasksControl = {
    getAll: async (req, res) => {
        try {
            const tasks = await TaskModel.find();
            res.json(tasks);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    getById: async (req, res) => {

        // const taskId = parseInt(req.params.id)
        // const index = tasks.findIndex(task => task.id == taskId)
        // if (index === -1)
        //     return res.status(404).json({ message: 'Task not found' });
        //    res.json(tasks[index])

        try {
            const task = await TaskModel.findById(req.params.id);
            res.json(task);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    post: async (req, res) => {
        // if (!req.body.title) {
        //     return res.status(400).json({ message: 'Title is required' });
        // }
        // const t =
        // {
        //     id: currentId++,
        //     title: req.body.title,
        //     completed: req.body.completed || false
        // }

        // tasks.push(t);
        // res.status(201).json(t)

        const { title, complete } = req.body;

        try {
            const newTask = await TaskModel.create({ title, complete: complete? complete : false });//הוספת חדש
            res.json(newTask);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    put: async (req, res) => {
        // const taskId = parseInt(req.params.id)
        // const index = tasks.findIndex(task => task.id == taskId)
        // if (index === -1)
        //     return res.status(404).json({ message: 'Task not found' });

        // tasks[index] = { ...tasks[index], ...req.body, id: taskId }

        // res.status(201).json([tasks[index], { message: 'Task update successfully' }])

        const { id } = req.params;
        try {
            const updatedTask = await TaskModel.findByIdAndUpdate(id, req.body, {
                new: true,
            });
            res.json(updatedTask);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    },
    delete: async (req, res) => {
        // const taskId = parseInt(req.params.id)
        // const index = tasks.findIndex(task => task.id === taskId)

        // if (index === -1)
        //     return res.status(404).json({ message: 'Task not found' });

        // const task = tasks[index]
        // tasks.splice(index, 1)
        // res.status(201).json(task, { message: 'Task deleted successfully' })

        const { id } = req.params;
        try {
            const deleted = await TaskModel.findByIdAndDelete(id);//מחיקה לפי מזהה
            res.json(deleted);
        } catch (e) {
            res.status(400).json({ message: e.message });
        }
    }
}

export default TasksControl