import React, { useState } from 'react';
/** We can use the ThemeSwitcher component in any other component to switch themes,
 *The toggleTheme function is used to switch between the light and dark themes dynamically
 */
const ThemeSwitcher = ({ render }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((elm) => (elm === 'light' ? 'dark' : 'light'));
  };

  return render({ theme, toggleTheme });
};

export default ThemeSwitcher;
