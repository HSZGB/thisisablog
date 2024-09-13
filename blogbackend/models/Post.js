const mongoose = require('mongoose');

// 定义文章的 schema
const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

// 创建模型
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
