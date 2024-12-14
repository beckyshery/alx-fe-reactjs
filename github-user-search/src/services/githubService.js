// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

export const fetchUserData = async (username, location = '', minRepos = '', page = 1) => {
    const params = {
        q: `${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`,
        page,
        per_page: 30,
    };

    const response = await axios.get(BASE_URL, { params });
    return response.data;
};