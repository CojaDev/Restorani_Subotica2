'use client';
import MyCustomImage from '@/components/MyCustomImage';
import { RERSTORANI } from '@/constants/restorani';
import Link from 'next/link';
import { useState, useEffect } from 'react';
type nameprop = {
  params: any;
};
const RestoranPage = ({ params }: nameprop) => {
  const { restorani } = params;

  // Find the restoran object based on the 'naziv' parameter
  const restoran = RERSTORANI.find(
    (r) => r.naziv.replace(/\s+/g, '-') === restorani
  );
  const radnovreme = [restoran?.radnoVreme];
  if (!restoran) {
    return (
      <div className="mt-36 mb-5 flex-col flex-center">
        <p className="dark:text-white text-9xl">404</p>
        <p className="dark:text-white text-xl">Neko je pojeo tvoj restoran</p>
        <Link
          href={'/'}
          draggable="false"
          className="dark:text-white mt-3  outline_btn"
        >
          <p className="text-xl">Vrati se nazad</p>
        </Link>
      </div>
    );
  }

  const [openState, setOpenState] = useState(0);
  const dayNames: any = {
    monday: 'Ponedeljak',
    tuesday: 'Utorak',
    wednesday: 'Sreda',
    thursday: 'Četvrtak',
    friday: 'Petak',
    saturday: 'Subota',
    sunday: 'Nedelja',
  };
  return (
    <div className="flex-center flex-col w-full sm:mt-2 mt-24">
      <div className="banner relative w-screen p-2 flex-center  flex-col bg-black/40 dark:bg-slate-400/40 h-[30rem]  sm:px-20 shadow-lg">
        <MyCustomImage
          src={restoran.slike[1]}
          alt={restoran.naziv}
          width={500}
          height={300}
          className="w-full h-full object-cover "
        />
        <div className=" rounded-full overflow-hidden  border-4 dark:border-white/90 border-gray-700/90 absolute -bottom-10 w-32 h-32 shadow-md">
          <MyCustomImage
            src={restoran.slike[0]}
            alt={restoran.naziv}
            width={170}
            height={170}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="info p-10 bg-slate-300/50 dark:bg-slate-300/40 w-full h-full rounded-b-lg">
        <h1 className=" text-3xl dark:text-white font-semibold text-center">
          {restoran.naziv}
        </h1>
        <div className="flex-between2 gap-2 pt-2 sm:flex-row flex-col ">
          <div className="flex-1  bg-slate-300/50 p-1 min-w-full sm:min-w-0">
            <button
              className="dark:text-white text-xl w-full hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all p-2"
              onClick={() => {
                if (openState === 2) {
                  setOpenState(0);
                } else {
                  setOpenState(2);
                }
              }}
            >
              INFO:
            </button>
            {openState === 2 && (
              <>
                <hr className="dark:bg-white bg-black my-1" />
                <p className="dark:text-white text-md my-2">
                  <strong>Broj Telefona:</strong> {restoran.brojTel}
                </p>
                <p className="dark:text-white text-md my-2">
                  <strong>Adresa:</strong> {restoran.adresa}
                </p>
                <p className="dark:text-white text-md my-2">
                  <strong>Websajt: </strong>
                  <Link
                    href={restoran.websajt}
                    className="hover:invert transition-all"
                    target="blank"
                  >
                    {restoran.websajt}
                  </Link>
                </p>
              </>
            )}
          </div>
          <div className="flex-1 bg-slate-300/50 p-1 min-w-full sm:min-w-0">
            <button
              className="dark:text-white text-xl w-full hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all p-2"
              onClick={() => {
                if (openState === 1) {
                  setOpenState(0);
                } else {
                  setOpenState(1);
                }
              }}
            >
              O NAMA:
            </button>
            {openState === 1 && (
              <>
                <hr className="dark:bg-white bg-black my-1" />
                <p className="dark:text-white text-md">- {restoran.opis}</p>
              </>
            )}
          </div>
          <div className="flex-1 bg-slate-300/50 p-1 min-w-full sm:min-w-0">
            <button
              className="dark:text-white text-xl w-full hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all p-2"
              onClick={() => {
                if (openState === 3) {
                  setOpenState(0);
                } else {
                  setOpenState(3);
                }
              }}
            >
              RADNO VREME:
            </button>
            {openState === 3 && (
              <>
                <hr className="dark:bg-white bg-black my-1" />
                {Object.entries(restoran.radnoVreme).map(
                  ([day, hours]: any) => (
                    <p key={day} className="dark:text-white text-md">
                      <strong>{dayNames[day]}: </strong>
                      {`${hours.otvaranje} / ${hours.zatvaranje}`}
                    </p>
                  )
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestoranPage;
