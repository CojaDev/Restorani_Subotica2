'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type LightProp = {
  absolute: boolean;
  showOnSmall: boolean;
};

const LightSwitch = ({ absolute, showOnSmall }: LightProp) => {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    const getInitialDarkMode = () => {
      if (typeof window !== 'undefined') {
        const storedTheme = localStorage.getItem('theme');
        return (
          storedTheme === 'dark' ||
          (!storedTheme &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        );
      }
      return false; // Default to light mode if window is not defined
    };

    setIsDark(getInitialDarkMode());
  }, []);

  useEffect(() => {
    if (isDark !== null) {
      if (isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }
  }, [isDark]);

  const toggler = () => {
    setIsDark((prevIsDark) => (prevIsDark !== null ? !prevIsDark : false));
  };

  // Render a loading state if isDark is still null
  if (isDark === null) {
    return <div>Loading...</div>;
  }

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
