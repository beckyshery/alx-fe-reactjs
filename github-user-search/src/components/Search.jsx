// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Ensure the function exists and handles additional parameters

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState(''); // New state for location
    const [minRepos, setMinRepos] = useState(''); // New state for minimum repositories
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target; // Capture name and value
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUserData(null);

        try {
            // Pass additional parameters to the fetch function
            const data = await fetchUserData(username, location, minRepos);
            setUserData(data);
        } catch (err) {
            setError("Looks like we can't find the user.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username" // Added name attribute
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    required
                />
                <input
                    type="text"
                    name="location" // Added name attribute
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                />
                <input
                    type="number"
                    name="minRepos" // Added name attribute
                    value={minRepos}
                    onChange={handleInputChange}
                    placeholder="Minimum repositories"
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name || userData.login}</h2> {/* Display login if name is not available */}
                    <img src={userData.avatar_url} alt={userData.name || userData.login} width="100" />
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Search;
