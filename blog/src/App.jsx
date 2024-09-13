// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './NavBar.jsx';


// function Home() {
//   return <h2>Home Page</h2>;
// }

// function About() {
//   return <h2>About Page</h2>;
// }

// function Contact() {
//   return <h2>Contact Page</h2>;
// }

// function App() {
//   return (
//     <div>
//         <Router>      
//           <NavBar />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </Router>
//     </div>
//   );
// }

// export default App;

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavBar from './components/NavBar.jsx'
// import Home from './components/Home.jsx';
// import PostDetail from './components/PostDetail.jsx';
// import NewPost from './components/NewPost.jsx';

// function App() {
//   return (
//     <Router>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/post/:id" element={<PostDetail />} />
//         <Route path="/new-post" element={<NewPost />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import NewPost from './components/NewPost';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/new-post" element={<NewPost />} />
      </Routes>
    </Router>
  );
}

export default App;