# React Query Demo

This project demonstrates the integration of React Query into a React application for efficient data fetching, caching, and updating. It uses the JSONPlaceholder API to fetch posts and showcases advanced features of React Query.

## Features

- **Data Fetching:** Fetches posts from the JSONPlaceholder API using React Query's `useQuery` hook.
- **Caching:** Implements automatic data caching to reduce redundant network requests.
- **Error Handling:** Displays appropriate error messages for failed API calls.
- **Manual Refetching:** Provides a button to refetch data on demand.
- **React Query DevTools:** Integrated to inspect and debug React Query's cache and network activity.

## API Details

This project fetches posts from the JSONPlaceholder API:

- **Endpoint:** `https://jsonplaceholder.typicode.com/posts`
- **Response Example:**
  ```json
  [
    {
      "userId": 1,
      "id": 1,
      "title": "Sample Post Title",
      "body": "Sample post body."
    },
    ...
  ]
