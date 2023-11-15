'use client';
import { RERSTORANI } from '@/constants/restorani';
import Link from 'next/link';
type nameprop = {
  params: any;
};
const RestoranPage = ({ params }: nameprop) => {
  const { restorani } = params;

  // Find the restoran object based on the 'naziv' parameter
  const restoran = RERSTORANI.find(
    (r) => r.naziv.replace(/\s+/g, '-') === restorani
  );

  if (!restoran) {
    // Handle the case where the restoran is not found
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

  return (
    <div className="flex-col items-center w-full mt-20 px-2">
      <h1 className="px-1 dark:text-white text-xl">{restoran.naziv}</h1>
      <div className="prompt_card p-5 w-full">
        <img src={restoran.slike[0]} alt={restoran.naziv} />
        <div className="glassmorphism">
          <p>{restoran.naziv}</p>
          {/* Add more details as needed */}
        </div>
      </div>
    </div>
  );
};

export default RestoranPage;
