import { RERSTORANI } from '@/constants/restorani';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

type searchProps = {
  placeholder: string;
  navbar: boolean;
};

interface Restoran {
  naziv: string;
  // Add other properties if needed
}

const Search = ({ placeholder, navbar }: searchProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Restoran[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSearch = () => {
    const results = RERSTORANI.filter((restoran) =>
      restoran.naziv.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    setIsDropdownOpen(true);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      searchRef.current &&
      !searchRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const reset = () => {
    if (navbar) {
      setTimeout(() => {
        location.reload();
      }, 1000);
    }
  };

  return (
    <div
      ref={searchRef}
      className={`flex flex-between m-5  ${
        navbar ? 'flex-col gap-2' : 'flex-row gap-0'
      } relative`}
    >
      <input
        type="text"
        placeholder={placeholder}
        onChange={(term) => setSearchTerm(term.target.value)}
        value={searchTerm}
        className={`border-black border focus:outline-none placeholder-gray-950 ${
          navbar
            ? 'w-full p-5 mt-16 text-lg'
            : 'p-2.5 border-r-0 border-s rounded-s-xl ps-2 border-black dark:border-white'
        }`}
      />
      {isDropdownOpen && searchResults.length > 0 && searchTerm.length > 1 && (
        <div
          className={`z-50 w-full ${
            navbar ? '' : 'top-9 absolute mt-3'
          } bg-white border border-gray-200 rounded-md shadow-lg`}
        >
          <ul className="">
            {searchResults.map((result) => (
              <Link
                key={result.naziv}
                href={`/restorani/[restorani]`}
                as={`/restorani/${encodeURIComponent(
                  result.naziv.replace(/\s+/g, '-')
                )}`}
                onClick={reset}
              >
                <li className="px-4 py-2 hover:bg-black/90 hover:text-white transition-all ">
                  {result.naziv}
                </li>
                <hr />
              </Link>
            ))}
          </ul>
        </div>
      )}
      {isDropdownOpen &&
        searchResults.length === 0 &&
        searchTerm.length > 1 && (
          <div
            className={`z-50 w-full ${
              navbar ? '' : 'top-9 absolute mt-3'
            } bg-white border border-gray-200 rounded-md shadow-lg`}
          >
            <ul className="py-1">
              <li className="px-4 py-2 text-red-500">Nema Rezultata</li>
            </ul>
          </div>
        )}
      <button
        type="button"
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
