// src/services/githubService.js
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/users';

export const fetchUser Data = async (username, location, minRepos) => {
    const query = `${username} ${location ? `location:${location}` : ''} ${minRepos ? `repos:>${minRepos}` : ''}`.trim();
    const response = await axios.get(`${GITHUB_API_URL}?q=${encodeURIComponent(query)}`);
    return response.data;
};