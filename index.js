const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware เพื่อให้ Express สามารถอ่าน JSON ได้
app.use(express.json());
var todo = require('./todo');
// สร้าง array เก็บข้อมูล To-do list
// let todos = [];

// GET Route เพื่อดึงรายการทั้งหมดใน To-do list
app.get('/todos', (req, res) => {
  res.json(todo.GetTask());
});

app.get('/todo/:id', function (req, res) {
    var id = req.params.id;
    res.json(todo.GetTaskByID(id));
});

// POST Route เพื่อเพิ่มรายการใหม่เข้า To-do list
app.post('/todo', (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: 'Task is required' });
  }
  const newTodo = { id: Math.max(...todo.GetTask().map(p => Number(p.id))) + 1, task };
  todo.AppenData(newTodo);
  res.status(201).json(newTodo);
});

// DELETE Route เพื่อลบรายการจาก To-do list
app.delete('/todo/:id', (req, res) => {
  const { id } = req.params;
  todo.Delete(id)
  res.status(204).send();
});

// ให้ Express เริ่มต้นทำงานที่พอร์ตที่กำหนด
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
