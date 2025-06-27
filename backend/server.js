const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');
const Post = require('./models/Post');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/socialmedia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

// Routes
// Create user
app.post('/api/users', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Create post
app.post('/api/posts', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all posts
app.get('/api/posts', async (req, res) => {
  const posts = await Post.find().sort({ timestamp: -1 });
  res.json(posts);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(ServerPORT));