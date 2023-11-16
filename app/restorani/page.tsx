import React from 'react';
import { RERSTORANI } from '@/constants/restorani';
import MyCustomImage from '@/components/MyCustomImage';
import Link from 'next/link';
import Image from 'next/image';

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

  return (
    <section className="flex flex-wrap w-full gap-2.5">
      {RERSTORANI.map((restoran) => (
        <div className="relative select-none rounded-b-xl rounded-t-md p-2.5 bg-gray-800/20 dark:bg-white/20  transition-all flex-1 ">
          <Link
            key={restoran.id}
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
            <div className="overflow-hidden">
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
    </section>
  );
};

export default Restorani;
