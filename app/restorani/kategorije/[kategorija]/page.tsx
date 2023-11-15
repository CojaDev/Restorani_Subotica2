'use client';
import { KATEGORIJE } from '@/constants';

import Link from 'next/link';
type nameprop = {
  params: any;
};
const KategorijePage = ({ params }: nameprop) => {
  const { kategorije } = params;

  // Find the restoran object based on the 'naziv' parameter
  const kategorija = KATEGORIJE.find((r) => r.key === params.kategorija);

  if (!kategorija) {
    console.log(params.kategorija);
    return (
      <div className="mt-36 mb-5 flex-col flex-center">
        <p className="dark:text-white text-9xl">404</p>
        <p className="dark:text-white text-xl">Ova kategorija ne postoji</p>
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

  return (
    <div className="flex-col items-center w-full mt-20 px-2">
      <h1 className="px-1 dark:text-white text-xl">{kategorija.naziv}</h1>
    </div>
  );
};

export default KategorijePage;
