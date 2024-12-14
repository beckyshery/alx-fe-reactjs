// src/components/Search.jsx
import React, { useState } from 'react';
import { fetchUser Data } from '../services/githubService'; // Ensure the function name matches

const Search = () => {
    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');
    const [userData, setUser Data] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') setUsername(value);
        if (name === 'location') setLocation(value);
        if (name === 'minRepos') setMinRepos(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setUser Data([]);

        try {
            const data = await fetchUserData (username, location, minRepos);
            setUser Data(data.items); // Assuming the API returns an object with an 'items' array
        } catch (err) {
            setError('Looks like we can\'t find any users');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleInputChange}
                    placeholder="Enter GitHub username"
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                />
                <input
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange}
                    placeholder="Enter location"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                    type="number"
                    name="minRepos"
                    value={minRepos}
                    onChange={handleInputChange}
                    placeholder="Minimum repositories"
                    className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {userData.length > 0 && (
                <div className="mt-4">
                    {userData.map(user => (
                        <div key={user.id} className="border p-4 mb-2 rounded">
                            <h2 className="text-lg font-bold">{user.login}</h2>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Repositories: {user.public_repos}</p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                                View Profile
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;