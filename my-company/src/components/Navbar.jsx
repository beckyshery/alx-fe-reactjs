// src/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/about" style={styles.link}>About</Link>
            <Link to="/services" style={styles.link}>Services</Link>
            <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px',
        backgroundColor: '#007bff',
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    },
};

export default Navbar;