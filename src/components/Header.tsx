import React from 'react';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      background: '#fff',
      padding: '1rem',
      zIndex: 999,
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <nav>
        <a href="#about" style={{ margin: '0 1rem' }}>About Me</a>
        <a href="#projects" style={{ margin: '0 1rem' }}>Projects</a>
        <a href="#workexperience" style={{ margin: '0 1rem' }}>Work Experience</a>
      </nav>
    </header>
  );
};

export default Header;
