import React from 'react';
import ThemeSwitcher from './child';
/** When using the ThemeSwitcher component, we pass a function as a render prop.
 *  This function receives the current theme and the toggleTheme function as arguments, 
 * allowing you to define how the UI should look and behave based on the theme. */
function App() {
  return (
    <ThemeSwitcher
      render={({ theme, toggleTheme }) => (
        <div style={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          height: '100vh',
          width: "1396px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <button onClick={toggleTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div>
      )}
    />
  );
};

export default App;
