'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Search from './Search';
import LightSwitch from './LightSwitch';

const Navbar = () => {
  const [isMeni, setIsMeni] = useState(false);
  return (
    <nav
      className="flex w-full fixed top-0 sm:relative sm:bg-transparent bg-gray-100 sm:dark:bg-transparent  dark:bg-gray-900/95 
    sm:shadow-none shadow-lg flex-between p-4 mb-16 z-40  "
    >
      <Link
        href="/"
        draggable="false"
        className="flex-between gap-2 z-50"
        onClick={() => {
          setIsMeni(false);
        }}
      >
        <Image
          src="/logo2.png"
          alt="logo"
          draggable="false"
          width={40}
          height={40}
          className="object-contain invert-0 dark:invert"
        />
        <div className="flex-col">
          <p className="logo_text text-black dark:text-white mb-[-5px]">
            Restorani
          </p>
          <span
            className={`logo_subtext ${
              !isMeni ? 'orange_gradientlogo' : 'text-black dark:text-white'
            }`}
          >
            Subotica
          </span>
        </div>
        <LightSwitch absolute={false} showOnSmall />
      </Link>

      <div className="sm:flex hidden">
        <ul className="flex gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              draggable="false"
              className={link.variant + ' active:scale-90 transition-all'}
            >
              <li className="text-base font-medium ">{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="sm:hidden flex">
        <button
          onClick={() => setIsMeni(!isMeni)}
          type="button"
          className="z-50"
        >
          <Image
            src={isMeni ? '/close.png' : '/menu.png'}
            alt="Menu"
            width={30}
            height={30}
            className="invert-0 dark:invert active:scale-95 transition-all"
          />
        </button>
        <div
          className={`absolute top-0 left-0 w-screen h-screen dark:bg-gray-900 bg-white ${
            isMeni ? 'z-40' : 'hidden'
          }`}
        >
          <div className="mobile_nav_grid dark:invert-0" />

          <ul className="flex flex-col flex-center gap-2 mt-28 z-50 ">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                draggable="false"
                className={link.variant + '_mobile '}
                onClick={() => {
                  setIsMeni(false);
                }}
              >
                <li className="text-lg font-bold ">{link.label}</li>
              </Link>
            ))}
          </ul>
          <Search placeholder="Pretrazi.." navbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
