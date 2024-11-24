import React from 'react';
import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isError, error, isLoading, refetch } = useQuery('posts', fetchPosts, {
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 2 * 60 * 1000, // Data remains fresh for 2 minutes
    refetchOnWindowFocus: true, // Refetch data when window regains focus
    keepPreviousData: true, // Preserve previous data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
