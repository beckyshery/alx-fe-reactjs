import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <nav>
        <Link to="/profile">Profile</Link> | <Link to="/blog/1">Blog Post</Link> | <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default Home;
