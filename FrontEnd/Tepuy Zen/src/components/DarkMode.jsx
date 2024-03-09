
import React, { useEffect, useState } from 'react';

const DarkMode = () => {

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        if (theme == "dark") {
            document.querySelector('html').classList.add('dark')
        } else {
            document.querySelector('html').classList.remove('dark')
        }
    }, [theme])

    const handleChangeTheme = () => {
        setTheme(prevTheme => prevTheme == "light" ? "dark" : "light")
    }
  
  return (
    <button
      className="fixed bottom-4 right-4 p-2 px-4 bg-gray-800 text-white rounded-full shadow-md focus:outline-none dark:bg-slate-500 dark:text-black"
      onClick={handleChangeTheme}
    >
      <i class="fa-solid fa-moon"></i>
    </button>
  );
};

export default DarkMode;
