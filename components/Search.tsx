'use client';

import Image from 'next/image';
import { useState } from 'react';
type searchProps = {
  placeholder: string;
  navbar: boolean;
};

const Search = ({ placeholder, navbar }: searchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div
      className={`flex flex-between m-5  ${
        navbar ? 'flex-col gap-2' : 'flex-row gap-0'
      }`}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={(term) => {
          setSearchTerm(term.target.value);
        }}
        value={searchTerm}
        className={`border-black border focus:outline-none placeholder-gray-950 ${
          navbar
            ? 'w-full p-5 mt-16 text-lg'
            : 'p-2.5 border-r-0 border-s rounded-s-xl ps-2 border-black dark:border-white'
        }`}
      />
      <button
        type="submit"
        className={`black_btn_search  ${
          navbar ? 'w-full p-5 ' : 'p-2.5 rounded-e-xl '
        } `}
      >
        <p
          className={`orange_gradient font-black select-none ${
            navbar ? 'text-xl ' : ' text-base'
          } `}
        >
          Pretraži
        </p>
      </button>
    </div>
  );
};

export default Search;
