import { useState, useEffect } from 'react';
import Link from 'next/link';
type resProp = {
  restoran: any;
};
const RestoranInfo = ({ restoran }: resProp) => {
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
    <div className="info p-10 bg-slate-400/30 dark:bg-slate-300/40 w-full h-full rounded-b-lg ">
      <h1 className=" text-3xl dark:text-white font-semibold text-center">
        {restoran.naziv}
      </h1>
      <div className="flex-between2 gap-x-5 gap-y-2 pt-2 sm:flex-row flex-col relative  ">
        <div className="flex-1  bg-slate-400/40 dark:bg-slate-300/50 p-1 min-w-full sm:min-w-0 relative rounded-lg ">
          <button
            className="dark:text-white text-lg w-full hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all p-2 rounded-md "
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
            <div className="sm:absolute relative left-0   w-full  p-2 pt-0  rounded-b-lg dark:bg-[#9199A7] bg-[#BEC5D7] shadow-md -mt-0.5">
              <p className="dark:text-white text-md my-2">
                <strong>Broj Telefona:</strong>{' '}
                <a
                  className="hover:invert underline transition-all"
                  href={`tel:${restoran.brojTel}`}
                >
                  {restoran.brojTel}
                </a>
              </p>
              <p className="dark:text-white text-md my-2">
                <strong>Adresa:</strong> {restoran.adresa}
              </p>
              <p className="dark:text-white text-md my-2 overflow-hidden">
                <strong>Websajt: </strong>
                <Link
                  href={restoran.websajt}
                  className="hover:invert transition-all overflow-hidden"
                  target="blank"
                >
                  {restoran.websajt}
                </Link>
              </p>
            </div>
          )}
        </div>
        <div className="flex-1 bg-slate-400/40 dark:bg-slate-300/50 p-1 min-w-full sm:min-w-0 relative rounded-lg ">
          <button
            className="dark:text-white text-lg w-full hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all p-2 rounded-md  "
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
            <div className="sm:absolute relative left-0   w-full  p-2 pt-0  rounded-b-lg dark:bg-[#979FAA] bg-[#B9C3D5]/90 shadow-md -mt-0.5">
              <p className="dark:text-white text-md">- {restoran.opis}</p>
            </div>
          )}
        </div>
        <div className="flex-1 bg-slate-400/40 dark:bg-slate-300/50 p-1 min-w-full sm:min-w-0 relative rounded-lg ">
          <button
            className="dark:text-white text-lg w-full hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all p-2 rounded-md "
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
            <div className="sm:absolute relative left-0 w-full p-2 pt-0 rounded-b-lg dark:bg-[#929CA5] bg-[#BFC9D5] shadow-md -mt-0.5">
              {Object.entries(restoran.radnoVreme).map(([day, hours]: any) => (
                <p key={day} className="dark:text-white text-md">
                  <strong>{dayNames[day]}: </strong>
                  {`${hours.otvaranje} / ${hours.zatvaranje}`}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestoranInfo;
