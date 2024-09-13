import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')  // 后端 API 地址
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">所有文章</h1>
      {posts.length === 0 ? (
        <p>暂无文章。</p>
      ) : (
        posts.map(post => (
          <div key={post._id} className="mb-4 border-b-2 pb-2">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.content.substring(0, 100)}...</p>
            <Link to={`/post/${post._id}`} className="text-blue-500">阅读更多</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;