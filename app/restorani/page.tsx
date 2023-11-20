'use client';
import { RERSTORANI } from '@/constants/restorani';
import MyCustomImage from '@/components/MyCustomImage';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { KATEGORIJE } from '@/constants';

const Restorani = () => {
  const categoryChecker = (naziv: string) => {
    if (naziv === 'fast food') {
      return 'fast';
    } else {
      return naziv;
    }
  };

  const days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  const dayName = days[new Date().getDay()];

  const [isOpen, setIsOpen] = useState(false);

  const [sorte, setSorte] = useState([
    { text: 'Najnovije' },
    { text: 'Najstarije' },
    { text: 'Popularno' },
  ]);

  const [value, setValue] = useState(sorte[0].text);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestorani = RERSTORANI.filter((restoran) =>
    restoran.naziv.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const sortedRestorani = [...filteredRestorani].sort((a: any, b: any) => {
    switch (value) {
      case 'Najnovije':
        return b.id - a.id;
      case 'Najstarije':
        return a.id - b.id;
      case 'Popularno':
        a.id - b.id;
        return 0;
      default:
        return 0;
    }
  });

  const handleSearchChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="flex flex-col w-full sm:p-0 p-4 overflow-x-hidden">
      <div className="w-full relative flex-col flex-center  p-2 mb-4 mt-20 sm:mt-0">
        <h1 className="dark:text-white text-5xl font-semibold p-2 ">
          Restorani
        </h1>
        <div className=" w-[20%] sm:w-[12%] h-1 bg-orange-400 mb-0 mt-3 rounded-sm" />
      </div>
      <div className="flex-between  dark:bg-slate-200/20 bg-slate-400/30 mb-5 relative rounded-md  p-2 gap-2 xs-flex-wrap">
        <input
          type="text"
          className="rounded-md p-1 mr-2"
          placeholder="Pretraži.."
          value={searchQuery}
          onChange={handleSearchChange}
        />

        <div className="flex-center relative sm:flex-row flex-col  ">
          <button
            onClick={toggleMenu}
            className="dark:text-white flex sm:flex-row flex-col  gap-1 p-1 "
          >
            Prvo {value}
            <Image
              src={isOpen ? '/up.png' : '/down.png'}
              alt="icon"
              width={12}
              height={12}
              className="dark:invert mt-1.5 mx-auto sm:rotate-90 rotate-0}"
            />
          </button>
          {isOpen && (
            <ul className="flex gap-2 z-50  sm:flex-row flex-col  transition-all">
              {sorte.map(
                (rec: any) =>
                  rec.text !== value && (
                    <li
                      key={rec.text}
                      onClick={() => {
                        setValue(rec.text);
                        setIsOpen(false);
                      }}
                      className=" p-1  text-left font-medium cursor-pointer dark:text-white"
                    >
                      Prvo {rec.text}
                    </li>
                  )
              )}
            </ul>
          )}
        </div>
      </div>
      <div className=" flex  flex-wrap w-full  gap-2.5">
        {sortedRestorani.map((restoran: any) => (
          <div
            className="relative select-none rounded-b-xl rounded-t-md p-2.5 bg-gray-800/20 dark:bg-white/20  transition-all flex-1 "
            key={restoran.id}
          >
            <Link
              href={`/restorani/[restorani]`}
              as={`/restorani/${encodeURIComponent(
                restoran.naziv.replace(/\s+/g, '-')
              )}`}
              draggable="false"
            >
              <Link
                href={`/restorani/kategorije/[kategorija]`}
                as={`/restorani/kategorije/${categoryChecker(
                  restoran.vrsta.toLowerCase()
                )}`}
                draggable="false"
                className="absolute top-4 left-3.5 hover:scale-105 p-2.5 py-1  bg-opacity-90 rounded-3xl transition-all z-10 shadow-md hover:shadow-xl bg-amber-400"
              >
                <p className="tag text-sm">{restoran.vrsta}</p>
              </Link>
              <div className="overflow-hidden flex w-full items-center justify-center">
                <MyCustomImage
                  src={restoran.slike[0]}
                  alt={restoran.naziv}
                  width={300}
                  height={200}
                  className="card_img_res hover:scale-105 transition-all "
                />
              </div>
            </Link>

            <div className=" flex flex-col w-full">
              <Link
                href={`/restorani/[restorani]`}
                as={`/restorani/${encodeURIComponent(
                  restoran.naziv.replace(/\s+/g, '-')
                )}`}
                draggable="false"
              >
                <p className="p-2 pb-0 self-start dark:text-white font-semibold">
                  {restoran.naziv}
                </p>
              </Link>
              <div className="  flex-start">
                <Image
                  src={'/clock.png'}
                  alt="clock"
                  width={21}
                  height={21}
                  className="pl-1.5 mt-[2px] dark:invert"
                />
                <p className="px-1 dark:text-white text-sm">
                  {restoran.radnoVreme[dayName].otvaranje} /{' '}
                  {restoran.radnoVreme[dayName].zatvaranje}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restorani;
