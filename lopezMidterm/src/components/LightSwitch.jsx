import  { useState } from 'react';

function LightSwitch() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
    document.body.classList.toggle('light-mode', isDarkMode);
  };
  

  return (
    <div>
      <label htmlFor="LightSwitch">Light Switch:</label>
      <input
        id="LightSwitch"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
      />
    </div>
  );
}

export default LightSwitch;
