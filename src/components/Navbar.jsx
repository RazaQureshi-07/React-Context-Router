import React from 'react';
import { Link } from 'react-router';
import { useTheme } from '../ThemeContext';

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', backgroundColor: theme === 'light' ? '#f0f0f0' : '#333' }}>
      <div style={{ display: 'flex', gap: '16px' }}>
        <Link to="/" style={{ fontWeight: 'bold', color: '#1e40af' }}>Home</Link>
        <Link to="/todos" style={{ color: theme === 'light' ? '#4a5568' : '#fff' }}>Todos</Link>
        <Link to="/users" style={{ color: theme === 'light' ? '#4a5568' : '#fff' }}>Users</Link>
      </div>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: '#3b82f6',
          color: '#fff',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          border: 'none',
          transition: 'background-color 0.3s',
        }}
      >
        Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </nav>
  );
}

export default Navbar;
