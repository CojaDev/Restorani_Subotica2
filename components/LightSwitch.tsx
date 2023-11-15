'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type LightProp = {
  absolute: boolean;
  showOnSmall: boolean;
};

// ... (imports remain unchanged)

const LightSwitch = ({ absolute, showOnSmall }: LightProp) => {
  const getInitialDarkMode = () => {
    return (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  };

  const [isDark, setIsDark] = useState(getInitialDarkMode);

  useEffect(() => {
    updateDarkMode();
  }, [isDark]);

  const updateDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const toggler = () => {
    setIsDark(!isDark);
    updateDarkMode();
  };

  return (
    <div
      className={`${
        showOnSmall ? 'sm:hidden flex' : 'sm:flex hidden'
      } select-none`}
    >
      <button
        className={`flex border rounded-lg border-white dark:border-black  active:scale-95 transition-all ${
          absolute ? 'absolute top-[20px] left-5 ' : 'relative'
        } `}
        onClick={toggler}
      >
        <Image
          src={isDark ? '/sunW.png' : '/moonB.png'}
          alt="Switch"
          draggable="false"
          width={38}
          height={38}
        />
      </button>
    </div>
  );
};

export default LightSwitch;
