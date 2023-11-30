'use client';

import Restoran404 from '@/components/Restoran404';
import RestoranBanner from '@/components/RestoranBanner';
import RestoranInfo from '@/components/RestoranInfo';
import { RERSTORANI } from '@/constants/restorani';
import { useState } from 'react';
import Jelovnik from '@/components/Jelovnik';
import Galerija from '@/components/Galerija';
import Mapa from '@/components/Mapa';

type nameprop = {
  params: any;
};

const RestoranPage = ({ params }: nameprop) => {
  const { restorani } = params;

  // Find the restoran object based on the 'naziv' parameter
  const restoran: any = RERSTORANI.find(
    (r) => r.naziv.replace(/\s+/g, '-') === restorani
  );

  if (!restoran) {
    return <Restoran404 />;
  }

  const [sectionTag, setSectionTag] = useState(1);

  return (
    <div className="flex-center flex-col w-full sm:mt-2 mt-24">
      <RestoranBanner restoran={restoran} />
      <RestoranInfo restoran={restoran} />

      <div className="bg-slate-400/30 dark:bg-slate-300/40 w-full flex mt-10 p-3 sm:p-1 rounded-md sm:flex-row  sm:gap-0 gap-y-2 ">
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 border-r-2 border-white/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all uppercase sm:w-32 sm:flex-none flex-1  "
          onClick={() => {
            setSectionTag(1);
          }}
        >
          Jelovnik
        </button>
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all  border-r-2 border-white/50 uppercase sm:w-32 sm:flex-none flex-1 "
          onClick={() => {
            setSectionTag(2);
          }}
        >
          Galerija
        </button>
        <button
          className="p-2 dark:text-white bg-slate-400/40 dark:bg-slate-200/50 hover:bg-white/60 dark:hover:bg-slate-500/60 transition-all uppercase sm:w-32 sm:flex-none flex-1 border-r-2 border-white/50  "
          onClick={() => {
            setSectionTag(3);
          }}
        >
          Mapa
        </button>
      </div>
      <div className="bg-slate-400/30 dark:bg-slate-300/40 w-full p-5 pt-2 mt-5 rounded-md">
        {sectionTag === 1 && <Jelovnik restoran={restoran} />}
        {sectionTag === 2 && <Galerija restoran={restoran} />}
        {sectionTag === 3 && <Mapa restoran={restoran} />}
      </div>
    </div>
  );
};

export default RestoranPage;
