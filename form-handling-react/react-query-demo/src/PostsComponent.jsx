import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

function PostsComponent() {
    const { data, error, isLoading, refetch } = useQuery('posts', fetchPosts);
  
    return (
      <div>
        <h1>Posts</h1>
        <button onClick={refetch}>Refetch Posts</button>
        {isLoading && <div>Loading...</div>}
        {error && <div>An error occurred: {error.message}</div>}
        <ul>
          {data && data.map(post => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default PostsComponent;