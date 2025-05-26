import express from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import TasksRouter from './router/tasksRouting.js';
import connectDB from './db.js';

connectDB();

const app = express()
const port = 3000

app.use(cors());
// app.use(express.json())
app.use(bodyParser.json())
app.use('/tasks',TasksRouter);

//הדרך הישנה
// app.get('/tasks', (req, res) => {
//     res.json(tasks);
// });

// app.post('/tasks', (req, res) => {

//     if (!req.body.title) {
//         return res.status(400).json({ message: 'Title is required' });
//     }
//     const t =
//     {
//         id: currentId++,
//         title: req.body.title,
//         completed: req.body.completed || false
//     }

//     tasks.push(t);
//     res.status(201).json(t)
// });

// app.put('/tasks/:id', (req, res) => {
//     const taskId = parseInt(req.params.id)
//     const index = tasks.findIndex(task => task.id == taskId)
//     if (index === -1)
//         return res.status(404).json({ message: 'Task not found' });

//     tasks[index] = { ...tasks[index], ...req.body, id: taskId }

//     res.status(201).json([tasks[index], { message: 'Task update successfully' }])

// });

// app.delete('/tasks/:id', (req, res) => {

//     const taskId = parseInt(req.params.id)
//     const index = tasks.findIndex(task => task.id === taskId)

//     if (index === -1)
//         return res.status(404).json({ message: 'Task not found' });

//     const task = tasks[index]
//     tasks.splice(index, 1)
//     res.status(201).json(task,{ message: 'Task deleted successfully' })

// });

app.listen(port, () => {
    console.log(`http://localHost:${port}`)
})