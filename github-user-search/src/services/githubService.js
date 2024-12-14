// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = '') => {
    const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data.items; // Adjust based on the actual API response structure
};
// Add optional filters to the query
if (location) {
    query += `+location:${location}`;
}
if (minRepos) {
    query += `+repos:>=${minRepos}`;
}

try {
    const response = await axios.get(`${BASE_URL}?${query}`);
    return response.data.items; // Returns an array of users
} catch (error) {
    console.error('Error fetching users:', error.message);
    throw error;
}
};
