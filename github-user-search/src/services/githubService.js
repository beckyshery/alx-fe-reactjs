// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUser Data = async (username, location = '', minRepos = '') => {
    const query = `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
    const response = await axios.get(`${BASE_URL}?q=${encodeURIComponent(query)}`);
    return response.data.items; // Adjust based on the actual API response structure
};