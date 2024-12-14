// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService'; // Ensure the function name matches

const Search = () => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [location, setLocation] = useState(''); 
    const [minRepos, setMinRepos] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setUsername(e.target.value);
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
            const data = await fetchUserData (username); // Ensure the function name matches
            setUserData(data);
        } catch (err) {
            setError('Looks like we cant find the user');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    required
                />
                 <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                    />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {userData && (
                <div>
                    <h2>{userData.name || userData.login}</h2> {/* Display login if name is not available */}
                    <ul>
                        {usersData.map((user, index) => (
                            <li key={user.id || index}>
                                <h3>{user.name || user.login}</h3>
                    <img src={userData.avatar_url} alt={userData.name || userData.login} width="100" />
                    <p>
                        <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
                            View Profile
                                 </a>
                             </p>
                        </li>
                     ))}
                 </ul>
             </div>
          )}
      </div>
    );
};

export default Search;