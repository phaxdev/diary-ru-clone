const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const SECRET = 'supersecretkey';

// Mock users
const users = [
  { id: 1, username: 'test', password: '$2a$10$examplehash', role: 'student' }
];

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username);
  if (user && await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '7d' });
    res.json({ token, user });
  } else {
    res.status(401).json({ error: 'Неверные данные' });
  }
});

// Mock data
app.get('/api/schedule', (req, res) => {
  res.json([
    { day: 'Понедельник', lessons: [{time: '9:00', subject: 'Математика', room: '101'}] }
  ]);
});

app.get('/api/grades', (req, res) => {
  res.json({ math: '5', russian: '4' });
});

app.listen(PORT, () => console.log(`Backend running on ${PORT}`));